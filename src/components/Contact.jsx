import '../styles/Contact.css'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Contact() {
   
    const { register, handleSubmit, formState: {errors} } = useForm();

    return( 
        <div className='contact'>
            <NavLink to='/'>
                <button className='home-button'>HOME</button>
            </NavLink>
            <h2 className='page-header'>CONTACT</h2>
            <div className='form-container'>
                <form onSubmit={handleSubmit((data) => {
                    console.log(data)
                })}>
                    <div className='input-block'>
                        <div className='input-header'>
                            <label>Name</label>
                            <p className='error'>{errors.name?.message}</p>
                        </div>
                        <input {...register('name', {required: 'Please provide a name'})}type='text'></input>
                    </div>
                    <div className='input-block'>
                        <div className='input-header'>
                            <label {...register('email', {required: 'Please provide an email'})}>Email</label>
                            <p className='error'>{errors.email?.message}</p>
                        </div>
                        <input type='email'></input>
                    </div>
                    <div className='input-block'>
                        <label>Comments</label>
                        <textarea {...register('comments')}></textarea>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact 