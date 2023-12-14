import { useState } from "react";

export default function Portfolio(){

    return (
      <div className='flex-container center-content flex-container-columns'>
        <div>
          <p>portfolio</p>
            {/* <p>{summary}</p>
              <a href={'[LinkgoHere]'} target="[AddPathHere]" rel="">
              View Project
              </a> */}
        </div>
      </div>
    );
  }

  //This will contain my projects. I will be passing an item out of an array which will be kept in another component.
  //This lets me change what is being passed into my cards.

  //This needs to use useState to ensure it keeps the project visable.


