import "../style/logement_indiv.scss"
import Panel from "./Collapse"
import Gallery from "./Gallery"
import StarRating from "./StarRating"
import Star from "./StarRating"

export function LogementIndivComponent({logement}){
    let images = logement.pictures
    let equipements = logement.equipments.map(x => <li key={logement.equipments + logement.id}>{x}</li>)
    let tag = logement.tags.map(x => <p key={logement.tag + logement.id}>{x}</p>)

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
                                <StarRating rating={logement.rating}/>
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

