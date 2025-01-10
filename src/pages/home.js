import React from "react";
import Nav from "../components/navbar";
import Hero from "../components/home/hero";
import HeroGrid from "../components/home/heroGrid";
import HeroSection from "../components/home/heroSection";
import Testimonial from "../components/home/testimonial";
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