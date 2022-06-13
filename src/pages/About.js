import React, { Component } from 'react';
import "./About.css";
import vyang_pfp from "../assets/vyang_pfp.JPG";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={vyang_pfp}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Vicki Yang</div>
            <div className="brief description">
              Hello! I'm a rising junior at Cornell studying CS and
              Operations Research. In my free time, I enjoy playing League of Legends
              (lol). I also like organizing hackathons and generally spending time
              outdoors :)."
            </div>
          </div>
        </div>
      </div>
    )
  }
}