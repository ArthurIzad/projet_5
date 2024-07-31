import img1 from "../asset/image/img1.png"
import '../style/home_component.scss'

export default function ImgHead() {
    return(
        <div className="headerMountain">
            <img src={img1} alt="Montagne"/>
            <p className="inp">Chez vous, partout et ailleurs</p>
        </div>
    );
    
}

