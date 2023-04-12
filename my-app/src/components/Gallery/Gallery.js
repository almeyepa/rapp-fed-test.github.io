import React from 'react';
import './Gallery.css';

function Gallery() {
  return (
    <section id='gallery' className="row background-color">
        <div className='column'>
            <figure className='block-image'>
                <img className="mobile" alt="gallery Lumi" src='Images/gallery-mobile.webp'/>
                <img className="desktop" alt="gallery Lumi" src='Images/gallery-desktop.webp'/>
            </figure>
        </div>
    </section>
  )
}

export default Gallery;