import React from 'react';
import './DoubleParagraph.css';

function DoubleParagraph() {
  return (
    <section className='double-paragraph'>        
        <section id="plan" className="row reverse">
            <div className="column">
                <div className="block-text">
                    <h2>Lumi is designed for</h2>
                    <p>
                        <strong>Every parent who wants their baby to fall asleep, stay asleep, and wake up happy in the morning.</strong> Whether you’re struggling with sleep or simply making sure you’re doing what’s best for your family, we have you covered.
                    </p>
                    <button className='btn btn-text btn-secondary btn-large'>Get started</button>
                </div>
            </div>
            <div className='column'>
                <figure className='block-image'>
                    <img className="mobile" alt="how-it-works" src='Images/lumi-designed-for.jpg'/>
                    <img className="desktop" alt="how-it-works" src='Images/lumi-designed-for.jpg'/>
                </figure>
            </div>
        </section>
        <section className="row">
            <div className="column">
                <div className="block-text">
                    <h2>Our mission</h2>
                    <p>
                        <strong>We're on a mission to make it easy for every family to sleep better.</strong> We apply state-of-the-art technology to science-based sleep understanding so that we can make quality, credible sleep support accessible to everyone – because every baby and their family deserve better sleep!
                    </p>
                    <button className='btn btn-text btn-secondary btn-large'>I want better sleep</button>
                </div>
            </div>
            <div className='column'>
                <figure className='block-image'>
                    <img className="mobile" alt="how-it-works" src='Images/our-mission.jpg'/>
                    <img className="desktop" alt="how-it-works" src='Images/our-mission.jpg'/>
                </figure>
            </div>
        </section>
    </section>
  )
}

export default DoubleParagraph;