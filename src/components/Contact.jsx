import '../styles/Contact.css'
import { NavLink } from 'react-router-dom'

function Contact() {



    return( 
        <div className='contact'>
            <NavLink to='/'>
                <button className='home-button'>HOME</button>
            </NavLink>
            <h2 className='page-header'>CONTACT</h2>
            <div className='form-container'>
                <form>
                    <div className='input-block'>
                        <label>Name</label>
                        <input type='text'></input>
                    </div>
                    <div className='input-block'>
                        <label>Number</label>
                        <input type='tel'></input>
                    </div>
                    <div className='input-block'>
                        <label>Email</label>
                        <input type='email'></input>
                    </div>
                    <div className='input-block'>
                        <label>Comments</label>
                        <textarea></textarea>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact 