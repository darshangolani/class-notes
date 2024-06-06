import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Card from "../../card";
import Context from "../../../context";

export default function Analytics() {
  const { colors } = useContext(Context);
  const data = 15;
  return (
    <div>
      This is analytics
      <Card slug={data} handler={() => {}} color={colors} />
      <Outlet />
    </div>
  );
}
