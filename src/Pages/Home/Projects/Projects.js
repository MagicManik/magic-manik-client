import React from 'react';
import tools from '../../../assets/images/tools-hunter.png';
import study from '../../../assets/images/study-hacks-corner.png';
import './Projects.css';

const Projects = () => {

    return (
        <section className='project-section'>
            <div>
                <p className='text-center text-white'>BEST Projects</p>
                <h4 className='text-center gradient-text-one'>Designe and Functionality of Magic Manik</h4>
            </div>
            <div className='project-container'>
                <div>
                    <div className='project'>
                        <a href="/"><img src={tools} alt="" /></a>
                        <p className='px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={study} alt="" /></a>
                        <p className='px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={study} alt="" /></a>
                        <p className='px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={study} alt="" /></a>
                        <p className='px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={study} alt="" /></a>
                        <p className='px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={study} alt="" /></a>
                        <p className='px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente totam omnis reprehenderit tenetur. Fugiat enim, doloremque</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;