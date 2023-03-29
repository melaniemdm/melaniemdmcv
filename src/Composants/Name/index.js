

import Id from '../Id';
import './style.scss';
export default function Name({name, label}) {
    return (
       <div className='containerNameImg'>
        <div className='containerNameID'> 
        <Id/> 
           <h1>{name}</h1>
           <h3>{label}</h3>
        </div> </div> );

}