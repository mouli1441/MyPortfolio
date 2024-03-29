import React from "react";
import { arrow } from "../assets/icons";
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Moulisree Karmakar</span>👋
      <br />I am a Frontend Web Developer from India
    </h1>
  ),
  2: (
    <InfoBox
      text="I am currently pursuing B.tech in CSE and also worked as an intern in few companies and picked up many skills along the way "
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Managed the successful delivery of multiple projects, consistently exceeding expectations"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I am just a few keystrokes away "
      link="/contacts"
      btnText="Let's Talk"
    />
  ),
};

const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;
