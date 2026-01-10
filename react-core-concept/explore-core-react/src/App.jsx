import './App.css'

function App() {
  return (
    <>
      <h1>React Core Concept</h1>
      <Love></Love>
      <Person></Person>
      <Student></Student>
      <Student></Student>
      <Country name="Bangladesh" capital="Dhaka"></Country>
      <Country name="India" capital="Delhi"></Country>
      <Country name="Srilanka" capital="Colombo"></Country>
      <Skills></Skills>
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





export default App
