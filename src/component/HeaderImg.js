import img1 from "../asset/image/img1.png"
import img2 from "../asset/image/img2.png"
import "../style/headerImg.scss"

export default function HeaderImg() {
    const url = window.location.pathname
    if(url === "/"){
        return(
            <div className="headerMountain" key="headerMountain1">
                <img src={img1} alt="Montagne"/>
                <p className="inp">Chez vous, partout et ailleurs</p>
            </div>
        )
    }
    if (url === "/a_propos"){
        return (
            <div className="headerMountain" key="headerMountain2">
                <img src={img2} alt="Montagne"/>
            </div>
        )
    }
}