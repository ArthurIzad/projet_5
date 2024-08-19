import { Footer } from "../component/footer"
import { About } from "../component/a_propos_component"
import ImgHead from "../component/headerImg_component"

export default function Propos(){
    return(
        <>
            <main>
                <ImgHead/>
                <About/>
            </main>
           
            <Footer />

        </>
    )
}