import React, { useContext } from "react";
import Context from "../../../../../context";

export default function Grand3Child({ data }) {
  console.log("grand 3*******", data);
  const { projectDetails } = useContext(Context);
  return <div>Grand 3 child {projectDetails}</div>;
}
