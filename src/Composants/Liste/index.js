
export default function Liste({texteList}){
    const listItems = texteList.map((texte, index)=>
        <li key={index}>{texte}</li>
    )
    return(
        <ul>{listItems}</ul>
    )
}