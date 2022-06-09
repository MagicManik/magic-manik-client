import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className='contact-section'>
            <div>
                <h4>Reach Me</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum a neque.</p>
                <p>Dhaka, Bangladesh</p>
                <p>Kafrul 1206</p>
                <p>+8801682440404</p>
                <p>contact@magicmanik.com</p>
            </div>
            <div>
                <form className='contact-form'>
                    <input type="text" name="" id="" placeholder='Enter your name' />
                    <input type="email" name="" id="" placeholder='Enter your email address' />
                    <input type="text" name="" id="" placeholder='Enter the discussion title' />
                    <textarea name="" id="" cols="50" rows="5" placeholder='Write your message'></textarea>
                </form>
            </div>


        </section>
    );
};

export default Contact;