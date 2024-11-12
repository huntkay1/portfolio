import GitHub2 from '../assets/github-2.svg'
import Email from '../assets/email.svg'
import LinkedIn from '../assets/linkedin.svg'
import { NavLink, Link } from 'react-router-dom';

function Sidebar() {
    return(
        <div className='sidebar'>
        <NavLink to='/'>
            <button className='home-button'>HOME</button>
        </NavLink>
        <div className='sidebar-icons'>
            <Link to='https://github.com/huntkay1'><img src={GitHub2}></img></Link>
            <Link to='https://www.linkedin.com/in/kaylahunt7/'><img src={LinkedIn}></img></Link>
            <Link to=''><img src={Email}></img></Link>
        </div>
    </div>
    )
}

export default Sidebar