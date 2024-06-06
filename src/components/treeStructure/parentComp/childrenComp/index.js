import React from "react";
import GrandChild from "./grandChild";
import Grand3Child from "./grand3Child";

export default function ChildrenComp({ data }) {
  console.log("child*******", data);
  return (
    <div>
      Children
      <GrandChild data={data} />
      <Grand3Child data={data} />
    </div>
  );
}
