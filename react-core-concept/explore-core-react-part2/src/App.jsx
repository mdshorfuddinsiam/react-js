import './App.css'

function App() {

  function handleClick(){
    alert('Clicked');
  }
  const handleClick3 = () => {
    alert('Clicked 3');
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h1>Vite + React</h1>

      {/* <button onclick="handleClick()">Click Me</button> */}

      <button onClick={handleClick}>Click Me</button> 

      <button onClick={function handleClick2(){
        alert('Clicked 2');
      }}>Click Me 2</button>

      <button onClick={handleClick3}>Click Me 3</button>

      <button onClick={() => {
        alert('Clicked 4');
      }}>Click Me 4</button>

      <button onClick={() => handleAdd5(7)}>Click Me 5</button>

    </>
  )
}

export default App
