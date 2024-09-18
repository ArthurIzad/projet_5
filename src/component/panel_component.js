import { useState } from 'react';
import "../style/panel.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
// import { faAngleUp } from "@fortawesome/free-solid-svg-icons";


export default function Panel({
    title,
    children,}){
    
    const [active, setActive] = useState(false)
    const onShow = () =>{
        setActive((active) => !active)
    }
    return (
        <section className="panel">
            <div className='title_button'>
                <h3>{title}</h3>
                {/* style={{transform: `rotate(0.5turn)`}} */}
                
                {/* <FontAwesomeIcon icon={faAngleUp} onClick={onShow} className='down'/> */}
                {active ? <FontAwesomeIcon icon={faAngleDown} onClick={onShow} className='down'  /> 
                : <FontAwesomeIcon icon={faAngleUp} onClick={onShow} className='up'  />} 
                {/* style={{transform: `rotate(0.5turn)`}} */}
            </div>
            {active ? (<p>{children}</p>) : ""}
        </section>
    )
}