import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Button from './Button';
import Certifications from './Certifications';
import Timelines from './Timelines';
import Skills from './Skills';

const ProfessionalPath = ({handleMenuIcon}) => {
  const [selectedButton, setSelectedButton] = useState("Education/Work");

const handleButtonClick = (buttonText) => {
  setSelectedButton(buttonText);
};
  return ( 
    <div className='section h-full min-w-full w-full flex justify-start items-center m-auto flex-col px-4 md:px-8 max-md:py-8 md:min-h-[49rem] max-md:border-y max-md:rounded-3xl max-md:border-dark-green' id="professional-path">
            <div className="wrapper min-w-full w-full text-center flex-1 flex items-center">
            <div className="content w-full h-full">
            <div className='top-part md:h-[25%] flex flex-col justify-end'>
              <h1 className='text-h1-mobile md:text-h1 mb-8'><span className='text-dark-green font-medium'>P</span>rofessional <span className='text-dark-green font-medium'>P</span>ath</h1>
            </div>
            <div className="buttons flex max-md:flex-col gap-4 mb-8 justify-center">
                <Button text="Education/Work" onClick={() => handleButtonClick("Education/Work")} active={selectedButton === "Education/Work"} />
                <Button text="Certifications" onClick={() => handleButtonClick("Certifications")} active={selectedButton === "Certifications"} />
                <Button text="Skills" onClick={() => handleButtonClick("Skills")} active={selectedButton === "Skills"} />
              </div>
            <div className='bottom-part md:h-[75%]'>
              {selectedButton === "Education/Work" && <Timelines />}
              {selectedButton === "Certifications" && <Certifications handleMenuIcon={handleMenuIcon} />}
              {selectedButton === "Skills" && <Skills />}
            </div>
            </div>
            </div>
            <div className='max-md:hidden flex mt-auto w-full'>
              <PrevButton text="About me" link="#about-me" />
              <NextButton text="Portfolio" link="#portfolio" />
            </div>
          
    </div>
  );
};

export default ProfessionalPath;