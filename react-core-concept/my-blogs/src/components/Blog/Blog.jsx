import React from 'react';
import { FaBookmark } from "react-icons/fa";

// const Blog = (props) => {
//     // console.log(props);
//     // console.log(props.blog);
//     const {blog} = props;
//     console.log(blog);
const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
    // console.log(blog, handleBookmarks);
    // console.log(blog.hashtags);
    // console.log(handleBookmarks);

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img src={ blog.cover } />
                </figure>
                <div className="card-body">
                    <div className="author flex justify-around items-center">
                        <h3>{blog.author}</h3>
                        <img className='w-16' src={blog.author_img} alt="" />
                        <button onClick={() => handleBookmarks(blog)}>
                            <FaBookmark size={25} />
                        </button>
                    </div>
                    <h2 className="card-title">{ blog.title }</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="flex">
                        {
                            blog.hashtags.map((hashtag, index) => <p key={index}>{hashtag}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => handleMarkAsRead(blog.reading_time, blog.id)}>Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;