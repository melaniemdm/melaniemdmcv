import './style.scss';
export default function Information({information, icon}){
  
    return(<div className="information ">
          <div className='icon'>    <span className="material-symbols-outlined">
{icon}
</span></div> 
        <div>{information}</div>
        </div>
    )
}