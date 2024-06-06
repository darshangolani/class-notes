import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import "./card.css";
import { useSelector } from "react-redux";

export default function Card(props) {
  const { slug, color, handler, className, cllbckfn, setUpliftedData } = props;
  const key = "children data";
  const auth = useSelector((state) => state.auth);
  const params = useParams();
  const [state, setState] = useState({ key: key });
  const [temp, setTemp] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log("state********", state);

  const func = () => {
    // console.log("called******");
    setTemp(temp + 1);
    setState({ key: "test" });
  };

  useEffect(() => {
    // console.log("useEffect called******", temp);
    setState({ key: "test3" });
    cllbckfn && cllbckfn(key);
    setUpliftedData && setUpliftedData(key);
    // temp = "data2";
    // console.log("temp***", temp);
    return () => {
      // console.log("useEffect cleanup called******", temp);
    };
  }, [temp]);

  // const color = searchParams.get("color");
  const size = searchParams.get("size");
  const currentRoute = searchParams.get("currentRoute");
  const base = searchParams.get("base");
  // console.log("this is analytics card comp****", params, currentRoute, base);
  return (
    <div>
      <input type="text" onChange={func} />
      <Link to={"/dashboard"}>
        <p
          style={{ color: color ? color : "pink" }}
          className={className}
          onClick={() => {
            handler();
            func();
          }}
        >
          this is card, {auth.user.fname}
        </p>
      </Link>{" "}
      {params.slug || slug || 0}
    </div>
  );
}
