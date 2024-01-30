import React from "react";
import { useEffect, useState } from "react";
import { ColorSwatch, Loader } from "@mantine/core";

export default function EmissionsPerTab({ url }) {
  const [emissionPerTab, setEmissionPerTab] = useState(null);

  const encodedUrl = encodeURIComponent(url);
  const reqestURL = `https://api.websitecarbon.com/site?url=${encodedUrl}`;

  useEffect(() => {
    const request = async () => {
      const response = await fetch(reqestURL);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setEmissionPerTab(data);
      console.log(emissionPerTab.green);
    };
    //https://api.websitecarbon.com/site?url=

    request();
  }, []);

  return (
    <div className="EmissionsPerTab">
      <div>
        green?{" "}
        {emissionPerTab ? (
          emissionPerTab.green ? (
            <ColorSwatch color="green" />
          ) : (
            <ColorSwatch color="red" />
          )
        ) : (
          <Loader color="rgba(168, 44, 44, 1)" size="xs" />
        )}
        {/* bytes {emissionPerTab && emissionPerTab.bytes} */}
      </div>
    </div>
  );
}

//pass in the url as prop and then substitute when rendering the whole list
