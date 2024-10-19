import '../styles/Work.css'
import Leafy from '../assets/leafy.png'
import Pokemon from '../assets/pokemon.png'
import Resume from '../assets/resume.png'
import Sparkle from '../assets/sparkle.svg'
import GitHub from '../assets/github.svg'
import { NavLink } from 'react-router-dom';

function Work() {

    const workData = [
        {
            name: 'LEAFY GREENS',
            description: 'Ecommerce site for a fictional plant shop',
            tech: ['React', 'CSS', 'Bootstrap', 'Express.js'],
            website: 'https://poetic-starlight-e42a0f.netlify.app/',
            github: 'https://github.com/huntkay1/shopping-cart',
            img: Leafy
        },
        {
            name: 'MEMORY GAME',
            description: 'Memory card game powered by PokeAPI',
            tech: ['React', 'CSS'],
            website: 'https://rad-bienenstitch-6bdaa4.netlify.app/',
            github: 'https://github.com/huntkay1/memory-game-app',
            img: Pokemon
        }, 
        {
            name: 'RESUME BUILDER',
            description: 'Download a custom resume with the given template',
            tech: ['React', 'CSS'],
            website: ' https://exquisite-kitsune-0ba888.netlify.app/',
            github: 'https://github.com/huntkay1/cv-builder-app',
            img: Resume
        }, 
    ]

    return (
        <div>
            <NavLink to='/'>
                <h3 className='home-button'>HOME</h3>
            </NavLink>
            <div className='work-container'>
                {workData.map((item, index) => 
                    <div key={index} className='card'>
                        <div className='card-info'>
                            <h3>{item.name}</h3>
                            <p className='hidden-content'>{item.description}</p>
                            <ul className='tech-list hidden-content'>
                                {item.tech.map((tech, index) => 
                                    <li key={index}>{tech}</li>
                                )}
                            </ul>
                            <div className='project-links'>
                                <div className='hidden-content link'>
                                    <img src={GitHub}></img>
                                    <a href={item.github}>Repository</a>
                                </div>
                                <div className='hidden-content link'>
                                    <img src={Sparkle}></img>
                                    <a href={item.website}>Check it out</a>
                                </div>
                            </div>
                        </div>

                        <div className='card-img hidden-content' style={{backgroundImage: `url(${item.img})` }}></div>

                    </div>
                )}
            </div>
            
            <div className='work-headers'>
                <div className='work-copy'>
                    <p>This is a collection of the projects that I'm most proud of.</p>
                    <p>I'm consistently adding fun new projects to this list as I continue to experiment and level up my skills.</p>
                </div>
                <h2 className='page-header'>WORK</h2>
            </div>
        </div>
    )
}

export default Work