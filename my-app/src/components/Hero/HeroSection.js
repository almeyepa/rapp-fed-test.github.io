import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className='hero'>
            <div className='hero-container'>
                <div className='block-text'>
                    <h1>Your baby can be a super sleeper</h1>
                    <p>Lumi's app-bases sleep coaching and tracking tools will have your baby sleeping better in just 7 days</p>
                </div>
                <button className='btn btn-secondary btn-large'>Get started</button>
            </div>
            <div className='hero-container img'>
                <figure className='block-image'>
                    {<img src="Images/home-banner1-desktop.jpg" alt="Lumi hero banner" />}
                </figure>
            </div>
        </section>
    )
}

export default HeroSection;