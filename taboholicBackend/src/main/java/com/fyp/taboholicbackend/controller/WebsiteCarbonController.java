package com.fyp.taboholicbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@RestController

public class WebsiteCarbonController
{
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

}
