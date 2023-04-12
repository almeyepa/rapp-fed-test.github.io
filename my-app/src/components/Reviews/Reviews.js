import React from 'react';
import './Reviews.css';

function Reviews() {
  return (
    <section className='reviews-section'>
        <section id='reviews' className="row full-width background-color top">
            <div className='column tight'>
                <div className='block-text'>
                    <h2>Most positively reviewed app</h2><p>
                        <strong>From 56 reviews</strong>
                    </p>
                    <div className='icons'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                </div>
            </div>
        </section>        
        <section className="row full-width reviews background-color bottom cards">
            <div className='column card'>
                <div className='block-text'>
                    <div className='icons'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <p><strong>Life changing!</strong></p>
                    <p>I've had two babies before, so I thought I had a pretty good grip on sleep training. But boy was I wrong! When my daughter was born...</p>
                    <p className="name">Lulumommy</p>
                </div>
            </div>
            <div className='column card'>
                <div className='block-text'>
                    <div className='icons'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <p><strong>Fixer of early risings</strong></p>
                    <p>My son has always been an early waker and I always though he'd grow out of it, but after months of early rising I started to...</p>
                    <p className="name">Halle</p>
                </div>
            </div>
            <div className='column card'>
                <div className='block-text'>
                    <div className='icons'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <p><strong>Great content</strong></p>
                    <p>Not only is this app a lifesaver in tracking and getting my baby on a good sleep schedule, the content library is a fantastic tool...</p>
                    <p className='name'>Malia</p>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Reviews;