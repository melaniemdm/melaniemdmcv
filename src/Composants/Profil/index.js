import TexteCv from '../../Composants/TexteCv';
import TitleSection from "../TitleSection";
export default function Profil(){
    return(<div className="Profil">
        <TitleSection icon='Person' titleSection='Profil'/>
         <TexteCv texte='ceci est mon profil qui raconte pourquoi je fais ce metier'/>
        </div>
    )
}