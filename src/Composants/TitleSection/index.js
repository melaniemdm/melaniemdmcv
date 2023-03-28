import './style.scss';
import 'material-symbols';

export default function TitleSection(props){
   const icon = props.icon;
   const titleSection = props.titleSection;
   
    return(<div className="titleSection">
        <span className="material-symbols-outlined">
{icon}
</span>
        
        <div>{titleSection}</div>
        </div>
    )
}