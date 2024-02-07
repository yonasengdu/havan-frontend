import React from 'react'
import Image from 'next/image'
import { imgH4, imgH5, imgH6,imgH7, imgH8, imgH9 } from '@/public/assests/landing/export'
import {ServiceCard1, ServiceCard2,ServiceCard3, ServiceCard4, ServiceCard5} from './servicesCard'

import { styles } from '@/app/styles/style'

const data = [
    {
        title:"1.  H TutorXcel",
        leading: imgH5,
        moto:"Havan Freshman Tutorial: Igniting Academic Success",
        description: ServiceCard1
        // description: "Our innovative program is crafted to guide new freshmen seamlessly from high school to university, offering a comprehensive curriculum for academic excellence. Accessible anytime, anywhere through your phone, our clear video lectures and mentorship programs create a harmonious and healthy learning environment. We believe in nurturing the potential within every freshman, fostering future scientists, doctors, lawyers, and engineers. Welcome to the future of online education – where bright minds shine and schools come to the dormitory and home of students.",
    },
    {
        title:"2. Havan Soluzion",
        leading: imgH9,
        moto:"Havan Soluzion: Your Ultimate Exam Companion",
        description: ServiceCard2
        // description: "Unleash success with our Gold Package – the pinnacle service at Havan Academy. Tackle 500+ questions per course through video inquiries, providing a luxurious exam preparation experience. With detailed video solutions for freshman mid and final exams, Havan Soluzion ensures your academic excellence. Elevate your knowledge and be confident in accurate answers, making us your trusted ally for academic success.",
    },
    {
        title:"3. Havan COC Preparation Center",
        leading: imgH6,
        moto:"The future of medicos starts here!",
        description : ServiceCard3
        // description: "More than just an online platform, we're a comprehensive system designed for medical students' triumph. Our team, comprising highly experienced medical students, young graduate doctors, and specialists, actively guides and supports students. With integrated programs like TT, MT, BIP, and SJ, our platform ensures a solid grasp of COC exam essentials. Access previous exam questions, explore our COC exam store, and benefit from our impressive 97% success rate. Join us in realizing your dream of becoming a healthcare professional!",
    },
    {
        title:"4. UAT Tutorial",
        leading: imgH7,
        moto:"Are you ready to take the next step in your academic journey?",
        description : ServiceCard4
        // description:"Look no further than Addis Ababa University, Ethiopia's most esteemed institution. If you're a self-sponsored student aspiring to join AAU, our UAT Exam Tutorial is your key to success. With a remarkable 94% success rate, we are the first platform to introduce this tutorial, ensuring you're well-prepared for the Undergraduate Admission Test. Our experienced instructors offer clear video lectures, practice questions, and personalized support to boost your confidence and skills. Don't miss this opportunity to secure your place at AAU – take the first step towards a bright future!",
    },
    {
        title:"5. GAT Tutorial",
        leading: imgH9,
        moto:"Unlock Success with Our Online GAT Tutorial!",
        description : ServiceCard5
        // description:"Prepare confidently for the Graduate Assessment Test (GAT) in Ethiopia with our experienced instructors. Our comprehensive online class covers all test sections, offering interactive lessons, practice questions, and mock exams. Receive personalized feedback, all from the comfort of your home. Whether aiming for graduate programs or enhancing academic skills, we provide the support you need to succeed.",
    }
]




const ServicesSection = () => {
  return (
    <div>

<div className='my-10'>
    {/* <h1 className={`${styles.title} 800px:!text-[40px] font-bold`}>Services</h1> */}


    <h1 className={`${styles.title} 800px:!text-[40px] font-bold w-fit mx-auto`}><span className="text-gradient">Programs We Provide</span></h1>


                <p  className="text-gray-500 sm:text-md dark:text-gray-400 w-[80%] text-justify mx-auto">Explore a range of transformative programs at Havan Academy, from Freshman Tutorials to the pinnacle of exam preparation with Havan Soluzion. Elevate your educational journey with us.</p>
</div>


<ol className="relative border-s border-gray-200 dark:border-gray-700 w-[80%] mx-auto">                  
{
    data.map((item:any, index:number)=>{
        return    <li className="mb-10 ms-6" key={item.title}>     
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                {/* <Image src={item.leading} alt=''/> */}
                </span>       
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <div className="items-center justify-between mb-3 sm:flex">
                <time className="mb-1 text-sm font-normal text-sm text-gray-900 sm:order-last sm:mb-0 text-gradient font-semibold">{item.moto}</time>
    
                    <div className="text-lg font-semibold text-black lex">{item.title}</div>
                </div>
                <div className="p-3 font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300 md:flex justify-center gap-8">
                <Image className={`order-${index%2!==0 ? "last" :"first"} w-72 h-72`} src={item.leading} alt='' width={300} height={300}/>
                <div  className={`order-${index%2===0 ? "last" :"first"} `}>
                    {item.description()}
                </div>
                </div>
            </div>
        </li>

    })
}
</ol>

    </div>
  )
}

export default ServicesSection