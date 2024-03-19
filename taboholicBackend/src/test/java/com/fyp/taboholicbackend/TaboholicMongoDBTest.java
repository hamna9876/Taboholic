package com.fyp.taboholicbackend;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

class TaboholicMongoDBTest {
    @Test
    void getAllURLSFromTaboholicMongoDB() {

        //arrange
        String uri = "mongodb+srv://hamnaaamer9876:PUQsO5fAhys8FRcv@taboholicdb.cnts44t.mongodb.net/" +
                "?retryWrites=true&w=majority&appName=taboholicDB";
        List<String> allURLs = new ArrayList<>();

        //act
        try (MongoClient mongoClient = MongoClients.create(uri)) {
            MongoDatabase database = mongoClient.getDatabase("TabDB");
            MongoCollection<Document> collection = database.getCollection("TabData");
            List<Document> allDocuments = collection.find().into(new ArrayList<>());
            //System.out.println(allDocuments.size());

            for (Document document : allDocuments) {
                String url = document.getString("url");
               // System.out.println(url);
                if (url != null) {
                    allURLs.add(url);
                }
            }
        }
        //assert
        assertTrue(!allURLs.isEmpty(), "no URLs found in TabData");
    }

    @Test
    void getSingularURLFromTaboholicMongoDB() {

        //arrange (for url //https://discord.com/)
        String uri = "mongodb+srv://hamnaaamer9876:PUQsO5fAhys8FRcv@taboholicdb.cnts44t.mongodb.net/" +
                "?retryWrites=true&w=majority&appName=taboholicDB";
        Document urlFilter = new Document("url", "https://discord.com/");

        //act
        try (MongoClient mongoClient = MongoClients.create(uri)) {
            MongoDatabase database = mongoClient.getDatabase("TabDB");
            MongoCollection<Document> collection = database.getCollection("TabData");
            Document urlDocument = collection.find(urlFilter).first();

            //assert
            assertNotNull(urlDocument, "document was not found, test failed");
            System.out.println(urlDocument);
        }
    }

    @Test
    void getIncorrectURLFromTaboholicMongoDB() {

        //arrange (for url //https://www.incorrectExample.com/)
        String uri = "mongodb+srv://hamnaaamer9876:PUQsO5fAhys8FRcv@taboholicdb.cnts44t.mongodb.net/" +
                "?retryWrites=true&w=majority&appName=taboholicDB";
        Document urlFilter = new Document("url", "https://www.incorrectExample.com/");

        //act
        try (MongoClient mongoClient = MongoClients.create(uri)) {
            MongoDatabase database = mongoClient.getDatabase("TabDB");
            MongoCollection<Document> collection = database.getCollection("TabData");
            Document urlDocument = collection.find(urlFilter).first();

            //assert
            assertNull(urlDocument, "document was found, test failed");
        }
    }

    @Test
    void testMongoDBReturnsEmissionGrams() {

        //arrange
        String uri = "mongodb+srv://hamnaaamer9876:PUQsO5fAhys8FRcv@taboholicdb.cnts44t.mongodb.net/" +
                "?retryWrites=true&w=majority&appName=taboholicDB";
        Document urlFilter = new Document("url", "https://www.youtube.com/");
        Double expectedGrams = 0.8904780006059446;

        //act
        try (MongoClient mongoClient = MongoClients.create(uri)) {
            MongoDatabase database = mongoClient.getDatabase("TabDB");
            MongoCollection<Document> collection = database.getCollection("TabData");
            Document urlDocument = collection.find(urlFilter).first();

            System.out.println(urlDocument);

            Double actualGrams = urlDocument.get("statistics", Document.class)
                                        .get("co2", Document.class)
                                        .get("grid", Document.class)
                                        .getDouble("grams");
            //assert
            assertNotNull(urlDocument, "document was not found, test failed");
            assertEquals(expectedGrams, actualGrams);
        }
    }

}