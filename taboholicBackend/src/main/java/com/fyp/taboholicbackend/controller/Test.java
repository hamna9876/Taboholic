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
        String formattedJson = gson.toJson(wc.readEmissionsData());

//        JsonReader reader = new JsonReader(new StringReader(formattedJson));
//        reader.setLenient(true);
//        System.out.println(formattedJson);

//       String formattedJson = gson.toJson(wcc.readSingleWebCarbonData
//                ()); // https://www.mybib.com/ https://www.google.com/search
//       System.out.println(formattedJson);

    }
}
