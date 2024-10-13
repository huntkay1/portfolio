import '../styles/Work.css'

function Work() {
    const workData = [
        {
            name: 'Leafy Greens',
            description: 'Ecommerce site for a fictional plant shop',
            tech: ['React', 'CSS', 'Bootstrap', 'Express.js'],
            website: '',
            github: '',
            img: ''
        },
        {
            name: 'Pokemon Memory Game',
            description: 'Card game powered by the PokeAPI',
            tech: ['React', 'CSS'],
            website: '',
            github: '',
            img: ''
        }, 
        {
            name: 'Resume Builder',
            description: 'Download a custom resume with the given template',
            tech: ['React', 'CSS'],
            website: '',
            github: '',
            img: ''
        }, 
        {
            name: 'Weather App',
            description: 'Discover the weather in your area',
            tech: ['JavaScript', 'CSS'],
            website: '',
            github: '',
            img: ''
        }
    ]
    return(
        <div>
            <h2 className='page-header'>WORK</h2>
            <div className='work-container'>
                {workData.map((item, index) => 
                    <div key={index} className='card'>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <ul className='tech-list'>
                            {item.tech.map((tech, index) => 
                                <li key={index}>{tech}</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Work