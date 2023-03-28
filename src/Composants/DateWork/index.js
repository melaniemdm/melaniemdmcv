import './style.scss';
export default function DateWork(props){
    const date=props.date;
    return(<div className="DateWork">
    
        <div id='date'  className='date'>{date}</div>
        </div>
    )
}