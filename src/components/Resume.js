import React from "react";
import "./main.css";

function Resume() {
  return (
    <div className="leo">
      <div className="timeline-section">
        <h3 className="main-heading">Employment</h3>
        <ul className="timeline">
          <li>
            <div className="timelineUnit">
              <h4>
                Full Stack Web Developer(MERN)
                <span className="timelineDate">
                  Oct 2021 - present(6 months)
                </span>
              </h4>
              <h5>EDUREKA (intern)</h5>
              <p>work as a full-stack developer</p>
            </div>
          </li>
          <li>
            <div className="timelineUnit">
              <h4>
                YouAccel(front-end)
                <span className="timelineDate">
                  May 2021 - present (10 months)
                </span>
              </h4>
              <h5>UDEMY</h5>
              <p>deployed two projects as a front-end developer</p>
            </div>
          </li>
        </ul>
        <h3 className="main-heading">Education</h3>
        <ul className="timeline">
          <li>
            <div className="timelineUnit">
              <h4>
                B.tech<span className="timelineDate">2016 - </span>
              </h4>
              <h5>TKR ENGINEERING COLLEGE, Hyderabad</h5>
              <p>Mechanical Engineering</p>
            </div>
          </li>
          <li>
            <div className="timelineUnit">
              <h4>
                Intermediate<span className="timelineDate">2013-2015</span>
              </h4>
              <h5>RESONANCE JR COLLEGE</h5>
              <p>Mpc</p>
            </div>
          </li>
          <div className="clear"></div>
        </ul>
      </div>
      <div className="skills-section">
        <h3 className="main-heading">Skills</h3>
        <ul className="skills">
          <li>
            <h4>Photoshop</h4>
          </li>
          <li>
            <h4>Web Development</h4>
          </li>
          <li>
            <h4>App Development</h4>
          </li>
        </ul>
        <h3 className="main-heading">Programming Skills</h3>
        <ul className="skills">
          <li>
            <h4>Nodejs</h4>
          </li>
          <li>
            <h4>JavaScript</h4>
          </li>
          <li>
            <h4>ReactJs</h4>
          </li>
          <li>
            <h4>Nextjs</h4>
          </li>
          <li>
            <h4>MongoDB</h4>
          </li>
          <li>
            <h4>React Native</h4>
          </li>
        </ul>
        <h3 className="main-heading">Design Skills</h3>
        <ul className="Extra skills">
          <li>
            <h4>Aws(Basics)</h4>
          </li>
          <li>
            <h4>Linux(Basics)</h4>
          </li>
          <li>
            <h4>Ui/Ux</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
