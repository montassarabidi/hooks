import React ,{useState} from 'react'
import StarRatings from 'react-star-ratings'
const Filter = ({filterRating,filterName}) => {
    console.log(filterName)
    const [rating, setRating] = useState(0);
    const changeRating =( newRating, name ) => {
        setRating (newRating)
        filterRating (newRating)
     }
  return (
    <div className='putin'>
        <input placeholder='search by Name' onChange={ (e) => filterName ( e.target.value)} />
 <StarRatings style={{display:'flex' }}
 starHoverColor='yellow'
          rating={rating}
          starRatedColor="yellow"
          changeRating={changeRating}
          numberOfStars={5}
          name='rating'/>          </div>

  )     
     

}

export default Filter