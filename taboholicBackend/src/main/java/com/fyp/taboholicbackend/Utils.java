package com.fyp.taboholicbackend;

import org.springframework.core.io.ClassPathResource;
import org.springframework.util.FileCopyUtils;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

public class Utils
{
    public static String readFromFileToJSON(String path) {

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
}
