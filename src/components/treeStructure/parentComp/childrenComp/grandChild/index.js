import React, { useContext } from "react";
import Context from "../../../../../context";
import { Link } from "react-router-dom";

export default function GrandChild({ data }) {
  const color = "blue";
  const { projectDetails, setColors } = useContext(Context);
  return (
    <div>
      Grand Child {projectDetails}{" "}
      <Link to={"/analytics"}>
        <button onClick={() => setColors(color)}>Change the color</button>
      </Link>
    </div>
  );
}
