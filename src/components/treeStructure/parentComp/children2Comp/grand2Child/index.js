import React, { useContext } from "react";
import Context from "../../../../../context";

export default function Grand2Child({ data }) {
  console.log("grand 2 *******", data);
  const { projectDetails, colors } = useContext(Context);
  return (
    <div>
      <p style={{ backgroundColor: colors }}>Grand 2 child</p> {projectDetails}
    </div>
  );
}
