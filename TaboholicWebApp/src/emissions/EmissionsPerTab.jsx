import React from "react";
import { useEffect, useState } from "react";
import { ColorSwatch, Loader } from "@mantine/core";

export default function EmissionsPerTab() {
  return (
    <div className="EmissionsPerTab">
      <div>
        green?{" "}
        {/* {emissionPerTab ? (
          emissionPerTab.green ? (
            <ColorSwatch color="green" />
          ) : (
            <ColorSwatch color="red" />
          ) 
        ) : (
          <Loader color="rgba(168, 44, 44, 1)" size="xs" />
        )} */}
        {/* bytes {emissionPerTab && emissionPerTab.bytes} */}
      </div>
    </div>
  );
}

//pass in the url as prop and then substitute when rendering the whole list