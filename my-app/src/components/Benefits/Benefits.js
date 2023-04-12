import React from 'react';
import './Benefits.css';

function Benefits() {
  return (
    <section className='row full-width benefits cards bottom'>         
        <div className='column card'>
            <div className='block-text'>
                <i className="fa-solid fa-moon"></i>
                <p><strong>Sleep quality</strong></p>
                <p>9 out of 10 users notice an improvement to their sleep quality.</p>
            </div>
        </div>
        <div className='column card'>
            <div className='block-text'>
                <i className="fa-solid fa-dove"></i>
                <p><strong>Take it easy</strong></p>
                <p>81% of users have seen a positive impact on their stress and anxiety.</p>
            </div>
        </div>
        <div className='column card'>
            <div className='block-text'>
                <i className="fa-solid fa-sun"></i>
                <p><strong>Good morning</strong></p>
                <p>87% of users report waking up well rested and ready to face the day.</p>
            </div>
        </div>
    </section>
  )
}

export default Benefits;