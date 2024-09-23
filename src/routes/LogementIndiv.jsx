// import { LogementIndivComponent } from "../component/LogementIndiv.js";
import { Footer } from "../component/Footer.js";
import { useParams } from "react-router-dom";
import logements from '../data/Logements.json'
import ErrorPage from "./ErrorPage.jsx";
import Menu from "../component/Menu.js"
import "../style/pagesStyle.scss"

import "../style/logement_indiv.scss"
import Collapse from "../component/Collapse.js"
import Gallery from "../component/Gallery"
import StarRating from "../component/StarRating"


export default function LogementIndiv (){
    const {id} = useParams()
    const logement = logements.find(item => item.id === id)

    let images = logement.pictures
    let equipements = logement.equipments.map(x => <li key={logement.equipments + logement.id}>{x}</li>)
    let tag = logement.tags.map(x => <p key={logement.tag + logement.id}>{x}</p>)

    if(!logement){
        return <ErrorPage />
    }
    return(
        <>
            <Menu />
            <main>
                <div className="presentation" >
                {/* key={logement.id} */}
                    <div className="mes_images">
                        <Gallery images={images}/>

                    </div>
                    <div className="text">
                        <div className="txt_info">
                            <div className="txt_info_left">
                                <h3>{logement.title}</h3>
                                <p>{logement.location}</p>
                                <div className="tag">
                                    {tag}
                                </div>
                            </div>
                            <div className="txt_info_right">
                                <div className="info_loueur">
                                    <p className="name">{logement.host.name}</p>
                                    <img src={logement.host.picture}/>
                                </div>
                                <div className="star">
                                    <StarRating rating={logement.rating}/>
                                </div>
                            </div>
                        </div>
                        <div className="menu_deroulant">
                            <Collapse 
                                title={"Descrition"}
                                children={logement.description}
                                keyCollapse={`description`}
                            />
                            <Collapse 
                                title={"Équipements"}
                                children={equipements}
                                keyCollapse={`equipement`}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}