import './style.scss';
import 'material-symbols';

export default function TitleSection(props){
   const icon = props.icon;
   const titleSection = props.titleSection;
   
    return(<div className="titleSection">
      <div className='icon'> <span className="material-symbols-outlined">
{icon}
</span></div> 
        
        <div>{titleSection}</div>
        </div>
    )
}