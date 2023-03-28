import React from "react";
import Experience from "../Composants/Experience";
import Interets from "../Composants/Interets";
import data from "../datas/resume.json";
import Contact from "../Composants/Contact";
import Expertise from "../Composants/Expertise";
import Education from "../Composants/Education";
import Profil from "../Composants/Profil";
import './style.scss';
export default function Cv() {
  return (
    <div className="containerCv">
      <div className="bloc1">
      <Contact data={data.basics}/>
      <Profil profil={data.basics.summary} />
      <Experience work={data.work} /></div>
      <div className="bloc2">
      <Expertise skills={data.skills} />
      <Education education={data.education} />
      <Interets interets={data.interests} /></div>
    </div>
  );
}
