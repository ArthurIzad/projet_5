import img1 from "../asset/image/img1.png"
import '../style/home_component.scss'
import logements from '../data/logements.json'
import { Link } from "react-router-dom";



export function ImgHead() {
    return(
        <div className="headerMountain">
            <img src={img1} alt="Montagne"/>
            <p className="inp">Chez vous, partout et ailleurs</p>
        </div>
    );
    
}


export function MyCard(){
    let mycard = []
    for(let i=0; i<logements.length; i++){
        mycard.push(
            <>
                <Link 
                    to={`/logement/`+ logements[i].id}
                    className="card" 
                    key={logements[i].id}
                    onClick={ClickHome}

                    
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
            </>  
        )
        
    }
    return(
        <div className="AllCard">
            {mycard}
        </div>
        
    );
        
}

export function ClickHome(id){
    console.log(id)
    // let mycard = document.querySelector(".photoCard")
    // console.log(mycard.indexOf)
    // console.log(mycard)

}


export function logementsVis(){
    return(
        <>
            <MyCard />
        </>
    )
}