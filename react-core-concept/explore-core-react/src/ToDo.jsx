// export default function ToDo(props){
//     console.log(props);
//     return (
//         <li> Task : {props.task}</li>
//     )
// }
// export default function ToDo({task}){
//     console.log(task);
//     return (
//         <li> Task : {task}</li>
//     )
// }

// export default function ToDo({task, isDone}){
//     if(isDone === true){
//         return <li>Done : {task}</li>
//     }
// }
// export default function ToDo({task, isDone}){
//     if(isDone === true){
//         return <li>Done : {task}</li>
//     }else{
//         return <li>Pending : {task}</li>
//     }
// }
export default function ToDo({task, isDone, time = 0}){
    if(isDone === true){
        return <li>Done : {task}, Duration : {time}</li>
    }
    return <li>Pending : {task}</li>
}