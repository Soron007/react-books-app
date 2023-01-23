import React from 'react'
import { useAppContext } from '../context/bookContext'

const Navbar = () => {

    const { search, setSearch } = useAppContext();

    return (
        <div className='navbar'>
            <div>
                <h1>All Books App</h1>
            </div>
            <div>Your Favourites</div>

            <div>
                <form onSubmit={(e) => e.preventDefault()} >
                    <input type="text"
                        className='input'
                        placeholder='Search Book...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />


                </form>
            </div>
        </div>
    )
}

export default Navbar
