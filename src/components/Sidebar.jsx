import GitHub2 from '../assets/github-2.svg'
import Email from '../assets/email.svg'
import LinkedIn from '../assets/linkedin.svg'
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return(
        <div className='sidebar'>
        <NavLink to='/'>
            <button className='home-button'>HOME</button>
        </NavLink>
        <div className='sidebar-icons'>
            <img src={GitHub2}></img>
            <img src={LinkedIn}></img>
            <img src={Email}></img>
        </div>
    </div>
    )
}

export default Sidebar