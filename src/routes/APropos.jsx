import { Footer } from "../component/Footer.js"
import "../style/pagesStyle.scss"
import Menu from "../component/Menu.js"
import AProposData from "../data/APropos.json"
import Collapse from "../component/Collapse.js"
import HeaderImg from "../component/HeaderImg.js"

export default function APropos(){
    const list = AProposData.map(tab =>
        <>
            <Collapse
                title={tab.title}
                children={tab.content}
                keyCollapse={tab.id}
            />
        </>
    )
    return(
        <>
            <Menu />
            <main>
                <HeaderImg />
                <div className="all_panel">
                    {list}
                </div>
            </main>
            <Footer />
        </>
    )
}