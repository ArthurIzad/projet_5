import { LogementIndivComponent } from "../component/LogementIndiv.js";
import { Footer } from "../component/Footer.js";
import { useParams } from "react-router-dom";
import logements from '../data/Logements.json'
import ErrorPage from "./ErrorPage.jsx";
import Menu from "../component/Menu.js"
import "../style/pagesStyle.scss"



export default function LogementIndiv (){
    const {id} = useParams()
    const logement = logements.find(item => item.id === id)
    if(!logement){
        return <ErrorPage />
    }
    return(
        <>
            <Menu />
            <main>
                <LogementIndivComponent 
                    logement = {logement}
                />
            </main>
            <Footer />
        </>
    )
}