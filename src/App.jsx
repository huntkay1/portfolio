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

      <h2>TECH & TOOLS</h2>
      <div className='tech-stack-items'>
          <div>React</div>
          <div>JavaScript</div>
          <div>HTML5</div>
          <div>CSS3</div>
          <div>Git</div>
          <div>Express.js</div>
          <div>Node.js</div>
          <div>Webpack</div>
          <div>Figma</div>
      </div>
    </div>
  )
}

export default App
