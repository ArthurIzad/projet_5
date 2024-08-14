import img2 from "../asset/image/img2.png"
import aPropos from "../data/aPropos.json"
import "../style/a_propos.scss"
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";


export function ImgHead2() {
    return(
        <div className="headerMountain">
            <img src={img2} alt="Montagne"/>
        </div>
    ); 
}


// export function About(){
//     let mes_list = []
//     for(let i = 0; i<aPropos.length;i++){
//         mes_list.push(
//             <>
//                 <div className="tab">
//                     <div className="uppertab">
//                         <h3>{aPropos[i].title}</h3>
//                         <Button onClick={Roll} id={aPropos[i].id}>
                            
//                         </Button>
//                         <Roll id={aPropos[i].id}/>

//                     </div>
//                     <div className="bottomtab" style={{display : "none"}}>
//                         <p>{aPropos[i].content}</p>
//                     </div>
                    
//                 </div>        
//             </>
//         )
//     }
//     return mes_list
// }

export function About(){
    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    const list = aPropos.map(tab =>
                <div className="tab" key={tab.id} >
                    <div className="uppertab" >
                        <h3>{tab.title}</h3>
                        <button onClick={handleMoreClick} id={tab.id}>
                            {showMore ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />}
                            
                            
                        </button>

                    </div>
                    <div className="bottomtab" id={tab.title} >
                        {showMore && <p>{tab.content}</p>}
                    </div>
                    
                </div>        
        )
    return (list )
    
}


function Roll({id}){
    let menu = document.querySelectorAll(".bottomtab")
    console.log(menu)
    


    for(let i=0; i<menu.length;i++){
        if (menu[i].style.display === ""){
            menu[i].style.display = "none"
            console.log(menu[i].id)
        }else{
            menu[i].style.display = null
        }
        
    }
}
// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export function Gallery() {
//     // const [index, setIndex] = useState(0);
//     const [showMore, setShowMore] = useState(false);
  
//     // function handleNextClick() {
//     //   setIndex(index + 1);
//     // }
  
//     function handleMoreClick() {
//       setShowMore(!showMore);
//     }
  
//     let sculpture = sculptureList[index];
//     return (
//       <>
//         {/* <button onClick={handleNextClick}>
//           Next
//         </button> */}
//         <h2>
//           <i>{sculpture.name} </i> 
//           by {sculpture.artist}
//         </h2>
//         {/* <h3>  
//           ({index + 1} of {sculptureList.length})
//         </h3> */}
//         <button onClick={handleMoreClick}>
//           {showMore ? 'Hide' : 'Show'} details
//         </button>
//         {showMore && <p>{sculpture.description}</p>}
//         <img 
//           src={sculpture.url} 
//           alt={sculpture.alt}
//         />
//       </>
//     );
//   }



// function Button({ onClick , id}) {
    
//     return (
//         <button onClick={onClick}>
//             <FontAwesomeIcon icon={faAngleDown} />
//         </button>
//     );
// }
  


  
