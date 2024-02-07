/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { styles } from "../styles/style";
import Team from "../components/about/team";
import SiderBySide from "../components/about/sidebyside";


const About = () => {
  return (
    <div className="text-black dark:text-white my-12">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient font-semibold">havan Academy?</span>
      </h1>
      <h1 className={`${styles.title} 800px:!text-[25px]`}>
        <span className="text-gradient font-normal">Trusted and Top ranked</span> online Learning platform
      </h1>


      <SiderBySide/>
{/*       
      <br /> */}
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
        Havan Academy is an online learning and Tutoring center. At our learning and 
tutoring center, we are dedicated to empowering students to achieve their full 
potential and become lifelong learners.

We aim to provide high-quality tutoring services that help students overcome 
academic challenges, build confidence, and achieve their full potential. 

Mission 
Our mission is to inspire excellence in education through innovative teaching, 
personalized learning, and a commitment to student success. 

Vision 
Our vision is to become trusted and number one destination for students looking for 
academic excellence and limitless educational opportunities that enable them to pursue their dreams and reach their goals.

Values At Havan Academy, we are committed to providing a supportive and inclusive learning environment where every student's unique talents and abilities are nurtured.

We believe in fostering a culture of academic excellence, where students are encouraged to strive for their personal best and achieve their full potential.

We value collaboration and teamwork, recognizing that students flourish when they are part of a community that supports and challenges them to grow.

We are passionate about empowering students to develop the skills and knowledge they need to succeed in an ever-changing world, preparing them for future academic and professional endeavors.

We prioritize integrity, honesty, and ethical behavior, instilling in our students the importance of upholding high moral standards in all aspects of their academic and personal lives.



        </p>
        <Team/>
        
      </div>


    </div>
  );
};

export default About;
