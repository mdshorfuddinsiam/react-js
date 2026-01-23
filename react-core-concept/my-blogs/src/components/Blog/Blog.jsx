import React from 'react';

// const Blog = (props) => {
//     // console.log(props);
//     // console.log(props.blog);
//     const {blog} = props;
//     console.log(blog);
const Blog = ({ blog }) => {
    console.log(blog);

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={ blog.cover } />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{ blog.title }</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;