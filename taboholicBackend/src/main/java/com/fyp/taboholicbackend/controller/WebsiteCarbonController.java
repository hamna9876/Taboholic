package com.fyp.taboholicbackend.controller;

import com.fyp.taboholicbackend.model.WebsiteCarbon;
import com.google.gson.Gson;
import org.apache.tomcat.util.buf.UDecoder;
import org.springframework.core.io.ClassPathResource;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController

public class WebsiteCarbonController
{
    private static final Logger logger = LoggerFactory.getLogger(WebsiteCarbonController.class);

    private Map<String, WebsiteCarbon> websiteCarbonData;

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

        String file = "emissionData/emissionData.json";
        ClassPathResource resource = new ClassPathResource(file);

        byte[] jsonData = new byte[0];
        try {
            jsonData = FileCopyUtils.copyToByteArray(resource.getInputStream());
        } catch (IOException e) {
            System.out.println("error reading emissions file");
        }
        String jsonString = new String(jsonData, StandardCharsets.UTF_8);

        Gson gson = new Gson();
        WebsiteCarbon[] dataArray = gson.fromJson(jsonString, WebsiteCarbon[].class);

        websiteCarbonData = new HashMap<>();
        for (WebsiteCarbon websiteCarbon : dataArray) {
            websiteCarbonData.put(websiteCarbon.getUrl(), websiteCarbon);
        }
        return websiteCarbonData;
    }

    @GetMapping("/getEmissions/")
    public WebsiteCarbon readSingleWebCarbonData(@RequestParam("url") String url) {
        logger.info("Received URL: {}", url);
        readEmissionsData();
        for (String key : websiteCarbonData.keySet()) {

            if (key != null && url.startsWith(key)) {
                System.out.println(key);
                return websiteCarbonData.get(key);
            }
        }
        return null;
    }

    @GetMapping("/getEmissions")
    public WebsiteCarbon readSingleWebCarbonData() {
        readEmissionsData();
        String url = "https://www.google.com/";
        for (String key : websiteCarbonData.keySet()) {

            if (key != null && url.startsWith(key)) {
                System.out.println(key);
                return websiteCarbonData.get(key);
            }
        }
        return null;
    }

    @GetMapping("/testHelloWorld")
    public String testHelloWorld() {
        return "hello World";
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


