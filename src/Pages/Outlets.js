import React from 'react'
import outlet1 from ".././Assets/images/outlets/outlet1.jpeg"
import outlet2 from ".././Assets/images/outlets/outlet2.jpg"
import outlet3 from ".././Assets/images/outlets/outlet3.jpg"
import OutletComponent from '../Components/OutletComponent'


function Outlets() {
  return (
    <div className='bg-gray-300 pt-20 h-full pb-20'>
      
      <h1 className='text-center text-3xl p-4 pt-5 font-extralight'>Our Outlets</h1>
      <h3 className='text-center text-4xl sm:text-6xl p-3 font-bold'>Find an Outlet Near You</h3>
      <h3 className='text-center text-2xl sm:text-3xl p-4 font-extralight'> | </h3>
   
      <div className='flex flex-row justify-center align-center flex-wrap'>   
        <OutletComponent number="+928080041" img={outlet1} name="Gulshan Outlet"/>
        <OutletComponent number="+928080043" img={outlet2} name="Bahria Outlet"/>
        <OutletComponent number="+928080049" img={outlet3} name="Clifton Outlet"/>
      </div>
    
    </div>
  )
}

export default Outlets;