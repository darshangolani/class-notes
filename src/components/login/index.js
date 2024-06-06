import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils";
import Input from "../input";

function Login() {
  const navigate = useNavigate();
  const arr = [3, 4, 5, 6545, 44, 34, 3, 34, 5645, 74, 35, 34, 5];
  const [arrayy, setArrayy] = useState(arr);

  // const data = useMemo(() => {
  //   console.log("*******");
  //   return arrayy.map((el) => el).filter((els) => els > 9);
  // }, [arrayy]);

  const functionn = () => {
    console.log("*******callback");
    return arrayy.map((el) => el).filter((els) => els > 9);
  };

  const funnn = useCallback(() => {
    console.log("*******use-callback");
    return functionn();
  }, [arrayy]);

  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({});
  const ref = useRef("str");
  const inputRef = useRef(null);
  // console.log("ref********", ref.current);

  useEffect(() => {
    const isUserLoggedIn = JSON.parse(
      localStorage.getItem("loginCreds")
    )?.email;
    // console.log("isUserLoggedIn*******", isUserLoggedIn);
    if (isUserLoggedIn) {
      navigate("/dashboard");
    }
  }, []);
  // console.log("data***", data);
  // console.log("fun***", funnn());

  const handleOnChange = (event) => {
    // console.log("event*********", event);
    const { name, value, checked } = event.target;
    setInputValues({
      ...inputValues,
      [name]: name === "rememberMe" ? checked : value,
    });
    setErrors({ ...errors, [name]: value ? "" : errors[name] });
  };

  const handleClick = () => {
    // console.log("inputValues*******", inputValues);
    let error = {};
    if (!inputValues.firstname || inputValues.firstname.trim() === "") {
      error.firstname = "* this field is mendatory";
    }
    if (!inputValues.lastname || inputValues.lastname.trim() === "") {
      error.lastname = "* this field is mendatory";
    }
    if (
      !inputValues.email ||
      inputValues.email.trim() === "" ||
      !validateEmail(inputValues.email)
    ) {
      error.email = "* this field is mendatory";
    }
    if (
      !inputValues.password ||
      inputValues.password.trim() === "" ||
      !validatePassword(inputValues.password)
    ) {
      error.password = "* this field is mendatory";
    }
    if (!inputValues.rememberMe) {
      error.rememberMe = "* this field is mendatory";
    }
    setErrors({ ...errors, ...error });
    // console.log("error********", error);
    if (Object.values(error).length <= 0) {
      localStorage.setItem("loginCreds", JSON.stringify(inputValues));
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <label for="firstname">First name: </label>
      <input
        type="text"
        ref={inputRef}
        name="firstname"
        onChange={(event) => handleOnChange(event)}
      />
      <Input ref={ref} setArrayy={setArrayy} funnn={funnn} />
      <br></br>
      {(!inputValues.firstname || inputValues.firstname.trim() === "") && (
        <span style={{ color: "red" }}>{errors.firstname}</span>
      )}
      <br></br>
      <label for="lastname">Last name: </label>
      <input
        type="text"
        name="lastname"
        autoFocus
        onChange={(event) => handleOnChange(event)}
      />
      <br></br>
      {errors.lastname && (
        <span style={{ color: "red" }}>{errors.lastname}</span>
      )}
      <br></br>
      <label for="email">email: </label>
      <input
        type="email"
        name="email"
        onChange={(event) => handleOnChange(event)}
      />
      <br></br>
      {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      <br></br>
      <label for="password">password: </label>
      <input
        type={true ? "text" : "password"}
        name="password"
        onChange={(event) => handleOnChange(event)}
      />
      <br></br>
      {errors.password && (
        <span style={{ color: "red" }}>{errors.password}</span>
      )}
      <br></br>
      <input
        type="checkbox"
        id="rememberMe"
        name="rememberMe"
        checked={inputValues.rememberMe}
        onChange={handleOnChange}
      />
      <label for="vehicle3"> Remember me</label>
      {errors.rememberMe && (
        <span style={{ color: "red" }}>{errors.rememberMe}</span>
      )}
      <br></br>
      <input type="submit" value="Login!" onClick={handleClick} />
    </div>
  );
}

export default Login;
