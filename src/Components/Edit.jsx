import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Grid, Input, Button } from "@mui/material";

function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messages, setMessages] = useState("");

  // console.log(params);

  useEffect(() => {
    axios
      .get(`https://17ff65.sse.codesandbox.io/portfolio/${params.id}`)
      .then((res) => setData(res.data))
      .catch(() => alert("JSON-Server Closed"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Working");
    if (name && email && subject && messages) {
      const payload = {
        Name: name,
        Email: email,
        Subject: subject,
        Messages: messages
      };
      axios
        .patch(
          `https://17ff65.sse.codesandbox.io/portfolio/${params.id}`,
          payload
        )
        .then((res) => {
          alert("Details Updated");
          navigate("/messages");
        })
        .catch((err) => console.log(err))
        .finally(() => null);
    } else {
      alert("Please Enter All Details");
    }
  };

  // console.log(data);
  // console.log(name, email, subject, messages);
  return (
    <>
      <div
        style={{
          width: "450px",
          margin: "auto",
          color: "grey",
          fontStyle: "italic",
          fontWeight: "bold",
          fontSize: "14px"
        }}
      >
        Edit Details For Name {data.Name}
      </div>
      <div
        style={{
          border: "2px dotted grey",
          padding: "10px",
          borderRadius: "8px",
          width: "400px",
          height: "450px",
          margin: "auto",
          marginTop: "20px",
          color: "#c2e0ff",
          fontStyle: "italic",
          fontWeight: "bold",
          fontSize: "14px"
        }}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Previous Name - {data.Name}</label> <br />
          <Input
            onChange={(e) => setName(e.target.value)}
            style={{
              fontStyle: "italic",
              color: "grey",
              fontSize: "17px",
              backgroundColor: "#001e3c",
              borderRadius: "8px",
              padding: "8px"
            }}
            placeholder="Enter New Name"
            value={name}
            name="Names"
            type="text"
          />{" "}
          <br /> <br />
          <label>Previous Email - {data.Email}</label> <br />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            style={{
              fontStyle: "italic",
              color: "grey",
              fontSize: "17px",
              backgroundColor: "#001e3c",
              borderRadius: "8px",
              padding: "8px"
            }}
            placeholder="Enter New Email"
            value={email}
            name="Email"
          />{" "}
          <br /> <br />
          <label>Previous Subject - {data.Subject}</label> <br />
          <Input
            onChange={(e) => setSubject(e.target.value)}
            style={{
              fontStyle: "italic",
              color: "grey",
              fontSize: "17px",
              backgroundColor: "#001e3c",
              borderRadius: "8px",
              padding: "8px"
            }}
            placeholder="Enter Subject"
            name="Subject"
            value={subject}
          />{" "}
          <br /> <br />
          <label>Previous Message - {data.Messages}</label>
          <br />{" "}
          <Input
            onChange={(e) => setMessages(e.target.value)}
            style={{
              fontStyle: "italic",
              color: "grey",
              fontSize: "17px",
              backgroundColor: "#001e3c",
              borderRadius: "8px",
              padding: "8px"
            }}
            placeholder="Enter New Message"
            name="Messages"
            value={messages}
          />{" "}
          <br /> <br />
          <Button
            title="Click To Update The Details"
            style={{
              fontStyle: "italic",
              color: "grey",
              fontSize: "20px",
              backgroundColor: "#001e3c",
              borderRadius: "8px",
              padding: "8px"
            }}
            onClick={(e) => handleSubmit(e)}
          >
            UPDATE
          </Button>
        </form>
      </div>
    </>
  );
}
export default Edit;
