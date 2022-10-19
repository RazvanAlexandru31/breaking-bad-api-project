import React from 'react'

const About = () => {
  return (
    <div className='grid place-items-center p-10'>
      <h2 className='font-extrabold'>React project that uses the breaking bad api to show and filter characters from the show.</h2>
      <p>For styling i used tailwind css and daisyUI.</p>
      <p>For more information regarding the api please visit <a href='https://breakingbadapi.com/' target='_blank' rel='noreferrer' className='text-sky-400 underline'>breakingbadapi.com</a>.</p>
      <p>Version: 1.0.0</p>
    </div>
  )
}

export default About
