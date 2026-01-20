import './App.css'
import { add, divide as div, divide, mul, sub } from './utils/math/math'

function App() {
  
  const sum = add(2, 5);
  // console.log(sum);
  
  const minus = sub(10, 5); 
  // console.log(minus);

  const multi = mul(7, 9);
  // console.log(multi);

  const divide = 15/3;
  // console.log(divide);
  const division = div(6, 2);
  // console.log(division);
  
  return (
    <>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
