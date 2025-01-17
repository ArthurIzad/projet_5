import { useState } from 'react'
import "../style/collapse.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"


export default function Collapse({title, children, keyCollapse}){

    const [active, setActive] = useState(false)
    const onShow = () =>{
        setActive((active) => !active)
    }
    

    return (
        <section className="panel" key={keyCollapse}>
            <div className='title_button' >
                 <h3>{title}</h3>
                 {active ? <FontAwesomeIcon icon={faAngleDown} onClick={onShow}/> 
                 : <FontAwesomeIcon icon={faAngleUp} onClick={onShow}/>} 
            </div>
            {active ? (<p className='childrenTrue'>{children}</p>) : <p className='childrenFalse'></p>}
            
        </section>
    )
}
