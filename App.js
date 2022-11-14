import { useState } from 'react'
import Employee from './Employee';

function App() {
  var [count, setCount] = useState(0)

  const AddCount = () => {
    setCount(count + 1)
  }
  let emp = [{ name: 'muzammil', age: 21 }, { name: 'bill gates', age: 21 }, { name: 'jeff bazoz', age: 21 }
  ]
  return (
    <div className="App">

      <button onClick={AddCount}>Add</button>
      {
        emp.map((obj,index) => 
          
            <Employee key={index} {...obj} />
          
        )
      }
    </div>
  );
}

export default App;

