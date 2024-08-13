import img2 from "../asset/image/img2.png"
import aPropos from "../data/aPropos.json"
import { useState } from 'react';


export function ImgHead2() {
    return(
        <div className="headerMountain">
            <img src={img2} alt="Montagne"/>
        </div>
    ); 
}




export function About(){
    let mes_list = []
    for(let i = 0; i<aPropos.length;i++){
        mes_list.push(
            <>
                <div className="tab">
                    <div className="uppertab">
                        <h3 onClick={Roll}>{aPropos[i].title}</h3>

                    </div>
                    <div className="bottomtab" style={{display : "none"}}>
                        <p>{aPropos[i].content}</p>
                    </div>
                    
                </div>        
            </>
        )
    }
    return mes_list
}

// function Gallery(){
//     const [index, setIndex] = useState(0);


// }

function Roll(){
    // setIndex(index + 1);

    let menu = document.querySelectorAll(".bottomtab")
    for(let i=0; i<menu.length;i++){
        if (menu[i].style.display === ""){
            menu[i].style.display = "none"
            console.log(menu[i])
        }else{
            menu[i].style.display = null
        }
        
    }
}