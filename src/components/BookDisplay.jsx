import React from 'react';
import { useAppContext } from '../context/bookContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../API';

const BookDisplay = () => {

    const [books, setBooks] = useState([]);

    const { search, favorites, addToFav, removeFromFav } = useAppContext();


    useEffect(() => {
        axios.get(API_URL).then((res) => {
            console.log(res.data);
            setBooks(res.data)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])



    const favChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    }
    return (
        <div className='book-list'>
            {books.filter((book) => {

                if (search === '') {
                    return book;
                } else if (book.title.toLowerCase().includes(search.toLowerCase())) {
                    return book;
                }
            }).map((book) => {
                return <div key={book.id} className='book'>

                    <div><h4>{book.title}</h4></div>

                    <div><img src={book.image_url} alt="#" /></div>

                    <div>

                        {favChecker(book.id) ? <button onClick={() => removeFromFav(book.id)}>Remove from favorites</button> :
                            <button onClick={() => addToFav(book)}>Add to favorites</button>}
                    </div>

                </div>
            })}
        </div>
    )
}

export default BookDisplay
