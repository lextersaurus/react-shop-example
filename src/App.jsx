import { useState } from 'react'
import './App.css'
import products from './assets/product.json'
import ProductList from './components/ProductList/ProductList'
import Cart from './components/Cart/Cart'

function App() {
  const [cart, setCart] = useState([])

  const handleCart = (product) => {
    const productId = cart.findIndex(item => item.name === product.name)
    
    if(productId !== -1) {
      const updateCart = [...cart]
      updateCart[productId].quantity++
      setCart(updateCart)
    } else {
      setCart([...cart, {...product, quantity: 1}])
    }
  }

  const removeProduct = (product) => {
    const productId = cart.findIndex(item => item.name === product.name)
    const updateCart= [...cart]
    if(updateCart[productId].quantity === 1) {
      setCart(updateCart.splice(productId, 1))
      setCart(updateCart)
    } else {
      updateCart[productId].quantity--
      setCart(updateCart)
    }
  }

  const deleteProduct = (product) => {
    const productId = cart.findIndex(item => item.name === product.name)
    const updateCart = [...cart]
    updateCart.splice(productId, 1)
    setCart(updateCart)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <>
      {console.log(cart)}
      <ProductList products={products} handleCart={handleCart}/>
      <Cart cart={cart} removeProduct={removeProduct} addProduct={handleCart} deleteProduct={deleteProduct} onClearCart={clearCart}/>
    </>
  )
}

export default App
