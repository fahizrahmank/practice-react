import React from 'react'
import {FaStar} from 'react-icons/fa'

const starRating = ({noOfStar = 5}) => {
  return (
    <div className='star-aing'>
        
        
        {
            [...Array(noOfStar)].map((_,index) => {
                return <FaStar
                key={index}
            
                
                />
            })
        }
        
        </div>
  )
}

export default starRating