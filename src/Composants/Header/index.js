import Image from '../Image';
import Name from '../Name';

export default function Header({basics}) {
    return (
        <div className="header">
        <Image/>
        <Name name={basics.name} label={basics.label}/>
        
        </div>  );

}