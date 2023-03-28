import './style.scss';
export default function Info(props){
    const information=props.information;
    const icon = props.icon;
    return(<div className="information ">
               <span className="material-symbols-outlined">
{icon}
</span>
        <div>{information}</div>
        </div>
    )
}