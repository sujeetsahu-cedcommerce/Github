import { PeopleAlt } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PrimarySearchAppBar from "./Navbar";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import TwitterIcon from "@mui/icons-material/Twitter";
import users from "./action/Action";
import { connect } from "react-redux";
import "./GithubStyle.css";
const Github = (props) => {
  const [repoflag, setrepoflag] = useState(false);
  const [repo, setRepo] = useState([]);
  if (props.user_Data === undefined) {
    props.users(sessionStorage.getItem("name_user"));
  }
  console.log(props.user_Data);

  const fetchRepo = async () => {
    console.log("session is", sessionStorage.getItem("name_user"));
    console.log(props.user_Data);

    let response = await fetch(
      `https://api.github.com/users/${props.user_Data}/repos`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer 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`,
        },
      }
    );
    let result = await response.json();
    console.log(result);
    setRepo(result);
  };

  useEffect(() => {
    fetchRepo();
  }, [props.user_Data]);

  const Repository = () => {
    setrepoflag(true);
  };

  const OverView = () => {
    setrepoflag(false);
  };

  return (
    <div>
      <PrimarySearchAppBar />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          className="leftContainer"
          sx={{
            width: "30%",
            height: "100vh",
            position: "sticky",
            top: "100px",
          }}
        >
          <Box sx={{ display: "grid", placeItems: "center" }}>
            <Box
              sx={{
                width: "80%",
                display: "grid",
                placeItems: "center",
                marginTop: "50px",
              }}
            >
              <img
                src="https://cdn.imgbin.com/14/9/13/imgbin-blackface-graffiti-s-8BMGrZikWniRzWskK5D6kPwDG.jpg"
                alt="abc"
                style={{ width: "17vw", height: "17vw", borderRadius: "50%" }}
              />
            </Box>
            <Typography sx={{ fontSize: "2vw" }}>{props.user_Data}</Typography>
          </Box>
          <Box sx={{ display: "grid", placeItems: "center" }}>
            <Box sx={{ width: "90%" }}>
              <Typography
                variant="p"
                sx={{ fontSize: "1.3vw", fontWeight: "lighter" }}
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                teaki"de Finibus Bonorum
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  style={{ border: "none", width: "5.5vw", fontSize: "1.2vw" }}
                >
                  Follow
                </button>
                <button
                  style={{ border: "none", width: "5.5vw", fontSize: "1.2vw" }}
                >
                  Sponser
                </button>
                <button
                  style={{ border: "none", width: "5.5vw", fontSize: "1.2vw" }}
                >
                  ...
                </button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PeopleAlt></PeopleAlt>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "light", fontSize: "1.2vw" }}
                  >
                    192followers
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "light", fontSize: "1.2vw" }}
                  >
                    12following
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <StarBorderIcon />
                <Typography
                  variant="p"
                  sx={{ fontWeight: "light", fontSize: "1.2vw" }}
                >
                  212
                </Typography>
              </Box>
              <Box sx={{ marginTop: "20px", fontWeight: "light" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MailOutlineIcon />
                  <Typography variant="span" sx={{ fontSize: "1.2vw" }}>
                    github@monica.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <TwitterIcon />
                  <Typography variant="span" sx={{ fontSize: "1.2vw" }}>
                    @waterproof Hearts
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          className="RightContainer"
          sx={{ border: "1px solid lightgray", width: "70%" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "50%",
              padding: "20px",
            }}
          >
            <NavLink onClick={OverView} sx={{ fontSize: "1.5vw" }}>
              OverView
            </NavLink>
            <NavLink onClick={Repository}>Repository</NavLink>
            <NavLink>Projects</NavLink>
          </Box>
          <hr></hr>
          {repoflag ? (
            <Box sx={{ width: "100vh" }}>
              {repo.map((item) => (
                <>
                  <Box>
                    <Box sx={{ display: "flex" }}>
                      <FiberManualRecordIcon
                        sx={{ color: "yellow" }}
                      ></FiberManualRecordIcon>
                      <Typography
                        variant="span"
                        sx={{ color: "blue", fontSize: "2.0vw" }}
                      >
                        {item.name}
                      </Typography>
                    </Box>

                    <br></br>
                    <Typography sx={{ fontSize: "1.4vw", color: "red" }}>
                      {item.language}
                    </Typography>
                    <Typography sx={{ fontSize: "1.4vw" }}>
                      updated on {item.updated_at}
                    </Typography>
                  </Box>
                  <hr></hr>
                </>
              ))}
            </Box>
          ) : (
            <Box sx={{ width: "100vh" }}>
              <Box>
                <Typography sx={{ fontSize: "2.5vw", fontWeight: "bolder" }}>
                  Hi I'm {props.user_Data}
                </Typography>
              </Box>
              <Box
                sx={{
                  height: "20vh",
                  backgroundColor: "rgb(253,244,255)",
                  marginTop: "2vh",
                  marginBottom: "2vh",
                }}
              >
                <Typography sx={{ fontSize: "2vw" }}>
                  {props.user_Data} Powell
                </Typography>
                <Typography>
                  Software Engineer Content Creator & Community Organiser
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "1.4vw" }}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    users: (e) => dispatch(users(e)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(Github);
// export default Github;
