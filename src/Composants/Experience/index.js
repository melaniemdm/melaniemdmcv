import  Dates  from '../Dates';
import Liste from '../Liste';
import SousTitle from '../SousTitle';
import TitleSection from '../TitleSection';

export default function Experience({work}){
  const listItemsWorks = work.map((workItem, index )=>   <div key={index}> <SousTitle sousTitle={workItem.name} />
   <SousTitle sousTitle={workItem.location} />
      <Liste texteList={workItem.summary}/>
       <Dates dateStart={workItem.startDate} dateEnd={workItem.endDate}/> </div> )
    return(<div className="experience">
    <TitleSection icon="Scan" titleSection="Experience" />

    {listItemsWorks}
    


        </div>
    )
}