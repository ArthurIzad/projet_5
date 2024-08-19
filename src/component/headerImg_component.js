import img1 from "../asset/image/img1.png"
import img2 from "../asset/image/img2.png"
import { useParams } from "react-router-dom";


export default function ImgHead() {
    const url = window.location.pathname
    console.log(url)
    if(url === "/accueil"){
        return(
            <div className="headerMountain">
                <img src={img1} alt="Montagne"/>
                <p className="inp">Chez vous, partout et ailleurs</p>
            </div>
        )

    }
    if (url === "/a_propos"){
        return <img src={img2} alt="Montagne"/>
    }
    return(
        <div className="headerMountain">
            <img src={img1} alt="Montagne"/>
            <p className="inp">Chez vous, partout et ailleurs</p>
        </div>
    );
    
}