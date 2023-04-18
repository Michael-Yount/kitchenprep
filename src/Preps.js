import React from 'react';

function Preps ({ preps, index }) {

    function removePrep() {
        console.log('removed');
       // let temp = [...preps];
       // temp.slice(index, 1)
       // preps(temp);
     }

    return (
      <div className='prep-pad'>
      {
      preps.length <= 0 ? <p>Add some preps</p> : preps.map((prep, index) => <p key={index} onClick={removePrep}>{prep}</p>)
      }
      </div>
    );
  }

export default Preps;