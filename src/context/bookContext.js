import { createContext, useContext } from "react";
import { useState } from "react";

const bookContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(bookContext);

    if (context === undefined) {
        throw new Error("Book Context must be within book context provider")
    } else {
        return context;
    }
}

const BookContextProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([]);


    const addToFav = (book) => {
        const oldFav = [...favorites];
        const newFav = oldFav.concat(book);
        setFavorites(newFav);
    }

    const removeFromFav = (id) => {
        const oldFav = [...favorites];
        const newFav = oldFav.filter((book) => book.id !== id);
        setFavorites(newFav);
    }

    return (
        <bookContext.Provider value={{

            favorites, addToFav, removeFromFav

        }}>
            {children}
        </bookContext.Provider>
    )
}

export default BookContextProvider;