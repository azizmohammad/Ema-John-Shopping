import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContexts';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/Oders">Oders</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/About">About</Link>

                {user?.uid ?
                    <Link onClick={logOut} className="text-indigo-500">Log Out</Link>
                    :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/singup">Sing Up</Link>
                    </>
                }

                <Link>{user?.email}</Link>
            </div>
        </nav>
    );
};

export default Header;