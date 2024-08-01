import { Outlet, Link } from "react-router-dom";
import "../style/root.scss"
import logo from '../asset/logoKasa.png'

export default function Root() {
    return (
    <>
        <div id="upbar">
            <img img scr={logo} alt="Logo Kasa"/>
            <nav>
                <ul className="menu">
                    <li>
                        <Link to={`accueil`}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={`a_propos`}>À propos</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
    </>
    );
  }