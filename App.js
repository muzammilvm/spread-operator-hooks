import { useState } from 'react'
import Counter from './Counter';


function App() {
  const [state,setState]=useState(false)
  return (
    <div className="App">

      <button onClick={()=>{setState(!state)}}>Show/hide</button>

      {(state)? <Counter/>:null}
  
      
    </div>
  );
}

export default App;

