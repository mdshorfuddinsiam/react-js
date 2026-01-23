import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Blogs from './components/Blogs/Blogs';

function App() {
  const [blogs, setBlogs] = useState([]);

  useState(() => {
    fetch('blogs.json')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setBlogs(data))
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Blogs blogs={blogs}></Blogs>
    </>
  )
}

export default App
