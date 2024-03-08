import React from "react";
import { useEffect, useState } from "react";
import { ColorSwatch, Loader } from "@mantine/core";

export default function EmissionsPerTab({ url }) {
  const [emissionPerTab, setEmissionPerTab] = useState(null);

  const isValidURL = (url) => {
    // Regular expression to match with https://
    const urlPattern = /^https:\/\//i;
    return urlPattern.test(url);
  };

  useEffect(() => {
    if (!isValidURL(url)) {
      // If the URL is not valid, set emissions to "N/A"
      setEmissionPerTab("N/A");
      return;
    }
    const encodedUrl = encodeURIComponent(url);
    // const reqestURL = `https://api.websitecarbon.com/site?url=${encodedUrl}`;
    const requestURL = `http://localhost:8080/getEmissions/?url=${encodedUrl}`;

    const request = async () => {
      try {
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
        setEmissionPerTab("N/A");
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
