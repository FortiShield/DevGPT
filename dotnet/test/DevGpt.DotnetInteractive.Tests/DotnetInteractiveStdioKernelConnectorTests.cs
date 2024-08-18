﻿// Copyright (c) Khulnasoft Ltd. All rights reserved.
// DotnetInteractiveStdioKernelConnectorTests.cs

using DevGpt.DotnetInteractive.Extension;
using FluentAssertions;
using Khulnasoft.DotNet.Interactive;
using Xunit;
using Xunit.Abstractions;

namespace DevGpt.DotnetInteractive.Tests;

[Collection("Sequential")]
public class DotnetInteractiveStdioKernelConnectorTests
{
    private string _workingDir;
    private Kernel kernel;
    public DotnetInteractiveStdioKernelConnectorTests(ITestOutputHelper output)
    {
        _workingDir = Path.Combine(Path.GetTempPath(), "test", Path.GetRandomFileName());
        if (!Directory.Exists(_workingDir))
        {
            Directory.CreateDirectory(_workingDir);
        }

        kernel = DotnetInteractiveKernelBuilder
            .CreateKernelBuilder(_workingDir)
            .RestoreDotnetInteractive()
            .AddPythonKernel("python3")
            .BuildAsync().Result;
    }


    [Fact]
    public async Task ItAddCSharpKernelTestAsync()
    {
        var csharpCode = """
            #r "nuget:Khulnasoft.ML, 1.5.2"
            var str = "Hello" + ", World!";
            Console.WriteLine(str);
            """;

        var result = await this.kernel.RunSubmitCodeCommandAsync(csharpCode, "csharp");
        result.Should().Contain("Hello, World!");
    }

    [Fact]
    public async Task ItAddPowershellKernelTestAsync()
    {
        var powershellCode = @"
            Write-Host 'Hello, World!'
            ";

        var result = await this.kernel.RunSubmitCodeCommandAsync(powershellCode, "pwsh");
        result.Should().Contain("Hello, World!");
    }

    [Fact]
    public async Task ItAddFSharpKernelTestAsync()
    {
        var fsharpCode = """
            printfn "Hello, World!"
            """;

        var result = await this.kernel.RunSubmitCodeCommandAsync(fsharpCode, "fsharp");
        result.Should().Contain("Hello, World!");
    }

    [Fact]
    public async Task ItAddPythonKernelTestAsync()
    {
        var pythonCode = """
            %pip install numpy
            str = 'Hello' + ', World!'
            print(str)
            """;

        var result = await this.kernel.RunSubmitCodeCommandAsync(pythonCode, "python");
        result.Should().Contain("Hello, World!");
    }
}
