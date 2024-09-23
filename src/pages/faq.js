import React from "react";
import Nav from "../components/navbar";
import FaqHead from "../components/faqHead";
import FAQComponent from "../components/faqContent";
import Footer from "../components/footer";

export const Faq = () => {
    return (
        <>
            <Nav />
            <FaqHead />
            <FAQComponent />
            <Footer />
        </>
    )
}