import React from 'react'
import Navbar from './Navbar';
function Header() {
    return (
        <div id='main'>
            <Navbar />
            <div className ='name'>
                <h1><span>Launch Your App</span> With Confidence And Creativity</h1>
                <p className='details'>" Satu-satunya cara untuk melakukan pekerjaan hebat adalah
                dengan mencintai apa yang kamu lakukan." - Steve Jobs</p>
                <a href="#" className='cv-btn'>Download</a>
            </div>
        </div>
    )
}

export default Header
