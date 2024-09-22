import { Outlet, Link } from "react-router-dom";
import logo from '../asset/logoKasa.png'

export default function Root() {
    return (
        <>
            <header className="upbar">
                <img scr={logo} alt="Logo Kasa"/>
                <nav>
                    <ul className="menu">
                        <li>
                            <Link to={`accueil`} className="Link">Accueil</Link>
                        </li>
                        <li>
                            <Link to={`a_propos`} className="Link">À propos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}