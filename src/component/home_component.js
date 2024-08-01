import img1 from "../asset/image/img1.png"
import '../style/home_component.scss'
import logement from '../data/logements.json'

export function ImgHead() {
    return(
        <div className="headerMountain">
            <img src={img1} alt="Montagne"/>
            <p className="inp">Chez vous, partout et ailleurs</p>
        </div>
    );
    
}



export function MyCard(){
    let titleList = []
    let photoList =[]
    let mycard = []
    for(let i=0; i<logement.length; i++){
        photoList.push(logement[i].cover)
        titleList.push(logement[i].title)
        mycard.push(
            <div className="card">
            <img
                className="photoCard"
                src={logement[i].cover} 
                alt={logement[i].title}
            />
            <p>{logement[i].title}</p>

        </div>
        )
        
    }
    return(mycard);
        
}

export function LogementVis(){
    <MyCard />

}


{/* <>
        
        <div className="card">
            <img
                className="card"
                src={logement[0].cover} 
                alt={logement[0].title}
            />
            <p>{logement[0].title}</p>

        </div>
        </> */}