import React from 'react'
import { useAppContext } from '../context/bookContext';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const { search, setSearch } = useAppContext();

    return (
        <div className='navbar'>
            <div>
                <Link to={'/'}><h1>All Books App</h1></Link>
            </div>
            <Link to={'/favorites'}> <div>Your Favourites</div></Link>

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
