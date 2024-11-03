import '../styles/About.css'
import transition from './transition.jsx'
import { NavLink } from 'react-router-dom'

function About() {
    return(
        <div className='about'>
            <NavLink to='/'>
                <button className='home-button'>HOME</button>
            </NavLink>
            <h2 className='page-header'>About</h2>
            <div className='about-main'>
                <div className='me'></div>
                <div className='about-copy'>
                    <p>
                    Howdy. My name is Kayla and I'm a front-end developer (who dabbles in back-end) based in Michigan. 
                    </p>
                    <p>
                    I have completed a bachelor's degree in Information Science, of which I had the experience of learning
                    the ins and outs of creating products for the web - including UX design & research, programming, and
                    web design. With this degree, I was inspired to continue on the path of web development, and have since
                    continued to teach myself many new skills including React & Node.js.  
                    </p>
                    <p>
                        One of the simple pleasures in life is coming across beautiful and easy-to-use websites. My goal is to craft 
                        enjoyable experiences for users while helping you reach your goals &#10023;
                    </p>
                </div>  

            </div>

            <div>
                <div className='tech'>
                    <h2 className='tech-header'>
                        Tech & Tools
                    </h2>
                    <ul>
                    <li className='tech-item'>React</li>
                    <li className='tech-item'>JavaScript</li>
                    <li className='tech-item'>HTML5</li>
                    <li className='tech-item'>CSS3</li>
                    <li className='tech-item'>Git</li>
                    <li className='tech-item'>Express.js</li>
                    <li className='tech-item'>Node.js</li>
                    <li className='tech-item'>Webpack</li>
                    <li className='tech-item'>Figma</li>
                    </ul>
                </div>
            
            </div>
        </div>
    )
}

export default transition(About)