import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your own EmailJS Service ID, Template ID, and User ID
    emailjs.send('service_95', 'template_a5f86kn', formData, "t6-vpddTE45EiW9Uh")
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({
            name: '',
            email: '',
            message: ''
          });
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message');
      });
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className=''
      variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
    >
      <div className='p-10 flex flex-col gap-8'>
        <input 
          type="text" 
          name="name"
          placeholder='Name' 
          value={formData.name}
          onChange={handleChange}
          className='bg-gray-300 text-[#000000] py-3 pl-3 rounded-lg mb-4 outline-none border-none' 
        />
        <input 
          type="email" 
          name="email"
          placeholder='Email'  
          value={formData.email}
          onChange={handleChange}
          className='bg-gray-300 text-[#000000] py-3 pl-3 rounded-lg mb-4 outline-none border-none' 
        />
        <textarea 
          name="message"
          placeholder='Message...'  
          value={formData.message}
          onChange={handleChange}
          className='bg-gray-300 text-[#000000] py-3 pl-3 rounded-md h-56 outline-none border-none'
        ></textarea>
        <motion.button 
          type="submit"
          className='bg-gradient-to-r from-[#3752a3] to-[#096976] py-3 px-6 rounded-lg mt-8 text-white'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
