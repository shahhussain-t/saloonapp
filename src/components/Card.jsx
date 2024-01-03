import React from 'react'
import StarRating from './StarRating'
const Card = ({course}) => {
  return (
    <div className='z-10 bg-white  shadow-md drop-shadow-md overflow-hidden rounded-2xl mr-2  my-4'>
        <img src={course.linkImg} 
                className="h-52 w-full object-cover"/>
        <div className='p-5 border border-b'>
            <h1 className='py-2 truncate font-semibold'>{course.title}</h1>
            <StarRating rating={course.rating}/>
        </div>
        <h3 className='p-3 text-xl'>{course.price}</h3>
    </div>
  )
}

export default Card