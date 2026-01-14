import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users'
import './App.css'
import { Suspense } from 'react';
import Friends from './Friends';
import Posts from './Posts';
import Players from './Players';
import Count from './Count';
import Toggle from './Toggle';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//                    .then(res => res.json());

// const fetchFriends = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json()
// }

// const fetchPosts = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }

function App() {
  
  // function handleClick(){
  //   alert('Clicked');
  // }
  // const handleClick3 = () => {
  //   alert('Clicked 3');
  // }

  // const handleAdd5 = (num) => {
  //   const newNum = num + 5;
  //   alert(newNum);
  // }

  // const frinedPromise = fetchFriends();
  // const postsPromise = fetchPosts();

  return (
    <>
      {/* <h3>Vite + React</h3> */}

      {/* ------- Counter App -------- */}
      <Count></Count>
      {/* ---------------------------- */}

      <Toggle></Toggle>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming...</h3>}>
        <Friends frinedPromise={frinedPromise}></Friends>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Post will be showing ...</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h2>Players Loading ...</h2>}>
        <Players></Players>
      </Suspense> */}

      {/* <Batsman></Batsman>
      <Counter></Counter> */}

      {/* <button onclick="handleClick()">Click Me</button> */}

      {/* <button onClick={handleClick}>Click Me</button> 

      <button onClick={function handleClick2(){
        alert('Clicked 2');
      }}>Click Me 2</button>

      <button onClick={handleClick3}>Click Me 3</button>

      <button onClick={() => {
        alert('Clicked 4');
      }}>Click Me 4</button>

      <button onClick={() => handleAdd5(7)}>Click Me 5</button> */}

    </>
  )
}

export default App
