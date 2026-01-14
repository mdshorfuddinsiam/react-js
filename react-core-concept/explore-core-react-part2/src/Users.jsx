import { use } from "react"

// export default function Users(fetchUsers){
export default function Users({fetchUsers}){
    console.log(fetchUsers);

    const users = use(fetchUsers);
    // console.log(users);

    return (
        <div className="custom-card">
            <h3>Users: {users.length}</h3>
        </div>
    )
}