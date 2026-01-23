import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setBlogs(data))
    }, []);

    // console.log(blogs);

    return (
        <div>
            <h1 className='text-3xl'>Total Blogs: {blogs.length}</h1>
            <div className='all-blogs grid grid-cols-2 mt-3'>
                {
                blogs.map(blog => <Blog key={blog.id} handleBookmark={handleBookmark} blog={blog}></Blog>)
            }
            </div>
            
        </div>
    );
};

export default Blogs;