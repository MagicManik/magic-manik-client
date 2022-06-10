import React from 'react';
import './Projects.css';
import { useNavigate } from 'react-router-dom';
import UseProjects from '../../../hooks/UseProjects';

const Projects = () => {

    const [projects] = UseProjects();

    const navigate = useNavigate();

    const handleDetails = id => {
        navigate(`/project/${id}`)
    }

    return (
        <section className='project-section'>

            <div className='pt-5'>
                <h1>{projects.length}</h1>
                <h2 className='text-center pt-5 text-color-two'>MY BEST PROJECTS</h2>
                <h3 className='text-center gradient-text-one px-4 pb-3'>Designe and Functionality of Magic Manik</h3>
            </div>

            <div className='project-container'>

                {
                    projects.map(project =>
                        <div key={project._id}>
                            <div className='project'>
                                <a href="/"><img src={project.img1} alt="" /></a>
                                <p className='px-1'>{project.des1} And {project.des2}</p>
                                <button className='btn btn-primary ms-2 mb-2' onClick={() => handleDetails(project._id)}>Explore more</button>
                            </div>
                        </div>)
                }

            </div>
        </section>
    );
};

export default Projects;