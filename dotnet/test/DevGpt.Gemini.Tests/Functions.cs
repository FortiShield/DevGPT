﻿// Copyright (c) Khulnasoft Ltd. All rights reserved.
// Functions.cs

using DevGpt.Core;

namespace DevGpt.Gemini.Tests;

public partial class Functions
{
    /// <summary>
    /// Get weather for a city.
    /// </summary>
    /// <param name="city">city</param>
    /// <returns>weather</returns>
    [Function]
    public async Task<string> GetWeatherAsync(string city)
    {
        return await Task.FromResult($"The weather in {city} is sunny.");
    }

    [Function]
    public async Task<string> GetMovies(string location, string description)
    {
        var movies = new List<string> { "Barbie", "Spiderman", "Batman" };

        return await Task.FromResult($"Movies playing in {location} based on {description} are: {string.Join(", ", movies)}");
    }
}
