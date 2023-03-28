import Liste from "../Liste";
import Soustitle from "../SousTitle";
import NiveauMe from "../Niveau";
import TitleSection from "../TitleSection";


export default function Expertise({skills}){
 const listItemsSkills = skills.map((skill, index)=>  <div key={index}>
      <Soustitle sousTitle={skill.name} />
      <NiveauMe niveauMe={skill.level}/>
      <Liste texteList={skill.keywords} />
 </div> )
 
    return(<div className="expertise">

<TitleSection icon="Hub" titleSection="Expertise" /> 
{listItemsSkills}

        </div>
    )
}