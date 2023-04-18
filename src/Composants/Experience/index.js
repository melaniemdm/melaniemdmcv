import  Dates  from '../Dates';
import Liste from '../Liste';
import SousTitle from '../SousTitle';
import TitleSection from '../TitleSection';

export default function Experience({work}){
  const listItemsWorks = work.map((workItem, index )=>   <div key={index}> 
       <Dates dateStart={workItem.startDate} dateEnd={workItem.endDate}/> 
       <SousTitle sousTitle={workItem.name}/>
       <SousTitle sousTitle={workItem.location}/>
      <Liste texteList={workItem.summary}/>
      Points forts :
      <Liste texteList={workItem.highlights}/>

   </div> )
    return(<div className="experience">
    <TitleSection icon="group_add" titleSection="Experiences" />

    {listItemsWorks}
    


        </div>
    )
}