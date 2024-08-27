import { Footer } from "../component/footer"
import { APropos } from "../component/a_propos_component"
import ImgHead from "../component/headerImg_component"
import "../style/pagesStyle.scss"
import Menu from "../component/menu.js"


export default function Propos(){
    return(
        <>
            <Menu />
            <main>
                <ImgHead/>
                <APropos/>
            </main>
           
            <Footer />

        </>
    )
}