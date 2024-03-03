package com.fyp.taboholicbackend.controller;

import com.fyp.taboholicbackend.model.WebsiteCarbon;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController

public class WebsiteCarbonController
{

    private List<WebsiteCarbon> websiteCarbonData;

    @GetMapping("/getEmissions/{url}")
    public String emissionsResponse(@PathVariable("url") String url)
    {

        RestTemplate restTemplate = new RestTemplate();

        String encodedUrl = URLEncoder.encode(url, StandardCharsets.UTF_8);
        String data = ("https://api.websitecarbon.com/site?url=" + encodedUrl);
        ResponseEntity<String> response = restTemplate.getForEntity(data, String.class);
        String responseBody = response.getBody();
        // `https://api.websitecarbon.com/site?url=${encodedUrl}`; @PathVariable("url")
        return responseBody;
    }

    public List<WebsiteCarbon> readEmissionsData() throws IOException {

        String file = "emissionData/emissionData.json";
        ClassPathResource resource = new ClassPathResource(file);

        byte[] jsonData = FileCopyUtils.copyToByteArray(resource.getInputStream());
        String jsonString = new String(jsonData, StandardCharsets.UTF_8);

        Gson gson = new Gson();
        WebsiteCarbon[] dataArray = gson.fromJson(jsonString, WebsiteCarbon[].class);

        websiteCarbonData = new ArrayList<>(List.of(dataArray));
        return Arrays.asList(dataArray);
    }

    public WebsiteCarbon readSingleWebCarbonData() {
        return websiteCarbonData.get(5);
    }



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


