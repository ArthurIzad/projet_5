import { Footer } from "../component/footer"
import { APropos } from "../component/a_propos_component"
import ImgHead from "../component/headerImg_component"
import "../style/pagesStyle.scss"


export default function Propos(){
    return(
        <>
            <main>
                <ImgHead/>
                <APropos/>
            </main>
           
            <Footer />

        </>
    )
}