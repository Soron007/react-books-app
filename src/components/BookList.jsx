import React from 'react'
import '../App.css';
import { API_URL } from '../API';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from '../context/bookContext';

const BookList = () => {
    const [books, setBooks] = useState([]);

    const { favorites, addToFav, removeFromFav } = useAppContext();

    console.log(favorites);


    const favChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    }



    useEffect(() => {
        axios.get(API_URL).then((res) => {
            console.log(res.data);
            setBooks(res.data)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])



    return (
        <div className='book-list'>
            {books.map((book) => {
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

export default BookList
