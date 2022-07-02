import React from "react"
import pic from "../image/passport.jpg"
import email_logo from "../image/email.jpg"
import '../index.css';




export default function Info() {
    return (
        <div className = "container">
            <nav className="header">
                <img src = {pic} className="pass" alt="this is my profile picture" />
            </nav>
            <main>
                <h3 className = "name">Rilwan Abimbola</h3>
                <h5 className = "role">Frontend Developer</h5>
                <h6 className = "web">www.codegee.com</h6>
                <button className= "email"> <img src = {email_logo} width = "12" height = "10"/> Email</button>
            </main>
        </div>
    )
}
