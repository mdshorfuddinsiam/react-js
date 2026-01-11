import './App.css'
import Letter from './Letter.jsx';
import Mobile from './Mobile.jsx';
import ToDo from './ToDo.jsx'
import Library from './Library.jsx'

function App() {

  // const time = 50;

  // const letters = ['A', 'B', 'C', 'D', 'E'];

  const mobiles = [
    {id: 1, brand:"Xiaomi", price:20000},
    {id: 2, brand:"Xiaomi", price:30000},
    {id: 3, brand:"Samsung", price:45000},
  ];

  const books = [
    {id: 1, name:"Book-1", price:200},
    {id: 2, name:"Book-2", price:300},
    {id: 3, name:"Book-3", price:450},
  ];

  return (
    <>
      <h1>React Core Concept</h1>

      <Library address="Poltan, Dhaka" books={books}></Library>

      {
        mobiles.map(mobile => <Mobile key={mobile.id} mobile={mobile}></Mobile>)
      }

      {/* {
        letters.map(letter => <Letter letter={letter}></Letter>)
      } */}
      
      {/* <ToDo task="Learn React" isDone={true} time={30}></ToDo>
      <ToDo 
        task="Learn React" 
        isDone={true} 
        time={time}>
      </ToDo>
      <ToDo task="Learn Vue" isDone={false}></ToDo>
      <ToDo task="Take a shower" isDone={true}></ToDo> */}
      
      {/* <Love></Love>
      <Person></Person>
      <Student></Student>
      <Student></Student>
      <Country name="Bangladesh" capital="Dhaka"></Country>
      <Country name="India" capital="Delhi"></Country>
      <Country name="Srilanka" capital="Colombo"></Country>
      <Skills></Skills>
      <Player name="Tamim" runs="15000"></Player>
      <Player name="Sakib" runs="14000"></Player> */}
    </>
  )
}

function Student(){
  return (
    <div className="wrapper">
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

function Skills(){
  return (
    <div style={{fontWeight: "bold", border: "5px solid black", padding: "10px", marginTop: "10px"}}>
      <p>Topic: </p>
    </div>
  )
}  

function Country(props){
  console.log(props);
  const countryStyle = {
    border: "5px solid yellow",
    color: "blue",
    backgroundColor: "white",
    marginTop: "1rem",
  }
  return (
    <div style={countryStyle}>
      <p>Name: {props.name}</p>
      <p>Capital: {props.capital}</p>
    </div>
  )
}

function Person(){
  let name = 'Siam';
  let age = 27;
  return (
    <p>I am a person: {name} {age}</p>
  )
}

function Love(){
  return (
    <h3>Pushpita</h3>
  )
}

function Sports(){
  return (
    <div>
      <h1>Cricket</h1>
      <p>Tamim Iqbal</p>
      <p>Sakib Al Hasan</p>
      <ul>
        <li>Country-1</li>
        <li>Country-2</li>
        <li>Country-3</li>
      </ul>
    </div>
  )
}


// function Player(props){
  // console.log(props);
// const {name, runs} = {name: 'Tamim', runs: '15000'}    // Destructuring
function Player({name, runs}){
  return ( 
    <div className='wrapper' style={{marginTop: '20px'}}>
      <p>Name : {name}</p>
      <p>Runs : {runs}</p>
    </div>
  )
}



export default App
