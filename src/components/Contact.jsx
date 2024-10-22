import '../styles/Contact.css'
import { NavLink } from 'react-router-dom'

function Contact() {



    return( 
        <div className='contact'>
            <NavLink to='/'>
                <button className='home-button'>HOME</button>
            </NavLink>
            <h2 className='page-header'>Contact</h2>
            <div className='form-container'>
                <p>I'd love to hear from ya</p>
                <form>
                    <div className='input-block'>
                        <label>NAME</label>
                        <input type='text'></input>
                    </div>
                    <div className='input-block'>
                        <label>NUMBER</label>
                        <input type='tel'></input>
                    </div>
                    <div className='input-block'>
                        <label>EMAIL</label>
                        <input type='email'></input>
                    </div>
                    <div className='input-block'>
                        <label>COMMENTS</label>
                        <input type='text'></input>
                    </div>
                    <button type='submit'>SUBMIT</button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact 