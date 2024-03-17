package com.fyp.taboholicbackend.controller;

import com.fyp.taboholicbackend.model.WebsiteCarbon;
import org.bson.Document;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.io.IOException;
import java.net.MalformedURLException;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

public class WebsiteCarbonControllerTest {
    private WebsiteCarbonController websiteCarbonController;
    @Mock
    private WebsiteCarbonController websiteCarbonControllerMock;

    @BeforeEach
    void setUp() throws IOException {
        websiteCarbonController = new WebsiteCarbonController();
        websiteCarbonController.readEmissionsData();

        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testReadSingleWebCarbonData() throws IOException {

        // Arrange
        WebsiteCarbon expectedWebsiteCarbon = new WebsiteCarbon();
        expectedWebsiteCarbon.setUrl("https://www.google.com/");

        //act
        WebsiteCarbon result = websiteCarbonController.
                readSingleWebCarbonData("https://www.google.com/search?q=test&oq=test&gs_lcrp=EgZjaHJvbWUyDAgAEEUYOR" +
                "ixAxiABDIOCAEQRRgnGDsYgAQYigUyDQgCEC4YrwEYxwEYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBggGEEUYPDIG" +
                "CAcQRRg80gEHNDcwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8");

        //assert
        assertEquals(expectedWebsiteCarbon.getUrl(), result.getUrl());
    }

    @Test
    void testMongoDBReturnsURL() {
        //arrange
        String expectedUrl = "https://www.google.com/";
        Document mockDocument = new Document("url", expectedUrl);
        when(websiteCarbonControllerMock.getSingleWebCarbonDataMongoDB(anyString())).thenReturn(mockDocument);

        //act
        Document actualResult = websiteCarbonControllerMock.
                getSingleWebCarbonDataMongoDB("https://www.google.com/search?q=test&oq=test&gs_lcrp=EgZjaHJvbWUyD" +
                        "AgAEEUYORixAxiABDIOCAEQRRgnGDsYgAQYigUyDQgCEC4YrwEYxwEYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYg" +
                        "AQyBggGEEUYPDIGCAcQRRg80gEHNDcwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8");

        //assert
        assertNotNull(actualResult);
        assertEquals(expectedUrl, actualResult.getString("url"));
    }

    @Test
    void testInvalidURLThrowsError() {

        //arrange
        String invalidURL = "//www.google.";

        //act and assert
        assertThrows(IllegalArgumentException.class, () -> {
            websiteCarbonController.getSingleWebCarbonDataMongoDB(invalidURL);
        });
    }

    @Test
    void testEmptyURLThrowsError() {
        //arrange
        String invalidURL = null;

        //act and assert
        assertThrows(IllegalArgumentException.class, () -> {
            websiteCarbonController.getSingleWebCarbonDataMongoDB(invalidURL);
        });
    }

    @Test
    void testTrimURLMethod() {

        //arrange
        String[] urls = {
                "https://www.bbc.com",
                "https://www.bbc.com/news",
                "https://bbc.com/news?q=test",
                "  https://www.example.com/URL/with/spaces  ",
                "http://www.example.com/"
        };
        String[] expectedTrimmedUrls = {
                "https://www.bbc.com/",
                "https://www.bbc.com/",
                "https://bbc.com/",
                "https://www.example.com/",
                "http://www.example.com/"
        };

        for (int i = 0; i < urls.length; i++) {
            //act
            String trimmedUrl = websiteCarbonController.trimURL(urls[i]);
            //assert
            assertEquals(expectedTrimmedUrls[i], trimmedUrl, "Trimming failed for URL: " + urls[i]);
        }
    }
}


// test other URL, test empties
//test data , mock one obj, test to see if it gets the other data