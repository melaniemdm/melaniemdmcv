import Liste from "../Liste";
import Soustitle from "../SousTitle";
import TexteCv from "../TexteCv";
import TitleSection from "../TitleSection";


export default function Expertise({skills}){
 const listItemsSkills = skills.map((skill, index)=>  <div key={index}>
      <Soustitle sousTitle={skill.name} />
      <TexteCv texte={skill.level}/>
      <Liste texteList={skill.keywords} />
 </div> )
 
    return(<div className="expertise">

<TitleSection icon="Scan" titleSection="Expertise" /> 
{listItemsSkills}

        </div>
    )
}