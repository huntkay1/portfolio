import '../styles/Work.css'
import { useState } from 'react'

function Work() {
    const workData = [
        {
            name: 'LEAFY GREENS',
            description: 'Ecommerce site for a fictional plant shop',
            tech: ['React', 'CSS', 'Bootstrap', 'Express.js'],
            website: '',
            github: '',
            img: ''
        },
        {
            name: 'POKEMON MEMORY GAME',
            description: 'Card game powered by the PokeAPI',
            tech: ['React', 'CSS'],
            website: '',
            github: '',
            img: ''
        }, 
        {
            name: 'RESUME BUILDER',
            description: 'Download a custom resume with the given template',
            tech: ['React', 'CSS'],
            website: '',
            github: '',
            img: ''
        }, 
    ]

    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleMouseEnter = (index) => setExpandedIndex(index);
    const handleMouseLeave = () => setExpandedIndex(null);

    return (
        <div>
            <div className='work-container'>
                {workData.map((item, index) => 
                    <div key={index} className='card'>

                        <h3>{item.name}</h3>
                        <p className='hidden-content'>{item.description}</p>
                        <ul className='tech-list hidden-content'>
                            {item.tech.map((tech, index) => 
                                <li key={index}>{tech}</li>
                            )}
                        </ul>

                    </div>
                )}
            </div>

            <h2 className='page-header'>WORK</h2>
        </div>
    )
}

export default Work