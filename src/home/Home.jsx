import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LeadingCompany from './components/LeadingCompany';
import Perform from "./components/Perform";
import Features from "./components/Features";
import Team from "./components/Team";
import ProjectBlog from './components/ProjectBlog';

function Home() {
    return (
        <>
        <div className="home">
            <Navbar />
            <Hero />
            <LeadingCompany />
            <Perform />
            <Features />
            <Team />
        </div>
            <ProjectBlog />
            </>
    )
}

export default Home;
