import logo from '../asset/blackLogo.png'
import '../style/home_component.scss'

export function Footer(){
    return(
        <>
        <footer>
            <img src={logo} alt="Logo Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
            
        </>
    )
}