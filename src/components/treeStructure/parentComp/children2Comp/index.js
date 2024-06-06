import React from "react";
import Grand2Child from "./grand2Child";

export default function Children2Comp({ data }) {
  console.log("child2*******", data);
  return (
    <div>
      Children 2
      <Grand2Child data={data} />
    </div>
  );
}
