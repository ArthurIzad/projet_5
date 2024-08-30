import { useState } from 'react';
import gauche from '../asset/gauche.png'
import droite from '../asset/droite.png'
import "../style/gallery.scss"

export default function Gallery ({images}){
    const [index, setIndex] = useState(0)

    function prevImg(){
        if(index < 1){
            setIndex(images.length -1)
        }
        else{
            setIndex(index -1)
        }
    }

    function nextImg(){
        if(index > images.length -2){
            setIndex(0)
        }
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
                    <img 
                        src={gauche}
                        className='arrowGallery left'
                        onClick={prevImg}
                    />
                    <div className="divCarousel" style={{transform: `translateX(-${index*100}%)`}}>
                        {images.map((image, i) => 
                            <img src={image} key={i} className='activeImage' />
                        )}
                    </div>

                    <img
                        src={droite} 
                        className='arrowGallery right'
                        onClick={nextImg}
                    />
                </div>
                <div className='compteurImg'>
                    <p>{index+1}/{images.length}</p>
                </div>
                
            </>
        )
    }
}

