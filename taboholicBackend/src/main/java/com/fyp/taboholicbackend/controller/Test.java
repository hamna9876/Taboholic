package com.fyp.taboholicbackend.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.IOException;

public class Test
{
    public static void main(String[] args) throws IOException {
        WebsiteCarbonController wcc = new WebsiteCarbonController();
        //System.out.println(wcc.readEmissionsData());
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String formattedJson = gson.toJson(wcc.readEmissionsData());
      //  System.out.println(formattedJson);

        System.out.println(wcc.readSingleWebCarbonData());
    }

}
