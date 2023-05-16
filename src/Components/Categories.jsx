import React from 'react'
import data from '../pages/api/Categories.json'

export default function Categories() {
  return (
    <div className='mx-[10rem]'>
    kategoriler
    <div className='grid grid-cols-10	 w-auto h-auto items-center'>
     
      {
        data.map(e=><div className='w-[9rem] h-[6.75] my-4 text-center hover:bg-gray-100 hover:text-primary' key={e.id}>
          <img src={e.image} className='w-[3.5rem]  h-[3.5rem] m-auto  border-2 rounded-lg' alt=''/>{e.title}</div>)
      }
    </div>
    </div>
  )
}
