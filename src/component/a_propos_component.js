import aPropos from "../data/aPropos.json"
import "../style/a_propos.scss"
import Panel from "./panel_component";


export function APropos() {
    const list = aPropos.map(tab =>
        
        <>
        
        <Panel
            title={tab.title}
            children={tab.content}
        />
        
        </>
        
    )
    return (
        <div className="all_panel">
            {list} 
        </div>
    )
}
