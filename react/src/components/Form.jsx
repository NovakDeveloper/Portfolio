import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';
import FormMessage from './FormMessage';

const ContactForm = () => {
  const [messageStatus, setMessageStatus] = useState(null);
  const form = useRef();
  const messageRef = useRef(null);

  useEffect(() => {
    if (messageStatus !== null) {
      gsap.to(messageRef.current, { autoAlpha: 1, duration: 0.5 });
      const timeout = setTimeout(() => {
        gsap.to(messageRef.current, { autoAlpha: 0, duration: 0.5, onComplete: () => setMessageStatus(null) });
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [messageStatus]);

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current['name'].value.trim();
    const email = form.current['email'].value.trim();
    const subject = form.current['subject'].value.trim();
    const message = form.current['message'].value.trim();
    if (!name || !email || !subject || !message) {
      setMessageStatus(false);
      return;
    } else {
      emailjs
        .sendForm('service_ytrx4a7', 'template_2oo1cno', form.current, {
          publicKey: 'y7s3YQZdaDsNZF0Ge',
        })
        .then(
          () => {
            form.current.reset();
            setMessageStatus(true);
          },
          (error) => {
            setMessageStatus(false);
          }
        );
    }
  };
  return (
    <div className='md:w-3/4 m-auto'>
    <p className='mb-8'><span className='text-dark-green font-medium'>Ready to turn ideas into reality?</span> Let's collaborate and bring your vision to life. Contact me today to discuss your project and take the first step towards success.</p>
    <form ref={form} onSubmit={sendEmail} className="grid grid-cols-2 gap-4">
      <div className="col-span-2 md:col-span-1">
        <input type="text" placeholder='Name' id="name" name="name" className="w-full px-3 py-2 rounded-md outline outline-light-green focus:outline-dark-green outline-2" />
      </div>
      <div className="col-span-2 md:col-span-1">
        <input placeholder='E-mail' type="email" id="email" name="email" className="w-full px-3 py-2 rounded-md outline outline-light-green focus:outline-dark-green outline-2" />
      </div>
      <div className="col-span-2">
        <input placeholder='Subject' type="text" id="subject" name="subject" className="w-full px-3 py-2 rounded-md outline outline-light-green focus:outline-dark-green outline-2" />
      </div>
      <div className="col-span-2">
        <textarea placeholder="Message" id="message" name="message" rows="6" className="w-full px-3 py-2 rounded-md outline outline-light-green focus:outline-dark-green outline-2"></textarea>
      </div>
      <div className="col-span-2 flex justify-between items-center">
      <button type="submit" className="bg-almost-black text-white text-center py-2 px-8 rounded-full leading-4 w-full block tracking-wider border-almost-black border hover:bg-almost-white hover:text-almost-black cursor-pointer w-max text-[0.85rem] mt-2">Submit</button>
      <div className='social-bar flex gap-2'>
      <a href="" className='social-icon w-8 h-8 block'>
      <svg className='w-full h-full border border-black rounded-full group' fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="-143 145 512 512" xml:space="preserve">
      <path className="" d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
        V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
        C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
        c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
        "/>
      </svg>
      </a>
      <a href="" className='social-icon w-8 h-8 block'>
      <svg className='w-full h-full border border-black rounded-full group' fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="-143 145 512 512" xml:space="preserve">
      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3
        v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2
        c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"/>
      </svg>
      </a>
      <a href="" className='social-icon w-8 h-8 block'>
      <svg className='w-full h-full border border-black rounded-full group' fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="-143 145 512 512" xml:space="preserve">
        <g>
          <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8
            c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"/>
          <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 	"/>
          <path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157
            c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"/>
          <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8
            c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157
            c27.3,0,49.5,22.2,49.5,49.5V374.7z"/>
        </g>
        </svg>
      </a>
    </div>
      </div>
    </form>
    <div ref={messageRef} className='opacity-0'>
    {(messageStatus === true) && <FormMessage headline="Success!" message="Message sent! Expect a response within 1-2 hours. 🚀" />}
    {(messageStatus === false) && <FormMessage headline="Something went wrong... 😔" message="Please check your entered data. All fields must be filled." />}
    </div>
    </div>
  );
};

export default ContactForm;
