import '../styles/Work.css'
import Leafy from '../assets/leafy.png'
import Pokemon from '../assets/pokemon.png'
import Resume from '../assets/resume.png'
import { NavLink } from 'react-router-dom';

function Work() {

    const workData = [
        {
            name: 'LEAFY GREENS',
            description: 'Ecommerce site for a fictional plant shop',
            tech: ['React', 'CSS', 'Bootstrap', 'Express.js'],
            website: '',
            github: '',
            img: Leafy
        },
        {
            name: 'POKEMON MEMORY GAME',
            description: 'Card game powered by the PokeAPI',
            tech: ['React', 'CSS'],
            website: '',
            github: '',
            img: Pokemon
        }, 
        {
            name: 'RESUME BUILDER',
            description: 'Download a custom resume with the given template',
            tech: ['React', 'CSS'],
            website: '',
            github: '',
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
                        <div className='card-info4'>
                            <h3>{item.name}</h3>
                            <p className='hidden-content'>{item.description}</p>
                            <ul className='tech-list hidden-content'>
                                {item.tech.map((tech, index) => 
                                    <li key={index}>{tech}</li>
                                )}
                            </ul>
                        </div>
                        <div className='card-img hidden-content' style={{backgroundImage: `url(${item.img})` }}></div>

                    </div>
                )}
            </div>
            
            <div className='work-headers'>
                <div className='work-copy'>
                    <p>This is a collection of the projects that I'm most proud of.</p>
                    <p>I'm consistently adding fun new projects to this list as I keep experimenting and gain more skills!</p>
                </div>
                <h2 className='page-header'>WORK</h2>
            </div>
        </div>
    )
}

export default Work