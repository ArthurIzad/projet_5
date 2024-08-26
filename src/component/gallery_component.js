import { iconName } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { useState } from 'react';
import gauche from '../asset/gauche.png'
import doite from '../asset/droite.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/gallery.scss"

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { library } from '@fortawesome/fontawesome-svg-core'
// import { all } from '@awesome.me/kit-KIT_CODE/icons'





export default function Gallery ({images}){
    const [index, setIndex] = useState(0)

    function prevImg(){
        if(index < 1)
            setIndex(images.length -1)
        else{
            setIndex(index -1)
        }
    }

    function nextImg(){
        if(index > images.length -2)
            setIndex(0)
        else{
            setIndex(index +1)
        }
    }

    if(images.length<2){
        return(
            <div className='carrousel'>                   
                <img src={images[index]} className='activeImage'/>
            </div>               
        )
    }
    else{
        return(
            <>
                <div className='carrousel'>

                    {/* <button onClick={prevImg}>prev</button> */}
                    {/* <FontAwesomeIcon icon="fa-sharp fa-angleLeft" onClick={prevImg} /> */}
                    {/* <FontAwesomeIcon icon={faAngleLeft} onClick={prevImg} /> */}


                    <img src={gauche} onClick={prevImg} className='arrowGallery left'/>
                    <img src={images[index]} className='activeImage'/>
                    <img src={doite} onClick={nextImg} className='arrowGallery right'/>

                    {/* <FontAwesomeIcon icon={faAngleRight} onClick={nextImg} /> */}

                    {/* <button onClick={nextImg}>next</button> */}
                </div>
                <div className='compteurImg'>
                    <p>{index+1}/{images.length}</p>
                </div>               
            </>
        )  
    }
}