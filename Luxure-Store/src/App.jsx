import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState } from 'react'

import Presentation from "./components/presentation/Presentation"
import AboutUs from "./components/aboutus/AboutUs"
import Catalog from "./components/catalog/Catalog"
import Cart from "./components/catalog/cart/Cart"

function App() {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, { ...item, quantity: 1 }])
    }

    const removeToCart = (index) => {
        setCart(prevCart => {
            const newCart = [...prevCart]
            newCart.splice(index, 1)
            return newCart
        })
    }

    const updateQuantity = (index, newQuantity) => {
        const updateCart = [...cart]
        updateCart[index].quantity = newQuantity
        setCart(updateCart)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Presentation />} />
                <Route path='/sobrenos' element={<AboutUs />} />
                <Route path='/catalogo' element={<Catalog cart={cart} addToCart={addToCart} />} />
                <Route path='/carrinho' element={<Cart cart={cart} removeToCart={removeToCart} updateQuantity={updateQuantity} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
