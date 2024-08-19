import '../style/home_component.scss'
import logements from '../data/logements.json'
import { Link } from "react-router-dom";




export default function MyCard(){
    let mycard = []
    for(let i=0; i<logements.length; i++){
        mycard.push(
                <Link 
                    to={`/logement/`+ logements[i].id}
                    className="card" 
                    key={logements[i].id}
                > 
                    <div className="cardiv" >
                        <img
                            className="photoCard"
                            src={logements[i].cover}
                            alt={logements[i].title}                           
                        />
                        <p>{logements[i].title}</p>
                    </div>                
                </Link>            
        )
        
    }
    return(
        <div className="AllCard">
            {mycard}
        </div>
        
    );
        
}
