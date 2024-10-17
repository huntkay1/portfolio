import '../styles/Work.css'
import { useState } from 'react'
import Leafy from '../assets/leafy.png'
import Pokemon from '../assets/pokemon.png'
import Resume from '../assets/resume.png'

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
                        <img src={item.img} className='hidden-content'></img>

                    </div>
                )}
            </div>
            
            <div className='work-headers'>
                <div className='work-copy'>
                    <p>This is a collection of the projects that I am most proud of.</p>
                    <p>I am consistently adding cool new projects to this list and learning new things.</p>
                </div>
                <h2 className='page-header'>WORK</h2>
            </div>
        </div>
    )
}

export default Work