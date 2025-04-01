import { createContext, useState, useContext, useEffect } from "react";

const ListContext = createContext()

export const useListContext = () => useContext(ListContext)

export const ListProvider = ({children}) => {
    const [wishlist, setWishList] = useState([])

    {/* Check if there is already list and parse it into JSON */}
    useEffect(() => {
      const storedList = localStorage.getItem("wishlist")
      
      if (storedList) setWishList(JSON.parse(storedList))
    }, [])
    
    {/* Update what is being stored in localStorage to string  */}
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }, [wishlist])

    const addToWishlist = (product) => {
        {/* Take what's already in wishlist, and add new item to list */}
        setWishList(prev => [...prev, product])
    }

    const removeFromWishlist = (productName) => {
        setWishList(prev => prev.filter(product => product.name !== productName))
    }

    const inWishlist = (productName) => {
        return wishlist.some(product => product.name === productName)
    }

    const value = {
        wishlist,
        addToWishlist,
        removeFromWishlist,
        inWishlist
    }

    return (
        <ListContext.Provider value={value}>
        {children}
        </ListContext.Provider> 
    )
}