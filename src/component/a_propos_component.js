import img2 from "../asset/image/img2.png"
import aPropos from "../data/aPropos.json"
import "../style/a_propos.scss"
import Panel from "./panel_component";


export function ImgHead2() {
    return(
        <div className="headerMountain">
            <img src={img2} alt="Montagne"/>
        </div>
    ); 
}

export function About() {
    const list = aPropos.map(tab =>
        <>
            <Panel
                title={tab.title}
                children={tab.content}
            />
        </>
        
    )
    return (list )

    
}
