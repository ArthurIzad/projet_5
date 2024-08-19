import  MyCard from '../component/accueil_component.js'
import {Footer} from '../component/footer.js'
import ImgHead from '../component/headerImg_component.js';




export default function Home(){
    return(
        <>
        <main>
            <ImgHead />
            <MyCard />
        </main>
            <Footer />
        </>
    );
}