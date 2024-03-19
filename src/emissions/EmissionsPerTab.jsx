import React from "react";
import { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import axios from "axios";

export default function EmissionsPerTab({ url }) {
  const [emissionPerTab, setEmissionPerTab] = useState(null);
  const AVERAGE_IMAGE_BYTE_SIZE = 92236.5;

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
        console.log(requestURL);
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
                  "XUPSCH9Y3DF1QQ4NMQSL7A71AE98B9NI3F4EBJJO1FVOVGDON6N0OGNMEJ7P22NQTM7B3AFZHBEH0PGM",
                url: url,
                extract_rules:
                  '{"images":{"selector":"img","type":"list","output":{"src":"img@src","alt":"img@alt"}}}',
              },
            }
          );

          //avg 92236.5 from sample pages
          // calc the bytes

          const { images } = scrapingBeeResponse.data;
          const totalBytes = images.reduce(
            (total, image) => total + AVERAGE_IMAGE_BYTE_SIZE,
            0
          );

          const emissionsAPIResponse = await axios.get(
            `https://api.websitecarbon.com/data?bytes=${totalBytes}&green=0`
          );

          console.log(url, totalBytes);

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
