import TitleSection from "../TitleSection";
import Information from "../Information";

export default function Contact(){
    return(<div className="contact">
           <TitleSection icon='info' titleSection='Contact'/>
           <Information icon ='call' information="07.84.18.85.72"/>
           <Information icon ='mail' information="melanieborja.pro@gmail.com"/>
           <Information icon ='location_on' information="13 Villa Vauthier "/>
           <Information  information=" 94100 SAINT-MAUR-DES-FOSSES"/>
        </div>
    )
}
