import React from "react"
import troll from '../images/Troll Face.png'

export default function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <div className='left-nav'>
                    <img src={troll} alt='logo' className='logo' />
                    <h3>MEME Generator</h3>
                </div>
                <h4>React Course - Project 3</h4>
            </nav>
        </div>
    )
}