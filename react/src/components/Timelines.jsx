import React from 'react';
import Timeline from './Timeline';

const Timelines = () => {
  return (
    <div className='md:w-3/4 mx-auto'>
    <h2 className='text-h2-mobile md:text-h2 mb-4'><span className='text-dark-green'>H</span>istory</h2>                
        <p className='mb-8 text-x-large xxl:text-[1.5rem] leading-14'>Step into my journey through the realms of learning and work, where each experience has been <span className='text-dark-green font-medium'>a stepping stone towards excellence</span>.</p>
    
      <div className={`timelines text-left gap-8 flex flex-col w-max m-auto`}>
         <Timeline year={'2022 - current'} description="👩‍💻 Employment at Amandus Communication" position="Web Developer"/>
         <Timeline year={'2021 - 2022'} description="👩‍🎓 Internship at Digital Agency Veebi" position="Wordpress/Front-End Developer" />
         <Timeline year={'2020 - 2022'} description="👩‍🎓 Education at Tallinn Industrial Education Centre" position="Software Engineer"/>
      </div>
      </div>
  );
};

export default Timelines;