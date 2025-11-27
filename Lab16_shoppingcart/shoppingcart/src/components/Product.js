import React from 'react';
import '../App.css'
import apple from '../Images/apple.png'
import banana from '../Images/banana.png'
import grapes from '../Images/grapes.png'

const products = [
    {id: 1, name: 'Apple', price: 1, was: 2, image: apple},
    {id: 2, name: 'Banana', price: 2, was: 3, image: banana},
    {id: 3, name: 'Grapes', price: 3, was: 4, image: grapes}
]

const ProductList = ({addToCart}) => {
    return (
        <>  
            <h2 className='producttitle'>Product</h2>
            <section className='cardcontainer'>
                {
                    products.map(
                        (product)=>(
                            <div key={product.id} className='card'>
                                <img src={product.image} alt={product.name}/>
                                <p className='productname'>
                                    {product.name}
                                    <s>{product.was}/lb</s>
                                    <span>${product.price}</span>
                                </p>
                                <button className='btn_addcart' onClick={()=>addToCart(product)} >
                                    Add to Cart
                                </button>
                            </div>
                        )
                    )
                }
            </section>
        </>
    )
}

export default ProductList;