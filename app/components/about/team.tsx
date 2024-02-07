/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { styles } from '@/app/styles/style'
import Image from 'next/image'

import { img1,img2,img3,img4,img5,img6,img7,img8,img9, img10, img11 } from '@/public/assests/about/export'
import ServicesSection from './services'

const Team :React.FC = () => {
  return <div>

    {/* <ServicesSection/> */}




    <section className="my-10 bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
      <h1 className={`${styles.title} 800px:!text-[35px] font-bold`}>
        Our <span className="text-gradient">Team</span>
      </h1>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">Meet the Minds Behind Our Success. Passionate, Diverse, and Committed to Excellence.</p>
      </div> 
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="text-center text-gray-500 dark:text-gray-400">
              <Image className="mx-auto mb-4 w-48 h-64 rounded-md" src={img9} alt="Bonnie Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Admas Yano</a>
              </h3>
              <p>CEO</p>
             
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <Image className="mx-auto mb-4 w-48 h-64 rounded-md" src={img6} alt="Helene Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Bethlehem Tsegaye</a>
              </h3>
              <p>COO</p>
             
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <Image className="mx-auto mb-4 w-48 h-64 rounded-md" src={img4} alt="Jese Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Zebiba Mohammed</a>
              </h3>
              <p>Social Media Manager</p>
             
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <Image className="mx-auto mb-4 w-48 h-64 rounded-md" src={img2} alt="Joseph Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Abel Degu</a>
              </h3>
              <p>CMO</p>
           
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <Image className="mx-auto mb-4 w-48 h-64 rounded-md" src={img3} alt="Sofia Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Moges Getachew</a>
              </h3>
              <p>Cheif Academic Officer</p>
            
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <Image className="mx-auto mb-4 w-48 h-64 rounded-md" src={img1} alt="Leslie Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Kalab Tilahun</a>
              </h3>
              <p>Camera Operator</p>
              
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <Image className="mx-auto mb-4 w-48 h-64 rounded-md" src={img5} alt="Michael Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Demissie Beyene</a>
              </h3>
              <p>Head of Ethics</p>
              
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <Image className="mx-auto mb-4 w-48 h-64 rounded-md" src={img7} alt="Neil Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Mihret Mulgeta</a>
              </h3>
              <p>Staff Member</p>
              
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <Image className="mx-auto mb-4 w-48 h-64 rounded-md" src={img10} alt="Neil Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Lidya Dereje</a>
              </h3>
              <p>Media and Communication</p>
              
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <Image className="mx-auto mb-4 w-48 h-64 rounded-md" src={img11} alt="Neil Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Beimnet Gosaye </a>
              </h3>
              <p>Media and Communication</p>
              
          </div>
      </div>  
  </div>
</section>
</div>



}

export default Team