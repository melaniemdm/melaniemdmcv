import TitleSection from "../TitleSection";
import SousTitle from "../SousTitle";
import TexteCv from "../TexteCv";
export default function Education(){
    return(<div className="education">
           <TitleSection icon='Scan' titleSection='Education'/>
           <SousTitle SousTitle= "indique l'école de"/>
           <TexteCv texte='donne plus de precision'/>
        </div>
    )
}