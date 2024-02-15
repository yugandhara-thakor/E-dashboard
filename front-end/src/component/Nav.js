import React from "react";
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/sighup')
    }

    return (
        <div>
            <img alt="logo" 
            className="logo"
 src="https://cdn.pixabay.com/photo/2014/04/02/10/47/red-304573_1280.png" />

            {auth ? <ul class="nav-ul">
                    <li><Link to="/">product</Link></li>
                    <li><Link to="/Add">Add product</Link></li>
                    <li><Link to="/profile">profile</Link></li>
                    <li><Link to="/update">update product</Link></li>
                    <li><Link onClick={logout} to="/sighup">logout({JSON.parse(auth).name})</Link></li>


                </ul>
                :
                <ul class="nav-ul nav-right">
                    <li> <Link to="/sighup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>

                </ul>
               }
        </div>
    )
}
export default Nav
