package com.fyp.taboholicbackend.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.stream.JsonReader;

import java.io.IOException;
import java.io.StringReader;

public class Test
{
    public static void main(String[] args) {
        WebsiteCarbonController wc = new WebsiteCarbonController();

        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        //String formattedJson = gson.toJson(wc.readEmissionsData());

       String formattedJson = gson.toJson(wc.readSingleWebCarbonData
                ("https://www.amazon.com")); // https://www.mybib.com/ https://www.google.com/search
       System.out.println(formattedJson);

    }
}
