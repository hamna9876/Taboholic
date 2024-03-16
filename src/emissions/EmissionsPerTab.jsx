import React from "react";
import { useEffect, useState } from "react";
import { ColorSwatch, Loader } from "@mantine/core";
import axios from "axios";

export default function EmissionsPerTab({ url }) {
  const [emissionPerTab, setEmissionPerTab] = useState(null);

  const isValidURL = (url) => {
    // Regular expression to man[tch with https://
    const urlPattern = /^https:\/\//i;
    return urlPattern.test(url);
  };

  useEffect(() => {
    // if (!isValidURL(url)) {
    //   // If the URL is not valid, set emissions to "N/A"
    //   setEmissionPerTab("N/A");
    //   return;
    // }
    const request = async () => {
      try {
        const encodedUrl = encodeURIComponent(url);
        // const reqestURL = `https://api.websitecarbon.com/site?url=${encodedUrl}`;
        const requestURL = `http://localhost:8080/getEmissions/?url=${encodedUrl}`;
        const response = await fetch(requestURL);
        if (!response.ok) {
          throw new Error("server response was not OK");
        }
        console.log(response);
        const data = await response.json();
        setEmissionPerTab(data);
        console.log("returned", data);
      } catch (error) {
        console.error("error : ", error);
        // setEmissionPerTab("N/A"); //fall back to scraping bee
        try {
          const scrapingBeeResponse = await axios.get(
            "https://app.scrapingbee.com/api/v1/",
            {
              params: {
                api_key:
                  "UWEF3YQ3XZZ6PMZPT9EGW1Q7H13MIQK2CA2AURVMXNJBKSJRBI79L7KNWDY5OWAT51BCENIRFACLNJFV",
                url: url,
                extract_rules:
                  '{"images":{"selector":"img","type":"list","output":{"src":"img@src","alt":"img@alt"}}}',
              },
            }
          );

          // calc the bytes
          const totalBytes = scrapingBeeResponse.data.images.reduce(
            (total, image) => total + image.src.length,
            0
          );

          const emissionsAPIResponse = await axios.get(
            `https://api.websitecarbon.com/data?bytes=${totalBytes}&green=0`
          );

          setEmissionPerTab(emissionsAPIResponse.data);
        } catch (error) {
          console.error(
            "Error fetching emissions data from ScrapingBee:",
            error
          );
          setEmissionPerTab("N/A");
        }
      }
    };
    //https://api.websitecarbon.com/site?url=

    request();
  }, [url]);

  return (
    <div className="EmissionsPerTab">
      <div>
        {emissionPerTab === null ? (
          <Loader color="rgba(168, 44, 44, 1)" size="xs" />
        ) : typeof emissionPerTab === "object" ? (
          emissionPerTab.statistics.co2.grid.grams.toFixed(2) + ""
        ) : (
          "N/A"
        )}
        {/* bytes {emissionPerTab && emissionPerTab.bytes} */}
      </div>
    </div>
  );
}

//pass in the url as prop and then substitute when rendering the whole list
