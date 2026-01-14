import { use } from "react"
import Friend from "./Friend";

export default function Friends({frinedPromise}){
    // console.log(frinedPromise)
    const friends = use(frinedPromise);
    // console.log(friends);

    return (
        <div className="custom-card">
            <h3>Friends: {friends.length}</h3>
            {
                // friends.map(friend => console.log(friend))
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}