import  Dates  from '../Dates';
import Liste from '../Liste';
import SousTitle from '../SousTitle';
import TitleSection from '../TitleSection';
import './style.scss';
export default function Experience({work}){
  const listItemsWorks = work.map((workItem, index )=>   <div key={index}> 
  <div className='experienceItems'>
       <div className='experienceItemsBloc1'><Dates dateStart={workItem.startDate} dateEnd={workItem.endDate}/> 
       <SousTitle sousTitle={workItem.name}/>
       <SousTitle sousTitle={workItem.location}/></div>
       <div className='experienceItemsBloc2'>
      <Liste texteList={workItem.summary}/>
      Points forts :
      <Liste texteList={workItem.highlights}/></div>
</div>
   </div> )
    return(<div className="experience">
    <TitleSection icon="group_add" titleSection="Experiences" />

    {listItemsWorks}
    


        </div>
    )
}