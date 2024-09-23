import React from "react";
import Nav from "../components/navbar";
import HeadAbout from "../components/aboutHead";
import ContentAbout from "../components/contentAbout";
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