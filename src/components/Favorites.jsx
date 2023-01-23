import React from 'react';
import '../App.css';
import { useAppContext } from '../context/bookContext';

const Favorites = () => {
    const { search, favorites, addToFav, removeFromFav } = useAppContext();

    const favChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    }


    return (

        <div className='favorites'>

            {favorites.length > 0 ? favorites.filter((fav) => {

                if (search === '') {
                    return fav;
                } else if (fav.title.toLowerCase().includes(search.toLowerCase())) {
                    return fav;
                }
            }).map((fav) => (
                <div key={fav.id} className='book'>

                    <div><h4>{fav.title}</h4></div>

                    <div><img src={fav.image_url} alt="#" /></div>

                    <div>

                        {favChecker(fav.id) ? <button onClick={() => removeFromFav(fav.id)}>Remove from favorites</button> :
                            <button onClick={() => addToFav(fav)}>Add to favorites</button>}
                    </div>

                </div>
            )) : <h1>No Books added to Favorites</h1>}
        </div>
    )
}

export default Favorites
