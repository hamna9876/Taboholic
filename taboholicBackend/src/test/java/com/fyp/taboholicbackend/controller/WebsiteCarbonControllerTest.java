package com.fyp.taboholicbackend.controller;

import com.fyp.taboholicbackend.model.WebsiteCarbon;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.io.IOException;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class WebsiteCarbonControllerTest
{
    private WebsiteCarbonController websiteCarbonController;

    @BeforeEach
    void setUp() throws IOException {
        websiteCarbonController = new WebsiteCarbonController();
        websiteCarbonController.readEmissionsData();

    }

    @Test
    void testReadSingleWebCarbonData() throws IOException {

        // Arrange
        WebsiteCarbon expectedWebsiteCarbon = new WebsiteCarbon();
        expectedWebsiteCarbon.setUrl("https://www.google.com/");

        //act
//        WebsiteCarbon result = websiteCarbonController.
//                readSingleWebCarbonData("https://www.google.com/search?q=test&oq=test&gs_lcrp=EgZjaHJvbWUyDAgAEEUYOR" +
//                "ixAxiABDIOCAEQRRgnGDsYgAQYigUyDQgCEC4YrwEYxwEYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBggGEEUYPDIG" +
//                "CAcQRRg80gEHNDcwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8");

        //assert
//        assertEquals(expectedWebsiteCarbon.getUrl(), result.getUrl());
    }

}
