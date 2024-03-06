package com.fyp.taboholicbackend.controller;

import com.fyp.taboholicbackend.model.WebsiteCarbon;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.core.io.ClassPathResource;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileWriter;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.charset.StandardCharsets;
import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URL;

@RestController

public class WebsiteCarbonController
{
    private static final Logger logger = LoggerFactory.getLogger(WebsiteCarbonController.class);

    private Map<String, WebsiteCarbon> websiteCarbonData = new HashMap<>();

//    @GetMapping("/getEmissions/{url}")
//    public String emissionsResponse(@PathVariable("url") String url)
//    {
//
//        RestTemplate restTemplate = new RestTemplate();
//
//        String encodedUrl = URLEncoder.encode(url, StandardCharsets.UTF_8);
//        String data = ("https://api.websitecarbon.com/site?url=" + encodedUrl);
//        ResponseEntity<String> response = restTemplate.getForEntity(data, String.class);
//        String responseBody = response.getBody();
//        // `https://api.websitecarbon.com/site?url=${encodedUrl}`; @PathVariable("url")
//        return responseBody;
//    }

    public Map<String, WebsiteCarbon> readEmissionsData() {

        ClassPathResource resource = new ClassPathResource("emissionData/emissionData.json");
        byte[] jsonData = new byte[0];
        try {
            jsonData = FileCopyUtils.copyToByteArray(resource.getInputStream());
        } catch (IOException e) {
            System.out.println("error reading emissions file");
        }
        String jsonString = new String(jsonData, StandardCharsets.UTF_8);

        //String jsonString = readFromFileToJSON("emissionData/emissionData.json");

        Gson gson = new Gson();
        WebsiteCarbon[] dataArray = gson.fromJson(jsonString, WebsiteCarbon[].class);


        for (WebsiteCarbon websiteCarbon : dataArray) {
            websiteCarbonData.put(websiteCarbon.getUrl(), websiteCarbon);
        }
        return websiteCarbonData;
    }

    public static void main(String[] args) {

    }

    @GetMapping("/getEmissions/")
    public WebsiteCarbon readSingleWebCarbonData(@RequestParam("url") String url) {
        logger.info("Received URL: {}", url);
        readEmissionsData();

        for (String key : websiteCarbonData.keySet()) {
            url = trimURL(url);
            if (key != null && url.startsWith(key)) {
                System.out.println("found" + key);
                return websiteCarbonData.get(key);
            }
        }

       // if (websiteCarbonData)
        //String key = pickFromData();
        WebsiteCarbon pickedData = readFromSeedData(); //method for picking from the seed data,

        addToMap(url, pickedData); //method for setting URL

       //System.out.println();
         //method for appending to the file

        return pickedData;
    }


    private WebsiteCarbon pickFromData(WebsiteCarbon[] websiteCarbons) {

     //   List<String> urlList = new ArrayList<>(websiteCarbonData.keySet());

        if (websiteCarbons.length > 0) {
            int randomIndex = new Random().nextInt(websiteCarbons.length);
            return websiteCarbons[randomIndex];
        }
        return null;
    }

    private WebsiteCarbon readFromSeedData() {

        String jsonString = readFromFileToJSON("emissionData/emissionDataSeed.json");
        Gson gson = new Gson();
        WebsiteCarbon[] dataArray = gson.fromJson(jsonString, WebsiteCarbon[].class);
        return pickFromData(dataArray);
    }

    private void addToMap(String url, WebsiteCarbon data) {

        String validURL = trimURL(url);
        data.setUrl(validURL);
        websiteCarbonData.put(validURL, data);

       // String jsonString = readFromFileToJSON("emissionData/emissionData.json");
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String jsonString = gson.toJson(websiteCarbonData.values());
        System.out.println(jsonString);

        try (FileWriter writer = new FileWriter("src/main/resources/emissionData/emissionData.json")) {
            writer.write(jsonString);
        } catch (IOException e) {
            e.printStackTrace();
        }
        //WebsiteCarbon[] existingDataArray = gson.fromJson(jsonString, WebsiteCarbon[].class);

        // Create a new array with the existing and new data
        // WebsiteCarbon[] newDataArray = Arrays.copyOf(existingDataArray, existingDataArray.length + 1);
        //newDataArray[newDataArray.length - 1] = data;

        // Write the updated data back to the file
//            ClassPathResource resource = new ClassPathResource("emissionData/emissionData.json");
//
//            writeJSONToFile(newDataArray, resource.getPath());

    }

    private String trimURL(String url) {
        URL parsedUrl = null;
        String trimmedUrl;
        try {
            parsedUrl = new URL(url);
            trimmedUrl = parsedUrl.getProtocol() + "://" + parsedUrl.getHost() + "/";
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
        return trimmedUrl;
    }
    private String readFromFileToJSON(String path) {

        ClassPathResource resource = new ClassPathResource(path);
        byte[] jsonData = new byte[0];
        try {
            jsonData = FileCopyUtils.copyToByteArray(resource.getInputStream());
        } catch (IOException e) {
            System.out.println("error reading emissions file");
        }
        String jsonString = new String(jsonData, StandardCharsets.UTF_8);
        return jsonString;
    }



    //test with hard-corded URL input
    @GetMapping("/getEmissions")
    public WebsiteCarbon readSingleWebCarbonData() {

        Map<String, WebsiteCarbon> newWebsiteCarbonData = new HashMap<>();
        newWebsiteCarbonData.put( "https://www.google.com/", readFromSeedData());

        String url = "https://www.google.com/";
        for (String key : newWebsiteCarbonData.keySet()) {

            if (key != null && url.startsWith(key)) {
                System.out.println(key);
                return newWebsiteCarbonData.get(key);
            }
        }
        return null;
    }

//    @GetMapping("/testHelloWorld")
//    public String testHelloWorld() {
//        return "hello World";
//    }

    //StringBuilder emissionsData = new StringBuilder();
    //        String fileName = "emissionData.json";
    //
    //        BufferedReader bufferedReader = new BufferedReader(new FileReader(fileName));
    //
    //        String line;
    //        while((line = bufferedReader.readLine()) != null){
    //            emissionsData.append(line).append("\n");
    //        }
    //        bufferedReader.close();


}


