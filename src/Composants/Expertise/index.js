import TitleSection from "../TitleSection";
import './style.scss';
export default function Expertise(props){
    const liste=props.liste;
    return(<div className="expertise">
        <TitleSection icon='Tune' titleSection='Expertise'/>
        <ul>{liste.map((item,index)=> <li key={index}>{item}</li>)}</ul>
        </div>
    )
}