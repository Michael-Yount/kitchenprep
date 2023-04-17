import React from 'react'
import "./styles.css"

function BootstrapRowCol({ children }) {
  return (
    <div className="row">
      <div className="col">
        {children}
      </div> 
    </div>
  );  
}

function Preps ({ preps }) {
  return (
    <div className='prep-pad'>
    {
    preps.length <= 0 ? <p>Add some preps</p> : preps.map((prep, index) => <p key={index}>{prep}</p>)
    }
    </div>
  );
}

function App() {
 const [prepText, setPrepText] = React.useState('');
 const [preps, setPreps] = React.useState([]);

 function handleChange(e) {
  setPrepText(e.target.value);
 }

 

 function submitPrep() {
  const newPreps = [...preps,prepText];
  setPreps(newPreps)
  console.log(prepText)
  setPrepText('');
 }

  return (
    <div className="container text-center">
        <h1>Kitchen Prep</h1>
          <BootstrapRowCol>

          </BootstrapRowCol>
          <BootstrapRowCol>
            <div className="input-group mb-3">
              <input 
              type="text" 
              className="form-control" placeholder="Enter prep item" aria-label="prep item" aria-describedby="button-prep"
              value={prepText}
              onChange={handleChange}
              />
              <button 
              className="btn btn-outline-secondary" type="button" 
              id="button-prep"
              onClick={submitPrep}
              >Add prep
              </button>
            </div>
          </BootstrapRowCol>
          <BootstrapRowCol >
            <Preps preps={preps}></Preps>
          </BootstrapRowCol>

       </div>   
    
  );
}


export default App;
