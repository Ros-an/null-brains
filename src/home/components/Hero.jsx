import React from 'react'
import {Link} from "react-router-dom";
import "./Hero.css";
function Hero() {
    return (
        <section className="hero">
            <div className="hero__intro">
                <h1>Start Crafting Your</h1>
                <h1>Next Great Idea</h1>
            </div>
            <div  className="hero__intro-in-detail">
            <p>Simplifying the creation of landing pages, blog pages,</p>
            <p>application pages and so much more!</p>
            </div>
            <div className="hero--purchase-btn">
                <button>Purchase Now</button>
                <span>only $15/mo</span>
            </div>
            <Link to="#">Learn More</Link>
        </section>
    )
}

export default Hero
