import React from "react";
import Nav from "../components/navbar";
import HeadAbout from "../components/about/aboutHead";
import ContentAbout from "../components/about/contentAbout";
import Footer from "../components/footer";

export const About = () => {
    return (
        <>
            <Nav />
            <HeadAbout />
            <ContentAbout />
            <Footer />
        </>
    )
}