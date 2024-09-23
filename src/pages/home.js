import React from "react";
import Nav from "../components/navbar";
import Hero from "../components/hero";
import HeroGrid from "../components/heroGrid";
import HeroSection from "../components/heroSection";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

export const Home = () => {
    return (
        <>
            <Nav />
            <Hero />
            <HeroGrid />
            <HeroSection />
            <Testimonial />
            <Footer />
        </>
    )
}