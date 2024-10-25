import '../styles/App.css'
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className='home'>
      <section className='intro'>
        <h1>KAYLA HUNT</h1>
        <p>Web Developer & Problem Solver.</p>
        <p>
          Passionate about building enjoyable 
          experiences for users and learning cool new things. 
         </p>
      </section>

      <nav>
        <ul>
          <li className='navlink'>
          <NavLink to='/work'>WORK</NavLink>
          </li>
          <li className='navlink'>
          <NavLink to='/about'>ABOUT</NavLink>
          </li>
          <li className='navlink'>
          <NavLink to='/contact'>CONTACT</NavLink>
          </li>
        </ul>
      </nav>

      <h2>TECH & TOOLS</h2>
      <div className='tech-stack-items'>
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
  )
}

export default App
