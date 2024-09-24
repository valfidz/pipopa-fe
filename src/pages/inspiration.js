import React from "react";
import Nav from "../components/navbar";
import InspirationHead from "../components/inspirationHeader";
import ContentInspiration from "../components/inspirationContent";
import Footer from "../components/footer";

export const Inspirations = () => {
    return (
        <>
            <Nav />
            <InspirationHead />
            <ContentInspiration />
            <Footer />
        </>
    )
}