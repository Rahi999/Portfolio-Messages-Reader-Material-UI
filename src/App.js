import "./styles.css";
import React, { useState } from "react";
import AllRoutes from "./Components/Allroutes";
import { Link } from "react-router-dom";
import UserSignup from "./Components/UserSignup";

export default function App() {
  const [theme, setTheme] = useState(true);
  const name = localStorage.getItem("name");

  // https://17ff65.sse.codesandbox.io/portfolio
  return (
    <div className={theme ? "dark" : "light"}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        {" "}
        <Link title="Login Page" to="/" className="ancer">
          Login
        </Link>
        <Link
          title="All Messages"
          to={name ? "/messages" : "/"}
          className="ancer"
        >
          All Messages
        </Link>
        {name ? (
          <a className="ancer" href="#">
            {name}
          </a>
        ) : null}
        {theme ? (
          <div
            style={{
              textAlign: "right"
            }}
          >
            {" "}
            <img
              onClick={() => setTheme(false)}
              width="35%"
              style={{
                borderRadius: "80%",
                cursor: "pointer"
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQBeGwZlglpX8to_RWQSrxQvsk4MKsblJK75hXfcp&s"
              alt="Dark Theme"
            />
          </div>
        ) : (
          <div
            style={{
              textAlign: "right"
            }}
          >
            <img
              onClick={() => setTheme(true)}
              width="10%"
              style={{
                borderRadius: "40%",
                cursor: "pointer"
              }}
              src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
              alt="Light Mode Theme"
            />
          </div>
        )}
      </div>
      <div
        style={{
          marginTop: "20px"
        }}
      >
        <AllRoutes />
      </div>
    </div>
  );
}
