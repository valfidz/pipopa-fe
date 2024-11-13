import ArticlePage from "../../components/post/postLayout";
import Nav from "../../components/navbar";
import Footer from "../../components/footer";
import { Title2, DataPost2, HeadParagraph2, Content2, Image2 } from "../../components/post/post2";

export const Article2 = (props) => {
    return (
        <>
            <Nav />
            <ArticlePage
                title={<Title2 />}
                data={<DataPost2 />}
                head={<HeadParagraph2 />}
                content={<Content2 />}
                image={<Image2 />}
            />
            <Footer />
        </>
    )
}