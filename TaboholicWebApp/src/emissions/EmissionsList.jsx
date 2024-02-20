import { useEffect, useState } from "react";

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
      document.removeEventListener(
        "EmissionsEvent",
        handleEmissionDataFromContentScript
      );
    };
  }, []);

  for (const emissionArray of emissions) {
    console.log(emissionArray);
  }
}
