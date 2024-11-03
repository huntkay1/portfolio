import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
  const form = useRef();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4hgvw8i', 'template_fuz2glx', e.target, 'V9KKPMZIVttwL4GfW')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );

    console.log(data); // This should contain the form data
  };

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <NavLink to='/'>
        <button className='home-button'>HOME</button>
      </NavLink>

      <motion.h2
        className="page-header"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        Contact
      </motion.h2>

      <motion.div
        className="form-container"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <motion.div
            className="input-block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <div className="input-header">
              <label>Name</label>
              <p className="error">{errors.user_name?.message}</p>
            </div>
            <input
              {...register('user_name', { required: 'Please provide a name' })}
              type="text"
              name="user_name"
            />
          </motion.div>

          <motion.div
            className="input-block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <div className="input-header">
              <label>Email</label>
              <p className="error">{errors.user_email?.message}</p>
            </div>
            <input
              {...register('user_email', { required: 'Please provide an email' })}
              type="email"
              name="from_email"
            />
          </motion.div>

          <motion.div
            className="input-block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <label>Comments</label>
            <textarea {...register('comments')} name="message" />
          </motion.div>

          <motion.button
            type="submit"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;

