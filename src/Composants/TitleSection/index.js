import './style.scss';
import 'material-symbols';

export default function TitleSection(){
   const icon = "call"
   const titleSection = "ceci est un titre de section"
   
    return(<div className="titleSection">
        <span className="material-symbols-outlined">
{icon}
</span>
        
        <div>{titleSection}</div>
        </div>
    )
}