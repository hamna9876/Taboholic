package com.fyp.taboholicbackend;

import com.fyp.taboholicbackend.controller.WebsiteCarbonController;
import com.fyp.taboholicbackend.model.WebsiteCarbon;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.List;

import static com.fyp.taboholicbackend.Utils.readFromFileToJSON;
import static com.mongodb.client.model.Filters.eq;


public class TaboholicMongoDB
{
    public static void main( String[] args )
    {
        String uri = "mongodb+srv://hamnaaamer9876:PUQsO5fAhys8FRcv@taboholicdb.cnts44t.mongodb.net/?retryWrites=true&w=majority&appName=taboholicDB";

        try (MongoClient mongoClient = MongoClients.create(uri)) {
            MongoDatabase database = mongoClient.getDatabase("TabDB");
            MongoCollection<Document> collection = database.getCollection("TabData");

                Document doc = (Document) collection.find();
                if (doc != null) {
                    System.out.println(doc.toJson());
                } else {
                    System.out.println("No matching documents found.");
                }
        } catch (Exception e) {
        System.err.println("Error: " + e.getMessage());
    }
    }

//    public static void main(String[] args) {
//        String connectionString = "mongodb+srv://hamnaaamer9876:PUQsO5fAhys8FRcv@taboholicdb.cnts44t.mongodb.net/" +
//                "?retryWrites=true&w=majority&appName=taboholicDB";
//        ServerApi serverApi = ServerApi.builder()
//                .version(ServerApiVersion.V1)
//                .build();
//        MongoClientSettings settings = MongoClientSettings.builder()
//                .applyConnectionString(new ConnectionString(connectionString))
//                .serverApi(serverApi)
//                .build();
//        // Create a new client and connect to the server
//        try (MongoClient mongoClient = MongoClients.create(settings)) {
//            try {
//                // Send a ping to confirm a successful connection
//                MongoDatabase database = mongoClient.getDatabase("admin");
//                database.runCommand(new Document("ping", 1));
//                System.out.println("Pinged your deployment. You successfully connected to MongoDB!");
//            } catch (MongoException e) {
//                e.printStackTrace();
//            }
//        }
//    }
}