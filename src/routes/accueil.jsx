import  MyCard from '../component/Cards.js'
import {Footer} from '../component/Footer.js'
import HeaderImg from '../component/HeaderImg.js'
import Menu from '../component/Menu.js'
import "../style/pagesStyle.scss"


export default function Accueil(){
    return(
        <>
        <Menu/>
        <main>
            <HeaderImg />
            <MyCard />
        </main>
            <Footer />
        </>
    );
}