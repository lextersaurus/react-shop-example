import './Cart.css'
import PropTypes from 'prop-types'

const Cart = ({cart, removeProduct, addProduct, deleteProduct, onClearCart}) => {

  return (
    <div className='cart'>
        {cart.map((each) => {
            return (
                <div key={each.id} className='cart-item'>
                    <p>{each.quantity}</p>
                    <p>{each.name}</p>
                    <p>{each.price} €</p>
                    <div>
                        <button type='button' onClick={() => removeProduct(each)}>-</button>
                        <button type='button' onClick={() => addProduct(each)}>+</button>
                        <button type='button' onClick={() => deleteProduct(each)}>Delete</button>
                    </div>
                </div>
            )
        })}
        <div className='cart-footer'>
            <p>Total price: {cart.reduce((acc, each) => acc+(each.quantity*each.price), 0).toFixed(2)}€</p>
            <button type='button' onClick={() => onClearCart()}> Clear cart</button>
        </div>
    </div>
  )
}

Cart.propTypes = {
    cart: PropTypes.array,
    removeProduct: PropTypes.func,
    addProduct: PropTypes.func,
    deleteProduct: PropTypes.func,
    onClearCart: PropTypes.func
}

export default Cart
