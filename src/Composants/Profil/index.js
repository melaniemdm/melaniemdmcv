import TexteCv from "../../Composants/TexteCv";
import TitleSection from "../TitleSection";

export default function Profil({ profil }) {
  return (
    <div className="Profil">
      <TitleSection icon="Person" titleSection="Profil" />
      <TexteCv texte={profil} />
    </div>
  );
}
