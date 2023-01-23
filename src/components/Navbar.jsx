import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <h1>All Books App</h1>
            </div>
            <div>Your Favourites</div>

            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text"
                        placeholder='Search Book...'



                    />
                </form>
            </div>
        </div>
    )
}

export default Navbar
