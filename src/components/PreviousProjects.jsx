import React from 'react'
import { assets } from '../assets/assets'

const PreviousProjects = () => {
  return (
    <div className='bg-[#141414] w-full'>
      <h1 className='text-center text-white text-[80px] py-24 font-bold'>Port<span className='text-red-500'>folio</span></h1>
      <div className='flex justify-center gap-28'>
        <div>
        <img src={assets.portfolio_img_1} alt="" className='w-96' />
         <h3 className='text-center py-5'>React Google Gemini Clone</h3>
       </div>
      <div>
        <img src={assets.portfolio_img_2} alt="" className='w-96' />
         <h3 className='text-center py-5'>React Youtube Clone</h3>
       </div>
      <div>
        <img src={assets.portfolio_img_3} alt="" className='w-96' />
         <h3 className='text-center py-5'>React WEather-App</h3>
       </div>
       
      </div>
      <p className='text-center py-14'>See More →</p>
    </div>
  )
}

export default PreviousProjects
