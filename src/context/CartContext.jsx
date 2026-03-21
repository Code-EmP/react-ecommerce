import { createContext, useState } from "react";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart(prevCart => {
            const existing = prevCart.find(item => item.id === product.id);
            if (existing) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prevCart, { ...product, qty: 1 }];
        });
    };

    const removeFromCart = (Id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== Id)
        );
    };

    const increaseQty = (Id) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === Id ? { ...item, qty: item.qty + 1 } : item
        ));
    };

    const decreaseQty = (Id) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === Id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
        ));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;



