import React, { useContext, useEffect, useState } from "react";
import ChildrenComp from "./childrenComp";
import Children2Comp from "./children2Comp";
import Context from "../../../context";
import axios from "axios";
import { APIGET } from "../../../utils/api";
import { getQuotes } from "../../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ParentComp() {
  const data = "chocolate";
  const dispatch = useDispatch();
  const { setProjectDetails } = useContext(Context);
  const { quotes, loading } = useSelector((state) => state.auth);

  console.log("********", quotes);

  useEffect(() => {
    dispatch(getQuotes());
  }, []);

  return (
    <div>
      parent
      {loading ? (
        <div class="loader"></div>
      ) : (
        quotes?.quotes?.map((item) => {
          return (
            <>
              <h4>{item.author}</h4>
              <p>{item.quote}</p>
            </>
          );
        })
      )}
      <button onClick={() => setProjectDetails(data)}>Click me</button>
      {/* <ChildrenComp data={data} /> */}
      {/* <Children2Comp data={data} /> */}
    </div>
  );
}
