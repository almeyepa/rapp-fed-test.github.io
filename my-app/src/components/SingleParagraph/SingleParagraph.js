import React from 'react';
import './SingleParagraph.css';

function SingleParagraph() {
  return (    
    <section id='smart-sleep' className="row reverse">
        <div className="column">
            <div className="block-text">
                <h2>How it works?</h2>
                <h3>Lumi's A, B, Cs, to better Zzzzs</h3>
                <ol>
                    <li>
                        <strong>We coach.</strong> Our Pediatric sleep experts will take you step-by-step to sleep success
                    </li>
                    <li>
                        <strong>You log.</strong> Record your baby's sleeps directly within the app
                    </li>
                    <li>
                        <strong>We analyze.</strong> Daily and weekly sleep insight reports measure your baby’s progress
                    </li>
                </ol>
                <blockquote>
                    <p>Zzzzz your baby sleeps!</p>
                </blockquote>
                <button className='btn btn-text btn-secondary btn-large'>Get started</button>
            </div>
        </div>
        <div className='column'>
            <figure className='block-image'>
                <img className="mobile" alt="how-it-works" src='Images/how-it-works-mobile.jpg'/>
                <img className="desktop" alt="how-it-works" src='Images/how-it-works-desktop.jpg'/>
            </figure>
        </div>
    </section>
  )
}

export default SingleParagraph;