import React from "react";
import Experience from "../Composants/Experience";
import Interets from "../Composants/Interets";
import data from "../datas/resume.json";
import Contact from "../Composants/Contact";
import Expertise from "../Composants/Expertise";
import Education from "../Composants/Education";
import Profil from "../Composants/Profil";
import "./style.scss";
import Header from "../Composants/Header";
export default function Cv() {
  return (
    <div className="containerCv">
      <Header basics={data.basics} />
      <div className="containerBloc">
        <div className="bloc1">
          <Contact className="contactItem" data={data.basics} />
          <Profil className="profilItem" profil={data.basics.summary} />
        </div>
        <div className="bloc3">
          <Experience work={data.work} />
        </div>
        <div className="bloc4">
          <div className="bloc2">
            <Education education={data.education} />
            <Interets interets={data.interests} />
          </div>
          <Expertise skills={data.skills} />
        </div>
      </div>
    </div>
  );
}
