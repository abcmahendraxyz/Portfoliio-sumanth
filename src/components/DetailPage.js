import React from "react";
import "./main.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function DetailPage() {
  return (
    <div className="formContainer">
      <div className="backicons">
        <Link to={"/"}>
          <ArrowBackIcon className="backIconResume" />
        </Link>
        <h1 className="detailsHeading">Resume Details</h1>
      </div>
      <label htmlFor="">Fullname:</label>
      <input type="text" placeholder="Fullname" autoFocus />
      <br />
      <label htmlFor="">Email:</label>
      <input type="text" placeholder="Email" />
      <br />
      <label htmlFor="">Date of Birth:</label>
      <input type="date" placeholder="Email" />
      <br />

      <label htmlFor="">Phone No:</label>
      <input type="phone" placeholder="Phone No" />
      <br />

      <label htmlFor="">Address:</label>
      <input type="text" placeholder="Address" />
      <br />
      <label htmlFor="">Job Title:</label>
      <input type="text" placeholder="Job Title" />
      <br />
      <label htmlFor="">Job description:</label>
      <input type="text" placeholder="Job description" />
      <br />
      <label htmlFor="">Employment:</label>
      <br />
      <div className="employmentdetails">
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="job role" />
        <input type="text" placeholder="description" />
        <input type="text" placeholder="year (ex: 2020 - 2021)" />
        <br />
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="job role" />
        <input type="text" placeholder="description" />
        <input type="text" placeholder="year (ex: 2020 - 2021)" />
      </div>
      <label htmlFor="">Education:</label>

      <br />
      <div className="collegedetails">
        <input type="text" placeholder="college name" />
        <input type="text" placeholder="degree" />
        <input type="text" placeholder="description" />
        <input type="text" placeholder="passed out year (ex: 2020 - 2021)" />
        <br />
        <input type="text" placeholder="college name" />
        <input type="text" placeholder="degree" />
        <input type="text" placeholder="description" />
        <input type="text" placeholder="passed out year (ex: 2020 - 2021)" />
      </div>

      <label htmlFor="">Skills:</label>
      <br />
      <div className="skilldetails">
        <input type="text" placeholder="ex: photoshop" />
        <input type="text" placeholder="web developer" />
        <input type="text" placeholder="app developer" />
        <input type="text" placeholder="design" />
      </div>

      <label htmlFor="">programming Skills:</label>
      <br />
      <div className="skilldetails">
        <input type="text" placeholder="ex: java" />
        <input type="text" placeholder="python" />
        <input type="text" placeholder="react" />
        <input type="text" placeholder="css" />
      </div>
      <label htmlFor="">Extra Skills:</label>
      <br />
      <div className="skilldetails">
        <input type="text" placeholder="ex: content writing" />
        <input type="text" placeholder="design" />
        <input type="text" placeholder="digital marketing" />
        <input type="text" placeholder="logical thinking" />
      </div>

      <label htmlFor="">projects: </label>
      <br />
      <div className="projectdetails">
        <input type="text" placeholder="project title" />
        <input type="text" placeholder="project Imageurl" />
        <input type="text" placeholder="project link" />
        <br />
        <input type="text" placeholder="project title" />
        <input type="text" placeholder="project Imageurl" />
        <input type="text" placeholder="project link" />
      </div>
      <label htmlFor="">Links: </label>
      <br />
      <div className="projectdetails">
        <input type="text" placeholder="github link" />
        <input type="text" placeholder="linkedin link" />
        <input type="text" placeholder="twitter link" />
        <br />
      </div>
      <button type="submit" className="buttonss">
        submit
      </button>
    </div>
  );
}

export default DetailPage;
