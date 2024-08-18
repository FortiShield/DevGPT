﻿// Copyright (c) Khulnasoft Ltd. All rights reserved.
// Streaming_Tool_Call.cs

using DevGpt.Core;
using DevGpt.OpenAI;
using DevGpt.OpenAI.Extension;
using Azure.AI.OpenAI;
using FluentAssertions;

namespace DevGpt.BasicSample.GettingStart;

internal class Streaming_Tool_Call
{
    public static async Task RunAsync()
    {
        #region Create_tools
        var tools = new Tools();
        #endregion Create_tools

        #region Create_auto_invoke_middleware
        var autoInvokeMiddleware = new FunctionCallMiddleware(
            functions: [tools.GetWeatherFunctionContract],
            functionMap: new Dictionary<string, Func<string, Task<string>>>()
            {
                { tools.GetWeatherFunctionContract.Name, tools.GetWeatherWrapper },
            });
        #endregion Create_auto_invoke_middleware

        #region Create_Agent
        var apiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY") ?? throw new Exception("Please set OPENAI_API_KEY environment variable.");
        var model = "gpt-4o";
        var openaiClient = new OpenAIClient(apiKey);
        var agent = new OpenAIChatAgent(
            openAIClient: openaiClient,
            name: "agent",
            modelName: model,
            systemMessage: "You are a helpful AI assistant")
            .RegisterMessageConnector()
            .RegisterStreamingMiddleware(autoInvokeMiddleware)
            .RegisterPrintMessage();
        #endregion Create_Agent

        IMessage finalReply = null;
        var question = new TextMessage(Role.User, "What's the weather in Seattle");

        // In streaming function call
        // function can only be invoked untill all the chunks are collected
        // therefore, only one ToolCallAggregateMessage chunk will be return here.
        await foreach (var message in agent.GenerateStreamingReplyAsync([question]))
        {
            finalReply = message;
        }

        finalReply?.GetContent().Should().Be("The weather in Seattle is sunny.");
    }
}
