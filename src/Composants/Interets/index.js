import TexteCv from "../TexteCv";
import TitleSection from "../TitleSection";

export default function Interets({ interets }) {
  console.log(interets);
const listItemsInterets = interets.map((interet, index) => <div key={index}> 
<TexteCv texte={interet.name} />
</div>)
  return (
    <div className="interets">
      <TitleSection icon="Scan" titleSection="Interets" />
      {listItemsInterets}
    </div>
  );
}
