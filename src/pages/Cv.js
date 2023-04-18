import React from "react";
import Experience from "../Composants/Experience";
import Interets from "../Composants/Interets";
import data from "../datas/resume.json";
import Contact from "../Composants/Contact";
import Expertise from "../Composants/Expertise";
import Education from "../Composants/Education";
import Profil from "../Composants/Profil";
import './style.scss';
import Header from "../Composants/Header";
export default function Cv() {
  return (
    <div className="containerCv">
      <Header basics={data.basics}/>
      <div className="containerBloc">
      <div className="bloc1">
      <Contact data={data.basics}/>
    
      <Experience work={data.work} />
     
      </div>
      <div className="bloc2">  
      <Profil profil={data.basics.summary} />
      <Education education={data.education} />
      <Expertise skills={data.skills} />
       <Interets interets={data.interests} />
      </div></div>
    </div>
  );
}
