
import Dates  from "../Dates";
import SousTitle from "../SousTitle";
import TitleSection from "../TitleSection";

export default function Education({education}){
  const listItemsEducation = education.map((educationItem, index)=>  <div key={index}> 
   <Dates dateStart={educationItem.startDate} dateEnd={educationItem.endDate}/> 
   <SousTitle sousTitle={educationItem.institution} />

  </div>)
    return(<div className="education">
        
      <TitleSection icon="School" titleSection="Education" />
      {listItemsEducation}
      
     
        </div>
    )
}