import React from 'react'

function HeadingSection(props) {
  return (
    <div>
        <h1 className='text-center text-3xl p-4 pt-5 font-extralight'>{props.topHeading}</h1>
        <h3 className='text-center text-4xl sm:text-6xl p-2 font-bold'>{props.bottomHeading}</h3>
        <h3 className='text-center text-2xl sm:text-3xl p-4 font-extralight'> | </h3>
    </div>
  )
}

export default HeadingSection
