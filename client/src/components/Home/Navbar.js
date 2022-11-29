import React, { useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { UserContext } from '../../context/userContext';

export default function Navbar() {
    const location = useLocation();
    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        // signOut(auth).then(() => {
        //     alert("Logout Successfully");
        //     navigate('/');
        // }).catch((err) => {
        //     console.error(err);
        //     alert(err.message);
        // });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <Link to='/' className='h2 text-light nav-link'>Sales Management</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ">

                    <li className="nav-item" style={{ margin: "6px" }}>
                        <Link className={`nav-link ${location.pathname === '/manager' ? 'active' : ''}`} to='/manager'>Manager</Link>
                    </li>


                    < li className="nav-item" style={{ margin: "6px" }}>
                        <Link className={`nav-link ${location.pathname === '/customer' ? 'active' : ''}`} to="/customer">Customer</Link>
                    </li>


                    <li className="nav-item" style={{ margin: "6px" }} >
                        <Link className={`nav-link ${location.pathname === '/salesperson' ? 'active' : ''}`} to="/salesperson" >Sales person</Link>
                    </li>


                </ul>
                    <li className="nav-item" style={{ margin: "6px" }}>
                        <Link className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`} to="/login">Login</Link>
                    </li>

                    <li className="nav-item" style={{ margin: "6px" }}>
                        <Link className={`nav-link ${location.pathname === '/signup' ? 'active' : ''}`} to="/signup">Signup</Link>
                    </li>
               
            </div>
        </nav >
    )
}

