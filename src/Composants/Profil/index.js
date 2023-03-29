import TexteCv from "../../Composants/TexteCv";
import TitleSection from "../TitleSection";

export default function Profil({ profil }) {
  return (
    <div className="profil">
      <TitleSection icon="Person" titleSection="Profil" />
    <div className="textProfil">  <TexteCv texte={profil} /></div>
    </div>
  );
}
