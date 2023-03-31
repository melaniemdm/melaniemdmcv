

import Information from "../Information";
import TitleSection from "../TitleSection";

export default function Contact({data}){
    const infoProfiles = data.profiles.map((profilesItem, index )=>   <div key={index}> 
        <Information icon="web" information={profilesItem.url} />
</div> )
console.log(infoProfiles)
    return(<div className="contact">
        
    <TitleSection icon="info" titleSection="Contact" />
    <Information icon="call" information={data.phone} />
    <Information icon="mail" information={data.email} />
    <Information icon ='location_on' information="13 Villa Vauthier "/>
    <Information  information=" 94100 SAINT-MAUR-DES-FOSSES"/>
  {infoProfiles}
  
        </div>
    )
}
