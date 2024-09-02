import { useRouteError } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import '../style/pagesStyle.scss'
import Menu from "../component/menu";
import  {Footer} from "../component/footer.js";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Menu />
            <main>
                <div id="error-page" className="error-page">
                    <h1>404</h1>
                    <p>Oups ! La page que vous demandez n'existe pas.</p>
                    <Link to={`/`}>Retourner sur la page d'accueil</Link>
                </div>
            </main>
            <Footer />
            
        </>
        
    );
}