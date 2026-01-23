import './App.css'
import Navbar from './components/Navbar/Navbar';
import Blogs from './components/Blogs/Blogs';
import { useState } from 'react';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);

  const handleBookmarks = (blog) => {
    // console.log('Handle bookmarks button');
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    // console.log(newBookmarks);
    setBookmarks(newBookmarks);
  }
  // console.log(bookmarks);

  const handleMarkAsRead = (reading_time, id) => {
    // console.log('Handle mark as read!!');
    // console.log(reading_time);
    setMarkAsRead(markAsRead + reading_time);
    // console.log(id);

    handleRemoveFromBookmarks(id);
  }

  const handleRemoveFromBookmarks = (id) => {
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMarks);
  }

  return (
    <>
      <Navbar></Navbar>
      
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container [w-30%]">
          <h1>Reading Time: {markAsRead}</h1>
          <h1>Bookmarked Count: {bookmarks.length}</h1>
          <div className="title">
            {
              bookmarks.map(bookmark => <h3 className='bg-red-600 p-2 m-2 text-white shadow' key={bookmark.id}>{bookmark.title}</h3>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
