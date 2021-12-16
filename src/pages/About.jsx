import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import "./About.css"
function About() {
    return (
        <div>
            <Navbar/>
            <section className="about_section">
                <h1>About</h1>
                <p>This application only develope to done an technical assignment.</p>
            </section>
        </div>
    )
}

export default About
