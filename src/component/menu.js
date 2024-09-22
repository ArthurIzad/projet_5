import { Link } from "react-router-dom"
import '../style/menu.scss'
import Logo from "./Logo"
import img from "../asset/blackLogo.png"

export default function Menu(){
    return (
        <>
            <header className="upbar">
                {/* <img src="img"/> */}
                <Logo />
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