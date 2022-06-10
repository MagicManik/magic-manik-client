import React from 'react';
import manikIslamMahi from '../../../assets/images/manik-islam-mahi.png';
import './Banner.css'

const Banner = () => {
    return (
        <section className='banner-section'>
            <div>
                <img src={manikIslamMahi} alt="Manik Islam Mahi" />
            </div>
            <div>
                <h4 className='text-color-two banner-text'>
                    Hello, I am <span className='gradient-text-one'>Manik Islam Mahi</span> and I am a MERN Stack Web Developer, Graphic Designer and SEO Guidance. I love to work with dedication, and I always try to get people's love with my work. If you think we can work together and do something great, then feel free contact me !
                </h4>
            </div>
            <div className='d-flex mx-5'>
                <div>
                    <h1 className='text-white'>
                        01
                    </h1>
                    <p className='text-color-one'>Year of Exprience</p>
                </div>

                <div>
                    <h1 className='text-white'>
                        12
                    </h1>
                    <p className='text-color-one'>
                        PROJECTS COMPLETED</p>
                </div>

                <div>
                    <h1 className='text-white'>
                        12
                    </h1>
                    <p className='text-color-one'>Year of Exprience</p>
                </div>

            </div>
            <div className='banner-line'>
            </div>
        </section>
    );
};

export default Banner;