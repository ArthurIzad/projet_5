import '../style/cards.scss'
import logements from '../data/Logements.json'
import { Link } from "react-router-dom";


export default function Card(){
    let mycard = []
    for(let i=0; i<logements.length; i++){
        mycard.push(
            <Link 
                to={`/logement/`+ logements[i].id}
                className="card" 
                key={logements[i].id}
            >
                <img
                    className="photoCard"
                    src={logements[i].cover}
                    alt={logements[i].title}                           
                />
                <p>{logements[i].title}</p>
            </Link>
        )
        
    }
    return(
        <div className="AllCard">
            {mycard}
        </div>
    )
}
