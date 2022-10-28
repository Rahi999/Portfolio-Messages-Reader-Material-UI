import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Input, Button } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

function Messages() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(false);

  const getData = () => {
    setIsLoading(true);
    axios
      .get("https://17ff65.sse.codesandbox.io/portfolio")
      .then((res) => setData(res.data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://17ff65.sse.codesandbox.io/portfolio?q=${text}`)
      .then((res) => {
        setData(res.data);
        setToggle(true);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://17ff65.sse.codesandbox.io/portfolio/${id}`)
      .then(() => getData())
      .catch(() => alert("DELETING FAILED"));
  };

  return isLoading ? (
    <img
      style={{
        borderRadius: "8px"
      }}
      width="50%"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif"
      alt="Loading Icon"
    />
  ) : isError ? (
    <img
      width="50%"
      src="https://media2.giphy.com/media/RgnTr6sxtYsWQiSzhx/200w.gif?cid=82a1493bwpeapw0x4c5g930t7ztd3ts5y7gwws017msl82ly&rid=200w.gif&ct=g"
      alt="Error Icon"
    />
  ) : (
    <>
      <div className={theme ? "dark" : "light"}>
        {data && (
          <h3
            style={{
              fontStyle: "italic"
            }}
          >
            You Have {data.length} Messages
          </h3>
        )}
        <Box
          style={{
            display: "flex",
            width: "50%",
            margin: "auto",
            marginBottom: "20px",
            marginTop: "20px"
          }}
        >
          <form onSubmit={(e) => handleSearch(e)}>
            <Input
              onChange={(e) => setText(e.target.value)}
              style={{
                fontStyle: "italic",
                color: "grey",
                fontSize: "20px",
                backgroundColor: "#001e3c",
                borderRadius: "8px",
                padding: "8px"
              }}
              placeholder="Search By Name..."
              color="grey"
            />
          </form>
          {toggle ? (
            <Button
              onClick={() => {
                getData();
                setToggle(false);
              }}
              style={{
                color: "white",
                padding: "8px",
                backgroundColor: "#001e3c",
                height: "50px",
                marginLeft: "10px",
                borderRadius: "8px"
              }}
            >
              {" "}
              Reset
            </Button>
          ) : null}
        </Box>

        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "2%"
          }}
        >
          {data.length === 0 ? (
            <a
              target="blank"
              href="https://rahim-ansari-masai.netlify.app/#contact"
            >
              <img
                title="New Message From Portfolio"
                width="200%"
                style={{
                  borderRadius: "8px",
                  marginLeft: "30%"
                }}
                src="https://i.pinimg.com/originals/4e/20/98/4e2098a3c9d883c2bc6ea212bd024f81.png"
                alt="No Messages"
              />
            </a>
          ) : (
            data &&
            data.map((d) => (
              <Box
                className="box"
                style={{
                  padding: "5%"
                }}
                key={d.id}
              >
                <Box style={{ display: "flex" }}>
                  <label htmlFor="">Name --- </label> {"   "}{" "}
                  <Typography
                    style={{
                      color: "#c2e0ff",
                      fontSize: "17px",
                      fontStyle: "italic",
                      marginLeft: "10px"
                    }}
                  >
                    {" "}
                    {d.Name}
                  </Typography>
                </Box>
                <Box style={{ display: "flex", marginTop: "10px" }}>
                  <label htmlFor="">Email --- </label>{" "}
                  <Typography
                    style={{
                      color: "#c2e0ff",
                      fontSize: "17px",
                      fontStyle: "italic",
                      marginLeft: "10px"
                    }}
                  >
                    {" "}
                    {d.Email}
                  </Typography>
                </Box>
                <Box style={{ display: "flex", marginTop: "10px" }}>
                  <label htmlFor="">Subject --- </label>{" "}
                  <Typography
                    style={{
                      color: "#c2e0ff",
                      fontSize: "17px",
                      fontStyle: "italic",
                      marginLeft: "10px"
                    }}
                  >
                    {" "}
                    {d.Subject}
                  </Typography>
                </Box>
                <Box style={{ display: "flex", marginTop: "10px" }}>
                  <label htmlFor="">Message --- </label>{" "}
                  <Typography
                    style={{
                      color: "#c2e0ff",
                      fontSize: "17px",
                      fontStyle: "italic",
                      marginLeft: "10px"
                    }}
                  >
                    {" "}
                    {d.Messages}
                  </Typography>
                </Box>
                <Box
                  style={{
                    marginTop: "20px"
                  }}
                >
                  <img
                    onClick={() => handleDelete(d.id)}
                    title="Delete This Message"
                    style={{
                      width: "12%",
                      cursor: "pointer",
                      borderRadius: "60%",
                      marginRight: "10px"
                    }}
                    src="https://png.pngtree.com/png-clipart/20190517/original/pngtree-delete-vector-icon-png-image_4236544.jpg"
                    alt="Delete Icon"
                  />
                  <Link to={`/messages/${d.id}`}>
                    <img
                      title="Edit This Message"
                      style={{
                        width: "12%",
                        cursor: "pointer",
                        borderRadius: "60%",
                        marginRight: "10px"
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ehfuvr7Ir5Ln9qyu_W29OID5PohuUJVepA&usqp=CAU"
                      alt="Edit Icon"
                    />
                  </Link>
                  <a
                    target="blank"
                    href="https://mail.google.com/mail/u/0/#sent?compose=new"
                  >
                    {" "}
                    <img
                      title="Reply To Email"
                      style={{
                        width: "12%",
                        cursor: "pointer",
                        borderRadius: "60%"
                      }}
                      src="https://png.pngtree.com/png-vector/20190505/ourmid/pngtree-vector-left-arrow-icon-png-image_1023283.jpg"
                      alt="Edit Icon"
                    />
                  </a>
                  <a
                    target="blank"
                    href="https://rahim-ansari-masai.netlify.app/#contact"
                  >
                    {" "}
                    <img
                      title="Create New Message"
                      style={{
                        width: "12%",
                        cursor: "pointer"
                      }}
                      src="https://findicons.com/files/icons/1014/ivista/256/plus.png"
                      alt="Edit Icon"
                    />
                  </a>
                </Box>
              </Box>
            ))
          )}
        </Box>
      </div>
    </>
  );
}

export default Messages;
