import AProposData from "../data/APropos.json"
// import "../style/a_propos.scss"
import Collapse from "./Collapse";


export default function AProposComponent() {
    const list = AProposData.map(tab =>
        <>
        <Collapse
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
