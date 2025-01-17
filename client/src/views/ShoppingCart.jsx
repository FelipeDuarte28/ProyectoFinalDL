import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import CardsShoppingCart from '../components/CardsShoppingCart';

const ShoppingCart = () => {

    const { shoppingCart } = useContext(DataContext);
    
    const totalItems = shoppingCart.map(ele => ele.qty).reduce((a, b) => a + b , 0);
    const totalPrice = shoppingCart.map(ele => ele.price * ele.qty).reduce((a, b) => a + b, 0);

    return (
        <div className='shoppingCart'>
            <div className='shoppingCart-cardsContainer'>
                {shoppingCart.map((ele) => {
                    return (
                        <CardsShoppingCart key={ele.id} data={ele} />
                    )
                })}
            </div>
            <div>
                <h3>Resumen de tu compra</h3>
                <div>
                    <p>Cantidad de productos: {totalItems}</p>
                    <p>Total a pagar: {totalPrice}</p>
                    <button>Pagar compra</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart