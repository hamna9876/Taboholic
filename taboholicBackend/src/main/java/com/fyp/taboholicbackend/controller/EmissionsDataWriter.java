package com.fyp.taboholicbackend.controller;

import com.fyp.taboholicbackend.model.WebsiteCarbon;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class EmissionsDataWriter {

    public void writeEmissionsData(Map<String, WebsiteCarbon> websiteCarbonData, String fileName) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        try (FileWriter writer = new FileWriter(fileName)) {
            gson.toJson(websiteCarbonData, writer);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        // Assuming you have a HashMap<String, WebsiteCarbon> named websiteCarbonData
        Map<String, WebsiteCarbon> websiteCarbonData = new HashMap<>();
        WebsiteCarbonController wc = new WebsiteCarbonController();
        websiteCarbonData = wc.readEmissionsData();

        EmissionsDataWriter writer = new EmissionsDataWriter();
        writer.writeEmissionsData(websiteCarbonData, "src/main/resources/emissionData/output.json");
    }
}