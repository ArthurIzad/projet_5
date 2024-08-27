import { Footer } from "./footer"
import logements from "../data/logements.json"
import "../style/logement_indiv.scss"
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Panel from "./panel_component";
import Gallery from "./gallery_component";
import Star from "./star_component";




export function ComponentLogementIndiv({logement}){
    let images = logement.pictures
    let equipements = logement.equipments.map(x => <li key={logement.equipments + logement.id}>{x}</li>)
    console.log(equipements.key)
    let tag = logement.tags.map(x => <p key={logement.tag + logement.id}>{x}</p>)
    console.log(tag)


    return(
        <>
            <div className="presentation" key={logement.id}>
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
                                <Star rating={logement.rating}/>            
                            </div>
                        </div>
                    </div>
                    <div className="menu_deroulant">
                        <Panel 
                            title={"Descrition"}
                            children={logement.description}
                        />
                        <Panel 
                            title={"Équipements"}
                            children={equipements}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

