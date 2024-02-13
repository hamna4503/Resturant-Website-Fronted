import React from 'react'
import offer1 from "../../src/Assets/images/offers/offer2.jpg"
import offer2 from "../../src/Assets/images/offers/offer3.jpg"
import offer3 from "../../src/Assets/images/offers/offer4.jpg"



function Offers() {
  return (
    <div>
      <div className='flex flex-col'>
        <div>
        <img src={offer1} className='w-full h-1/3'/>
        </div>

        <div className='flex flex-col w-full h-1/3'>
            <img src={offer2}/>
            <img src={offer3}/>
        </div>
      </div>
    </div>
  )
}

export default Offers
