import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { CoffeQuintalito } from "../components/structure_quintalito/CoffeQuintalito"
import { CartBuyProducts } from "../components/structure_quintalito/CartBuyProducts"
import { ViewProduct } from "../components/structure_quintalito/ViewProduct"

export const ComponenteBrowser = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<> <Link to='/quintalito-cafe'>Cafe Quintalito</Link> </>} />
                    <Route path="/quintalito-cafe" element={<CoffeQuintalito />} />
                    <Route path="/cart-buy-products" element={<CartBuyProducts />} />
                    <Route path="/view-product" element={<ViewProduct />} />
                </Routes>
            </BrowserRouter>  
        </>
    )
}
