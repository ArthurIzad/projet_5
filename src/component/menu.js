import logo from '../asset/logoKasa.png'
import { Link } from "react-router-dom"
import '../style/menu.scss'



export default function Menu(){
    return (
        <>
            <header className="upbar">
                <img scr={logo} alt="Logo Kasa"/>
                <nav>
                    <ul className="menu">
                        <li>
                            <Link to={`/`} className="Link">Accueil</Link>
                        </li>
                        <li>
                            <Link to={`/a_propos`} className="Link">À propos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}