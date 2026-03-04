import { useEffect, useState } from 'react'
function Counter(){
let [count,changecount] = useState(0);
const increment =() =>{
    changecount(count+1)
}
const Decrease =() =>{
    changecount(count-1)
}
useEffect(() =>{
console.log("Hello")
},[count]);

    return(
        
        <>
    
        <h1>Counter App</h1>
         <p>{count}</p>
        <button onClick={increment} >Increment</button>
        <button onClick={Decrease}>Decrement</button>
        </>
    )
}
export default Counter