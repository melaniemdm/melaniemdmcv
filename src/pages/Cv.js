import React from "react";
import DateWork from "../Composants/DateWork";
import Expertise from "../Composants/Expertise";
import Interets from "../Composants/Interets";
import TitleSection from "../Composants/TitleSection";
import Information from "../Composants/Information";
import "./style.scss";
import TexteCv from "../Composants/TexteCv";
import SousTitle from "../Composants/SousTitle";

export default function Cv() {
  return (
    <div>
      <TitleSection icon="info" titleSection="Contact" />
      <Information icon="call" information="07.84.18.85.72" />
      <Information icon="mail" information="melanieborja.pro@gmail.com" />
      <Information icon="location_on" information="13 Villa Vauthier " />
      <Information information=" 94100 SAINT-MAUR-DES-FOSSES" />

      <TitleSection icon="Person" titleSection="Profil" />
      <TexteCv texte="ceci est mon profil qui raconte pourquoi je fais ce metier" />

      <TitleSection icon="Scan" titleSection="Education" />
      <SousTitle SousTitle="indique l'école de" />
      <TexteCv texte="donne plus de precision" />

      <DateWork date="1985" />
      <Expertise liste={["HTML5", "CSS", "JavaScript"]} />
      <Interets interets={"equitation, shooping, lecture"} />
    </div>
  );
}
