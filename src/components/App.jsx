import '../styles/App.css'
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className='home'>
      <section className='intro'>
        <h1>Kayla Hunt</h1>
        <p>Web Developer & Problem Solver.</p>
        <p>
          Passionate about building enjoyable 
          experiences for users and learning cool new things. 
         </p>
      </section>

      <nav>
        <ul>
          <li className='navlink'>
          <NavLink to='/work'>Work</NavLink>
          </li>
          <li className='navlink'>
          <NavLink to='/about'>About</NavLink>
          </li>
          <li className='navlink'>
          <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
          
    </div>
  )
}

export default App
