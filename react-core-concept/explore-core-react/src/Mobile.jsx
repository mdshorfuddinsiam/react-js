// export default function Mobile(props){
//     console.log(props);
//     console.log(props.mobile);
//     console.log(props.mobile.brand);
//     console.log('-----------');
//     return (
//         <div>
//             <h4>Brand: {props.mobile.brand}</h4>
//             <h5>Price: {props.mobile.price}</h5>
//         </div>
//     )
// }
export default function Mobile({mobile}){
    // console.log(mobile);
    // console.log(mobile.brand);
    // console.log('-----------');
    return (
        <div className="wrapper">
            <h4>Brand: {mobile.brand}</h4>
            <h5>Price: {mobile.price}</h5>
        </div>
    )
}