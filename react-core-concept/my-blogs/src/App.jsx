import './App.css'
import Navbar from './components/Navbar/Navbar';
import Blogs from './components/Blogs/Blogs';
import { useState } from 'react';

function App() {
  const [bookmark, setBookmark] = useState([]);

  const handleBookmark = (blog) => {
    // console.log('Handle bookmark button');
    // console.log(blog);
    const newBookmark = [...bookmark, blog];
    // console.log(newBookmark);
    setBookmark(newBookmark);
  }
  // console.log(bookmark);

  return (
    <>
      <Navbar></Navbar>
      
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookmark={handleBookmark}></Blogs>
        </div>
        <div className="right-container [w-30%]">
          <h1>Reading Time: 0</h1>
          <h1>Bookmarked Count: 0</h1>
        </div>
      </div>
    </>
  )
}

export default App
