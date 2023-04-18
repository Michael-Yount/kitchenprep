import React from 'react';
//import  from './App';

function Preps ({ preps }) {
    return (
      <div className='prep-pad'>
      {
      preps.length <= 0 ? <p>Add some preps</p> : preps.map((prep, index) => <p key={index}>{prep}</p>)
      }
      </div>
    );
  }

export default Preps;