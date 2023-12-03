import './App.css';
import React from 'react'
import Cols from './Cols'

function App() {
  return (
    //<React.Fragment>
    //  <h1>React fragment</h1> 
    //  <h1>React fragment</h1>      
   // </React.Fragment>
  <div>
   <h1>React fragment</h1> 
   <table>
    <tbody>
      <tr>
        <Cols />
      </tr>
    </tbody>
   </table>
        
   </div>
  );
}

export default App;
