import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Messages from "./Messages";
import UserSignup from "./Login";
import Edit from "./Edit";
function AllRoutes() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<UserSignup />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:id" element={<Edit />} />{" "}
        </Routes>
      </div>
    </>
  );
}
export default AllRoutes;
