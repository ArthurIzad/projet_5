import { Outlet, Link } from "react-router-dom";
import "../style/root.scss"
import logo from '../asset/logoKasa.png'

export default function Root() {
    return (
    <>
        <header id="upbar">
            <img scr={logo} alt="Logo Kasa"/>
            <nav>
                <ul className="menu">
                    <li>
                        <Link to={`accueil`}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={`a_propos`}>À propos</Link>
                    </li>
                    {/* <li>
                        <Link to={`logementindiv`}>Le logement</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
        <main id="detail">
            <Outlet />
        </main>
    </>
    );
  }