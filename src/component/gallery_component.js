import { iconName } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { useState } from 'react';



export default function Gallery ({images}){

    // console.log(images[3])

    const [index, setIndex] = useState(0)


    function prevImg(){
        if(index < 1)
            setIndex(images.length -1)
        else{
            setIndex(index -1)
        }
        console.log(index)

        

    }

    function nextImg(){
        if(index > images.length -1)
            setIndex(0)
        else{
            setIndex(index +1)
        }
        console.log(index)

        
    }
    console.log(images.length)




    return(
        <>
            <button onClick={prevImg}>left</button>
            <img src={images[index]} className='activeImage'/>
            <button onClick={nextImg}>right</button>

        </>
    )
}