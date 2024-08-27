import  MyCard from '../component/cards_component.js'
import {Footer} from '../component/footer.js'
import ImgHead from '../component/headerImg_component.js';
import Menu from '../component/menu.js';
import "../style/pagesStyle.scss"




export default function Home(){
    return(
        <>
        <Menu/>
        <main>
            <ImgHead />
            <MyCard />
        </main>
            <Footer />
        </>
    );
}