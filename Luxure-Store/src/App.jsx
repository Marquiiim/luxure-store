import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Presentation from "./components/presentation/Presentation"
import AboutUs from "./components/aboutus/AboutUs"
import Catalog from "./components/catalog/Catalog"
import Cart from "./components/catalog/cart/Cart"

function App() {
    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState(false)

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const openCart = () => {
        setShowCart(true)
    }

    const closeCart = () => {
        setShowCart(false)
    }

    return (
        <Router>
            <div>
                <Presentation />
                <AboutUs />
                <Catalog cart={cart} addToCart={addToCart} openCart={openCart} />

                {showCart && <Cart cart={cart} closeCart={closeCart} />}
            </div>
        </Router>
    )
}

export default App
