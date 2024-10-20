import '../styles/About.css'
import { NavLink } from 'react-router-dom'

function About() {
    return(
        <div className='about'>
            <NavLink to='/'>
                <button className='home-button'>HOME</button>
            </NavLink>
            <h2 className='page-header'>ABOUT</h2>
            <div className='about-main'>
                <div className='about-copy'>
                    <p>
                    Howdy. My name is Kayla and I'm a front-end developer (who dabbles in back-end) based in Michigan. 
                    </p>
                    <p>
                    I have completed a bachelor's degree in Information Science, of which I had the experience to learn
                    the ins and outs of creating products for the web - including UX design & research, programming, and
                    web design. With this degree, I was inspired to continue on the path of web development, and have since
                    continued to teach myself many new skills including React & Node.js.  
                    </p>
                    <p>
                        One of the simple pleasures in life is coming across beautiful and easy-to-use websites. My goal is to contribute to building 
                        enjoyable experiences for users, as well as creating sites that help you reach your goals. 
                    </p>
                    <div>
                        <h2 className='fav-header'>
                            MORE SIMPLE PLEASURES
                        </h2>
                        <ul>
                            <li>A darn good book</li>
                            <li>Baking</li>
                            <li>Discovering your new favorite movie</li>
                            <li>Watching your favorite band in concert</li>
                            <li>Lake Michigan sunsets</li>
                        </ul>
                    </div>
                </div>
                <div className='me'></div>
            </div>
            
        </div>
    )
}

export default About