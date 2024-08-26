import { ComponentLogementIndiv } from "../component/logement_indiv";
import { Footer } from "../component/footer";
import { useParams } from "react-router-dom";
import logements from '../data/logements.json'
import ErrorPage from "./error-page";



export default function LogementIndiv (){
    const {id} = useParams()
    const logement = logements.find(item => item.id === id)
    if(!logement){
        return <ErrorPage />

    }
    return(
        <>
            <ComponentLogementIndiv 
                logement = {logement}
            />
            <Footer />
        </>
    )
}