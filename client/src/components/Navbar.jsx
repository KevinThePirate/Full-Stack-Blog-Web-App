import React from 'react'
import Logo from "../img/logo.jpg"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo"><img src={Logo} /></div>
                <div className="links">
                    <Link className="link" to="/?cat=art"><h6>Art</h6></Link>
                    <Link className="link" to="/?cat=tech"><h6>Tech</h6></Link>
                    <Link className="link" to="/?cat=science"><h6>Science</h6></Link>
                    <span>Username Here</span>
                    <span>Log Out</span>
                    <span>
                        <Link className="write" to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
