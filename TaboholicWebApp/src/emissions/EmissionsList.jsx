import { useEffect, useState } from "react";
import EmissionsPerTab from "./EmissionsPerTab";
import { List } from "@mantine/core";

export default function EmissionsList() {
  const [emissions, setEmissions] = useState([]);

  useEffect(() => {
    const handleEmissionDataFromContentScript = (event) => {
      if (event.detail) {
        setEmissions(event.detail);
      }
    };

    document.addEventListener(
      "EmissionsEvent",
      handleEmissionDataFromContentScript
    );

    return () => {
      // document.removeEventListener(
      //   "EmissionsEvent",
      //   handleEmissionDataFromContentScript
      // );
      console.log(emissions);
    };
  }, []);

  return (
    <List className="emissionsList">
      {emissions.map((emission, index) => (
        <EmissionsPerTab {...emission} key={index} />
      ))}
    </List>
  );
}
