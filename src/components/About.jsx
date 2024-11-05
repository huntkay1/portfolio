import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import '../styles/About.css';

function About() {
    return (
        <motion.div
            className='about'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >

            <Sidebar />

            <div>

                <motion.h2
                    className='page-header'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                >
                    About
                </motion.h2>

                <motion.div
                    className='about-main'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                    <motion.div
                        className='me'
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                    />
                    <motion.div
                        className='about-copy'
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                    >
                        <p>
                            Howdy. My name is Kayla, and I'm a front-end developer (who dabbles in back-end) based in Michigan.
                        </p>
                        <p>
                            I have completed a bachelor's degree in Information Science, where I learned about UX design & research, programming, and web design. This experience inspired me to pursue web development, and I've since continued to teach myself new skills like React & Framer Motion.
                        </p>
                        <p>
                            One of the simple pleasures in life is coming across beautiful and easy-to-use websites. My goal is to craft enjoyable experiences for users while helping you reach your goals &#10023;
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='tech'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                >
                    <h2 className='tech-header'>Tech & Tools</h2>
                    <ul>
                        {['React', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'Express.js', 'Node.js', 'Webpack', 'Figma'].map((tech, index) => (
                            <motion.li
                                key={index}
                                className='tech-item'
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
                            >
                                {tech}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

            </div>

        </motion.div>

    );
}

export default About;
