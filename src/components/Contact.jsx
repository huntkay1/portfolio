import '../styles/Contact.css';
import transition from './transition.jsx';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <div className="contact">
      <NavLink to="/">
        <button className="home-button">HOME</button>
      </NavLink>
      <h2 className="page-header">Contact</h2>
      <div className="form-container">
        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <div className="input-block">
            <div className="input-header">
              <label>Name</label>
              <p className="error">{errors.name?.message}</p>
            </div>
            <input 
              {...register('user_name', { required: 'Please provide a name' })} 
              type="text" 
              name="user_name"
            />
          </div>
          <div className="input-block">
            <div className="input-header">
              <label>Email</label>
              <p className="error">{errors.email?.message}</p>
            </div>
            <input 
              {...register('user_email', { required: 'Please provide an email' })} 
              type="email" 
              name="from_email"
            />
          </div>
          <div className="input-block">
            <label>Comments</label>
            <textarea 
              {...register('comments')} 
              name="message"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}


export default transition(Contact);
