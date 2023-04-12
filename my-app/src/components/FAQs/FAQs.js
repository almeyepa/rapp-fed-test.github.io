import React from 'react';
import {FAQsData} from './FAQsData';
import FAQ from './FAQ';
import './FAQs.css';

const FAQs = () => {
  return (
    <section id='faqs' className='row full-width'>
      <div className='column broad'>
        <div className='block-text'>
          <h2>We’re here to answer your questions</h2>
        </div>
        <div className='faqs-wrapper'>
          {
            FAQsData.map(({id, question, answer}) => {
              return <FAQ key={id} question={question} answer={answer}/>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FAQs;