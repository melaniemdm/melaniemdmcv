import './style.scss';
export default function Information({information, icon}){
  
    return(<div className="information ">
               <span className="material-symbols-outlined">
{icon}
</span>
        <div>{information}</div>
        </div>
    )
}