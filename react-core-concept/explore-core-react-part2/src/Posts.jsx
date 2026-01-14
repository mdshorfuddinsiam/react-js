import { use } from "react"
import Post from './Post'

export default function Posts({postsPromise}){
    // console.log(postsPromise);
    const posts = use(postsPromise);

    return (
        <div className="custom-card">
            <h2>All Posts ({posts.length})</h2>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}