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


// -------- Conditional Rendering (1,2) ------------
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
// export default function ToDo({task, isDone, time = 0}){
//     if(isDone === true){
//         return <li>Done : {task}, Duration : {time}</li>
//     }
//     return <li>Pending : {task}</li>
// }
// -------------------------------------------------

// -------- Conditional Rendering (3) (ternary) ------------
// condition ? true : false
// export default function ToDo({task, isDone, time = 0}){
//     // return isDone ? <li>Done: {task}, Duration : {time} </li> : <li>Pending: {task}</li>
//     return isDone 
//                  ? <li>Done: {task}, Duration : {time} </li> 
//                  : <li>Pending: {task}</li>
// }
// -------------------------------------------------
// -------- Conditional Rendering (3) (&&) ------------
// export default function ToDo({task, isDone, time = 0}){
//     return isDone && <li>Done: {task}, Duration : {time} </li>
// }
// -------------------------------------------------
// -------- Conditional Rendering (3) (||) ------------
// export default function ToDo({task, isDone, time = 0}){
//     return isDone || <li>Not Done: {task}</li>
// }
// -------------------------------------------------
// -------- Conditional Rendering (6) (use variable) ------------
// export default function ToDo({task, isDone, time}){
//     const displayTime = time ? time : 100;
//     let listItem;
//     if(isDone === true){
//         listItem = <li>Done: {task}, Time: {displayTime}</li>
//     }else{
//         listItem = <li>Pending: {task}</li>
//     }
//     return listItem;
// }
// -------------------------------------------------
// -------- Conditional Rendering (7)  ------------
// export default function ToDo({task, isDone, time}){
//    if(isDone){
//     //  return null;
//      return;
//    }
//    return <li>Not Done: {task}</li>
// }
// -------------------------------------------------

export default function ToDo({task, isDone, time}){
    // const displayTime = time ? time : 100;
    let listItem;
    if(isDone === true){
        // listItem = <li>Done: {task}, Time: {time ?? 100}</li>
        listItem = <li>Done: {task}, Time: {time ? time : 100}</li>
    }else{
        listItem = <li>Pending: {task}</li>
    }
    return listItem;
}