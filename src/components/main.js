import React, { useState } from "react";
import "./main.css";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Resume from "./Resume";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

function Main() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const handleClickAwayEvent = () => {
    setFirst(true);
    // setSecond(true);
  };
  const handleClickAwayEvents = () => {
    // setFirst(true);
    setSecond(true);
  };
  return (
    <div className="main-container">
      {/* <Link to={"/login"}>
        <div className="createButton">
          <button className="Button">Create your portfolio</button>
        </div>
      </Link> */}

      <div className="inner-container">
        <div className="above-container">
          <div className="left-container-inner" style={{ display: "flex" }}>
            <div className="left-container-photo">
              <img
                src="https://res.cloudinary.com/dxvjkubka/image/upload/v1638978735/b4843e0e-f398-4ee2-81b2-67a616216c34_yf1azx.jpg"
                alt=""
                className="image"
              />
            </div>
            <div className="right-container-desc">
              <h1 className="title">Konthala Sumanth</h1>
              <h4 className="jobtitle">Full Stack & App developer</h4>
              <p className="description">
                Dedicated web developer with one year of experience in database
                administration and full-stack website design.
              </p>
            </div>
          </div>
          <div className="right-container-inner">
            <ul className="details">
              <li className="detail">
                {" "}
                <b className="boldtags"> Name</b>: Sumanth
              </li>
              <li className="detail">
                {" "}
                <b className="boldtags"> Date of Birth</b>: 03-12-1998
              </li>
              <li className="detail">
                {" "}
                <b className="boldtags">Email</b>: sumanthkonthala1998@gmail.com
              </li>
              <li className="detail">
                {" "}
                <b className="boldtags"> Contact No</b>: +918374070420
              </li>
              <li className="detail">
                {" "}
                <b className="boldtags"> Address</b>: Hyderabad,
                Telangana,507001
              </li>
              <li className="detail">
                {" "}
                <b className="boldtags"> Website</b>: -
              </li>
            </ul>
          </div>
        </div>
        <div className="below-container">
          <div className="ICONS">
            <ClickAwayListener onClickAway={handleClickAwayEvent}>
              <div className="clickaway">
                <PersonIcon
                  className="icons"
                  style={{ fontSize: "33px" }}
                  onClick={() => setFirst(!first)}
                />
                <span className="ICONSPAN">PROFILE</span>
              </div>
            </ClickAwayListener>
          </div>

          <div className="ICONS">
            <ClickAwayListener onClickAway={handleClickAwayEvents}>
              <div className="clickaway">
                <WorkIcon
                  className="icons"
                  style={{ fontSize: "33px" }}
                  onClick={() => setSecond(!second)}
                />
                <span className="ICONSPAN">PROJECTS</span>
              </div>
            </ClickAwayListener>
          </div>
          <div className="ICONS">
            <a
              href="https://github.com/sumanthleo"
              className="link"
              target={`_blank`}
            >
              <GitHubIcon className="icons" style={{ fontSize: "33px" }} />
            </a>
            <span className="ICONSPAN">GITHUB</span>
          </div>
          <div className="ICONS">
            <a
              href="https://www.linkedin.com/in/sumanth-konthala-37406917a/"
              target={`_blank`}
              className="link"
            >
              <LinkedInIcon className="icons" style={{ fontSize: "33px" }} />
            </a>
            <span className="ICONSPAN">LINKEDIN</span>
          </div>
        </div>
      </div>
      <div style={{ display: "block" }}>
        {first ? null : (
          <div className="resumemargin">
            <Resume />{" "}
          </div>
        )}
        {second ? null : (
          <div className="project">
            <Projects />{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
