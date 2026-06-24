import React from 'react';
import StackContent from '../../utils/StackContent.json';
import './solutionstack.css';
import topperLogo from '../../assets/img/logoSVG.svg'

export default function SolutionStack() {

  return (
    <section id='stackRef' className='solutionStackContainer'>
      <div className='stackHeader'>
        <img src={topperLogo} alt="logo" className='topperLogo'/>
        <h2 className='stackTitle'>My ToolKit</h2>
      </div>
      {Array.isArray(StackContent) && StackContent.map((stack) => (
        <div key={stack.category} className='solutionFlexRow'>
          {Array.isArray(stack.items) && stack.items.map((item) => (
            <div key={item.id}>
              <div className='stackContainer'>
                <img className='stackImage' src={item.icon} alt={item.alt} />
                <p className='SolutionText'>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
