import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id, booktitle, bookdescription} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <h1>{booktitle}</h1>
        <h2>{bookdescription}</h2>
    </div>
  )
}

export default SingleBook