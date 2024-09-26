import { Footer } from "../component/Footer.js"
import "../style/pagesStyle.scss"
import Menu from "../component/Menu.js"
import AProposData from "../data/APropos.json"
import Collapse from "../component/Collapse.js"
import HeaderImg from "../component/HeaderImg.js"


export default function APropos(){
    // const list = AProposData.map(tab =>
    //     <>
    //         <Collapse
    //             title={tab.title}
    //             children={tab.content}
    //             keyCollapse={tab.id}
    //         />
    //         {/* {console.log(tab.id)} */}
    //     </>
    // )


    // const list = []
    // for(let i = 0;i < AProposData.length; i++){
    //     list.push(
    //         <Collapse
    //              title={AProposData[i].title}
    //              children={AProposData[i].content}
    //              keyCollapse={AProposData[i].id}
    //          />
    //     )
    // }
    
    
    
    return(
        <>
            <Menu />
            <main>
                <HeaderImg />
                <div className="all_panel">

                    <Collapse 
                    title={AProposData[0].title}
                    children={AProposData[0].content}
                    keyCollapse={AProposData[0].id}
                    />

                    <Collapse 
                    title={AProposData[1].title}
                    children={AProposData[1].content}
                    keyCollapse={AProposData[1].id}
                    />

                    <Collapse
                    title={AProposData[2].title}
                    children={AProposData[2].content}
                    keyCollapse={AProposData[2].id}
                    />

                    <Collapse
                    title={AProposData[3].title}
                    children={AProposData[3].content}
                    keyCollapse={AProposData[3].id}
                    />
                    {/* {list} */}
                </div>
            </main>
            <Footer />
        </>
    )
}