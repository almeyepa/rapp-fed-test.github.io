import React from 'react';
import { useState } from 'react';

function FAQ ({question, answer}) {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  return (
    <article className='faq card' onClick={() => setIsAnswerShowing(prev => !prev)}>
        <div className='block-question'>
            <h6>{question}</h6>
            <button className='btn btn-question'>
                {
                  isAnswerShowing ? <i className='fa-solid fa-minus'></i> : <i className='fa-solid fa-plus'></i>
                }
            </button>
        </div>
        {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ;