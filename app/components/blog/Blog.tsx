import React from 'react'
import {styles} from "@/app/styles/style"

const Blog = () => {
  return (
    <div className='w-full h-[485px] flex justify-center items-center'>
              <h1 className={`${styles.title} 800px:!text-[35px] font-bold`}>
        Our <span className="text-gradient text-5xl "> Blog </span>Comming Soon
      </h1>
    </div>
  )
}

export default Blog