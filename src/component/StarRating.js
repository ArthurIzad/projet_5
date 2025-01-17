import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import '../style/star.scss'


export default function StarRating({rating}){
    let stars = []
    let n = 0
    while(n < rating){
        stars.push(<FontAwesomeIcon icon={faStar} className="full_star" key={n}/>)
        n++
    }
    while(stars.length< 5){
        stars.push(<FontAwesomeIcon icon={faStar} key={n}/>)
        n++
    }
    return(stars)
}