import React from 'react';
import tools from '../../../assets/images/tools-hunter.png';
import study from '../../../assets/images/study-hacks-corner.png';
import fruits from '../../../assets/images/fresh-fruits.png';
import shoes from '../../../assets/images/shoes-mania.png';
import manik from '../../../assets/images/magic-manik.png';
import gadget from '../../../assets/images/gadget-hero.png';
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
                                <a href="/"><img src={tools} alt="" /></a>
                                <p className='px-1'>This is a compact Warehouse Management application. And This application provides different types of storing packages of fruits according to clients' demands.</p>
                                <button onClick={() => handleDetails(project._id)}>Explore more</button>
                            </div>
                        </div>)
                }




                {/* <div>
                    <div className='project'>
                        <a href="/"><img src={study} alt="" /></a>
                        <p className='px-1'>This is the website of a teacher who teaches various subjects to his students online. And  On this website, students can enroll in various subjects of their choice</p>
                        <button onClick={() => handleDetails()}>Explore More</button>
                    </div>
                </div> */}


                {/* <div>
                    <div className='project'>
                        <a href="/"><img src={tools} alt="" /></a>
                        <p className='px-1'>This is a compact Warehouse Management application. And This application provides different types of storing packages of fruits according to clients' demands.</p>
                        <button onClick={() => handleDetails(2)}>Explore More</button>
                    </div>
                </div>


                <div>
                    <div className='project'>
                        <a href="/"><img src={fruits} alt="" /></a>
                        <p className='px-1'>This is a compact Warehouse Management application. And This application provides different types of storing packages of fruits according to clients' demands.</p>
                        <button onClick={() => handleDetails(3)}>Explore More</button>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={shoes} alt="" /></a>
                        <p className='px-1'>This is a Millimastic design and fully responsive shoes e-commerce web application. And In this project I'am using project related funny review without copy any single text.</p>
                        <button onClick={() => handleDetails(4)}>Explore More</button>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={manik} alt="" /></a>
                        <p className='px-1'>This is a t-Shirt e-commerce web application.  </p>
                        <button onClick={() => handleDetails(5)}>Explore More</button>
                    </div>

                </div>
                <div>
                    <div className='project'>
                        <a href="/"><img src={gadget} alt="" /></a>
                        <p className='px-1'>This is a gadget e-commerce web application. Here users can randomly select his/her lucky product. In this project, I'm using Neumorphism effect and I'am try to handle designe</p>
                        <button onClick={() => handleDetails(6)}>Explore More</button>
                    </div>
                </div> */}


            </div>
        </section>
    );
};

export default Projects;