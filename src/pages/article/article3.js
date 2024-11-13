import ArticlePage from "../../components/post/postLayout";
import Nav from "../../components/navbar";
import Footer from "../../components/footer";
import { Title3, DataPost3, HeadParagraph3, Content3, Image3 } from "../../components/post/post3";

export const Article3 = (props) => {
    return (
        <>
            <Nav />
            <ArticlePage
                title={<Title3 />}
                data={<DataPost3 />}
                head={<HeadParagraph3 />}
                content={<Content3 />}
                image={<Image3 />}
            />
            <Footer />
        </>
    )
}