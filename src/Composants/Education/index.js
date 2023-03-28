
import Dates  from "../Dates";
import SousTitle from "../SousTitle";
import TitleSection from "../TitleSection";

export default function Education({education}){
  const listItemsEducation = education.map((educationItem, index)=>  <div key={index}> 
   <SousTitle sousTitle={educationItem.institution} />
     
      
     <Dates dateStart={educationItem.startDate} dateEnd={educationItem.endDate}/> 
  
  </div>)
    return(<div className="education">
        
      <TitleSection icon="Scan" titleSection="Education" />
      {listItemsEducation}
      
     
        </div>
    )
}