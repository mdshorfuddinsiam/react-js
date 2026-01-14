import { use } from "react"

export default function Friend({frinedPromise}){
    // console.log(frinedPromise)
    const friends = use(frinedPromise);
    return (
        <div className="custom-card">
            <h3>Friends: {friends.length}</h3>
        </div>
    )
}