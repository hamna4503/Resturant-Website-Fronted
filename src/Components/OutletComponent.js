import React from 'react'

function OutletComponent(props) {
  return (
    <div>
<div className='flex flex-col mx-2 transition transform hover:scale-105 py-2'>
        <img src={props.img} alt="Bahria Outlet" className='h-80 object-cover w-full'/>
        <p className='text-center text-xl pt-6 pb-1 font-bold'>{props.name}</p>
        <p className='text-center text-normal font-bold text-red-700'>{props.number}</p>
        </div>
    </div>
  )
}

export default OutletComponent
