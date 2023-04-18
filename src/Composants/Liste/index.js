
import './style.scss'
export default function Liste({texteList}){
    const listItems = texteList.map((texte, index)=>
        <li key={index} className='liste'>{texte}</li>
    )
    return(
        <ul>{listItems}</ul>
    )
}