import { Link, Outlet, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <Link to={"/dashboard"}> */}
      <h1 onClick={() => navigate("/dashboard")}>Home page</h1>
      {/* </Link> */}
      <Outlet />
    </div>
  );
}

export default Home;
