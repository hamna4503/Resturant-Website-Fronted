import React from 'react'
import outlet1 from ".././Assets/images/outlets/outlet1.jpeg"
import outlet2 from ".././Assets/images/outlets/outlet2.jpg"
import outlet3 from ".././Assets/images/outlets/outlet3.jpg"
import OutletComponent from '../Components/OutletComponent'
import HeadingSection from '../Components/HeadingSection'


function Outlets() {
  return (
    <div className='bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 pt-20 h-full pb-20'>
      
      <HeadingSection topHeading="Our Outlets" bottomHeading="Find an Outlet Near You"/>

      <div className='flex flex-row justify-center align-center flex-wrap'>   
        <OutletComponent number="+928080041" img={outlet1} name="Gulshan Outlet"/>
        <OutletComponent number="+928080043" img={outlet2} name="Bahria Outlet"/>
        <OutletComponent number="+928080049" img={outlet3} name="Clifton Outlet"/>
      </div>
    
    </div>
  )
}

export default Outlets;