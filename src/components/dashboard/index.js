import React, { useEffect, useState } from "react";
import Card from "../card";
import { Link, useNavigate } from "react-router-dom";
import Accordion from "../accordion";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../redux/authSlice";

const changeProps = (index) => {
  switch (index) {
    case 54:
      return 5;
    case 45:
      return 8;
    case 66:
      return 9;
    default:
      return index;
  }
};

const handler = () => {
  // console.log("this function has been called**********");
};

export default function Dashboard() {
  // useState
  // useEffect
  const dispatch = useDispatch();
  const AuthData = useSelector((state) => state.auth);
  console.log("store*******", AuthData);
  const [inputValue, setInputValue] = useState(
    AuthData.user ||
      JSON.parse(localStorage.getItem("data")) || { fname: "", lname: "" }
  );

  const [upliftedData, setUpliftedData] = useState("");
  const navigate = useNavigate();
  // console.log("upliftedData***", upliftedData);

  useEffect(() => {
    const isUserLoggedIn = JSON.parse(
      localStorage.getItem("loginCreds")
    )?.email;
    // console.log("isUserLoggedIn*******", isUserLoggedIn);
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, []);

  // console.log("inputValue****", inputValue);
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setInputValue({ ...inputValue, [name]: value });
    localStorage.setItem(
      "data",
      JSON.stringify({ ...inputValue, [name]: value })
    );
    dispatch(setAuth({ ...inputValue, [name]: value }));
  };

  const cllbckfn = (data) => {
    // console.log("key******", data);
  };

  return (
    <div>
      This is dashboard
      <input
        type="text"
        name="fname"
        value={inputValue.fname}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="lname"
        value={inputValue.lname}
        onChange={(e) => handleChange(e)}
      />
      {[...Array(3)].map((item, index) => {
        // passing props to card component
        return (
          <Link to={"/analytics/analytics-card"}>
            <Card
              slug={changeProps(index)}
              color={"red"}
              handler={handler}
              cllbckfn={cllbckfn}
              setUpliftedData={setUpliftedData}
            />
          </Link>
        );
      })}
      <Accordion inputValue={inputValue} />
    </div>
  );
}
