import React from "react";
import { useEffect, useState } from "react";

export default function EmissionsPerTab({ url }) {
  const [emissionPerTab, setEmissionPerTab] = useState(null);

  useEffect(() => {
    const reqestURL = `https://api.websitecarbon.com/site?url=
    ${encodeURIComponent(url)}`;

    const request = async () => {
      const response = await fetch(reqestURL);
      console.log(response);
      const data = await response.json();
      setEmissionPerTab(data.green);
    };
    //https://api.websitecarbon.com/site?url=

    request();
  }, []);

  return (
    <div className="EmissionsPerTab">
      <p>
        {" "}
        is website: '{url}' green?? : {emissionPerTab}{" "}
      </p>
    </div>
  );
}

//pass in the url as prop and then substitute when rendering the whole list
