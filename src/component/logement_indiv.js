import { Footer } from "./footer"
import logements from "../data/logements.json"
import "../style/logement_indiv.scss"
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';




export function ComponentLogementIndiv(){
    const {id} = useParams()
    const logement = logements.find(item => item.id === id)
    // console.log(logement.pictures)
    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex(index + 1);
    }
    let image = logement.pictures[index]
    console.log(image)
    return(
            <>
                <div className="presentation" key={logement.id}>
                    <div className="mes_images">
                        <button>Prev</button>
                        <img src={logement.pictures}/>
                        <button onClick={handleClick}>Next</button>

                    </div>
                    <div className="text">
                        <div className="txt_info">
                            <div className="txt_info_left">
                                <h3>{logement.title}</h3>
                                <p>{logement.location}</p>
                                <div className="tag">
                                    <p>{logement.tags}</p>
                                </div>
                            </div>
                            <div className="txt_info_right">
                                <div className="info_loueur">
                                    <p>{logement.name}</p>
                                    <img src={logement.host.picture}/>
                                </div>
                                <div className="star">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />                        
                                </div>
                            </div>
                        </div>
                        <div className="menu_deroulant">
                            <div className="deroulant">
                                <h4 onClick={Roll}>Description</h4>
                                <p style={{display : "none"}} className="deroulant_txt">{logement.description}</p>
                            </div>
                            <div className="deroulant" >
                                <h4 onClick={Roll}>Équipements</h4>
                                <p style={{display : "none"}} className="deroulant_txt">{logement.equipments}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}



function Roll(){
    let menu = document.querySelectorAll(".deroulant_txt")
    for(let i=0; i<menu.length;i++){
        if (menu[i].style.display === ""){
            menu[i].style.display = "none"
        }else{
            menu[i].style.display = null
        }
        
    }
}

function Star(){
    const {id} = useParams()
    const logement = logements.find(item => item.id === id)
    console.log()

}