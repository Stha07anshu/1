import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // Get user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ padding: '20px' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>Hamro Market</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        {
                            user ? (
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user"></i> Welcome, {user.firstName}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/profile"><i className="fas fa-user"></i> Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/settings"><i className="fas fa-cog"></i> Settings</Link></li>
                                        <li><Link className="dropdown-item" to="/logout"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
                                    </ul>
                                </div>
                            ) : (
                                <>
                                    <Link to="/register" className="btn btn-outline-danger me-2" type="button">Register</Link>
                                    <Link to="/login" className="btn btn-outline-success" type="button">Login</Link>
                                </>
                            )
                        }
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
