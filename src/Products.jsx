import React from 'react'
import image from './assets/buds.jpeg'
import './Products.css' 
function Products(props){
    

    return(
    
        <div class="cart">
        <img  class="image"src={props.picture} />
        <h3>{props.title}</h3>
        <p>{props.brand}</p>
        <h4>{props.rate}</h4>
        <button>Cart</button>
        </div>
    
        
    )
}
export default Products