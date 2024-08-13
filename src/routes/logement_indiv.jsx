import { ComponentLogementIndiv } from "../component/logement_indiv";
import { Footer } from "../component/footer";
import "../style/logement_indiv.scss"
import { useParams } from "react-router-dom";
import logements from '../data/logements.json'



export default function LogementIndiv (){
    // const {id} = useParams()
    // const logement = logements.find(item => item.id === id)

    return(
        <>
            <ComponentLogementIndiv 
                // logement = {logement}
                
            />
            <Footer />
        </>

    )
    
    
}