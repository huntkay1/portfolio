import './styles/App.css'


function App() {


  return (
    <div className='home'>
      <section className='intro'>
        <h1>KAYLA HUNT</h1>
        <p>Web Developer and Problem Solver.</p>
        <p>
          Passionate about building enjoyable 
          experiences for users and learning cool new tricks. 
         </p>
      </section>

      <nav>
        <ul>
         <li>WORK</li>
         <li>ABOUT</li>
         <li>CONTACT</li>
        </ul>
      </nav>

      <section className='tech-stack'>
        <h2>TECH & TOOLS</h2>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Git</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>Webpack</li>
          <li>Figma</li>
        </ul>
      </section>
    </div>
  )
}

export default App
