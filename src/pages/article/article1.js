import ArticlePage from "../../components/post/postLayout";
import Nav from "../../components/navbar";
import Footer from "../../components/footer";
import { Title1, DataPost1, HeadParagraph1, Content1, Image1 } from "../../components/post/post1";

export const Article1 = (props) => {
    return (
        <>
            <Nav />
            <ArticlePage
                title={<Title1 />}
                data={<DataPost1 />}
                head={<HeadParagraph1 />}
                content={<Content1 />}
                image={<Image1 />}
            />
            <Footer />
        </>
    )
}