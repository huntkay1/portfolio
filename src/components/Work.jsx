import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import '../styles/Work.css';
import Leafy from '../assets/leafy.png';
import Pokemon from '../assets/pokemon.png';
import Resume from '../assets/resume.png';
import Sparkle from '../assets/sparkle.svg';
import GitHub from '../assets/github.svg';
import GitHub2 from '../assets/github-2.svg'
import Email from '../assets/email.svg'
import LinkedIn from '../assets/linkedin.svg'

function Work() {
    const workData = [
        {
            name: 'Leafy Greens',
            description: 'Ecommerce site for a fictional plant shop',
            tech: ['React', 'CSS', 'Bootstrap', 'Express.js'],
            website: 'https://poetic-starlight-e42a0f.netlify.app/',
            github: 'https://github.com/huntkay1/shopping-cart',
            img: Leafy
        },
        {
            name: 'Memory Game',
            description: 'Memory card game powered by PokeAPI',
            tech: ['React', 'CSS'],
            website: 'https://rad-bienenstitch-6bdaa4.netlify.app/',
            github: 'https://github.com/huntkay1/memory-game-app',
            img: Pokemon
        }, 
        {
            name: 'Resume Builder',
            description: 'Download a custom resume with the given template',
            tech: ['React', 'CSS'],
            website: ' https://exquisite-kitsune-0ba888.netlify.app/',
            github: 'https://github.com/huntkay1/cv-builder-app',
            img: Resume
        }, 
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className='page-container'
        >   
        
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


            <div className='work'>
                <div className='work-container'>
                    {workData.map((item, index) => 
                        <motion.div
                            key={index}
                            className='card'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.3, duration: 0.4 }}
                        >
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
                                        <img src={GitHub} alt="GitHub" />
                                        <a href={item.github}>Repository</a>
                                    </div>
                                    <div className='hidden-content link'>
                                        <img src={Sparkle} alt="Live Site" />
                                        <a href={item.website}>Check it out</a>
                                    </div>
                                </div>
                            </div>
                            <div className='card-img hidden-content' style={{ backgroundImage: `url(${item.img})` }}></div>
                        </motion.div>
                    )}
                </div>
                
                <div className='work-headers'>
                    <div className='work-copy'>
                        <p>This is a collection of the projects that I'm most proud of.</p>
                        <p>I'm consistently adding fun new projects to this list as I continue to experiment and level up my skills.</p>
                    </div>
                    <h2 className='page-header'>Work</h2>
                </div>
            </div>
        </motion.div>
    );
}

export default Work;
