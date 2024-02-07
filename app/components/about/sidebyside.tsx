import React from 'react';
import { imgH11 } from '@/public/assests/landing/export'
import  {AiOutlineSearch} from 'react-icons/ai'
import Image from 'next/image';



const SiderBySide = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-gradient font-semibold'>Our Story</p>
         
                <p className='py-2 text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>
                
                
            </div>
            <Image src={imgH11} alt="SiderBySide image here"/>
            
            {/* <img  src={SiderBySideImg} className="md:order-last  order-first" /> */}



        </div>
        

    </div>
  )
}

export default SiderBySide