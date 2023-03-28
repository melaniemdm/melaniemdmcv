import TitleSection from "../TitleSection";

export default function Interets(props){
    const interet=props.interets;
    return(<div className="interets">
        <TitleSection/>
        <div>{interet} </div>
        </div>
    )
}