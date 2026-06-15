import React from 'react';
import StackContent from '../../utils/StackContent.json';
import './solutionstack.css';

function SolutionStack() {

  return (
    <section id='stackRef' className='solutionStackContainer'>
      <h2 className='stackTitle'>What I use</h2>
      {Array.isArray(StackContent) && StackContent.map((stack) => (
        <div key={stack.category} className='solutionFlexRow'>
          {Array.isArray(stack.items) && stack.items.map((item) => (
            <div key={item.id}>
              <div className='stackContainer'>
                <img className='stackImage' src={item.icon} alt={item.alt} />
                <p>{item.title}</p>
              </div>
            </div>
          ))}

        </div>
      ))}
    </section>
  );
}

export default SolutionStack;