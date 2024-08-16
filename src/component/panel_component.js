import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";


export default function Panel({
    title,
    children,}){
    
    const [active, setActive] = useState(false)
    const onShow = () =>{
        setActive((active) => !active)
    }
    return (
        <section className="panel">
            <h3>{title}</h3>
            {active ? (<p>{children}</p>) : ""}
            <button onClick={onShow}>
                {active ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />}           
            </button>
        </section>
    )
}