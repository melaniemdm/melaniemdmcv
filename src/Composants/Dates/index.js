import DateWork from "../DateWork";
import './style.scss';
export default function Dates({dateStart, dateEnd}){
    return (
      <div className="dates"> <DateWork date={dateStart}/>&nbsp; - &nbsp;<DateWork date={dateEnd}/></div> 

    )
}