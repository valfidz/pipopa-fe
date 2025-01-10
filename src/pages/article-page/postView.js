import React from "react";
import Nav from "../../components/navbar";
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";
import { PostContent } from "../../components/post/postContent";

export const PostView = () => {
    const { slug } = useParams();
    return (
        <>
            <Nav />
            <PostContent postSlug={slug} />
            <Footer />
        </>
    )
}