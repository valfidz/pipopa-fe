import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

export const PostContent = (props) => {
    const postSlug = props.postSlug;
    const be_site = process.env.REACT_APP_BE_URL;
    const [postDetail, setPostDetail] = useState({});
    const [imageName, setImageName] = useState('');

    const parseArrayData = (data) => {
        if (!data) return [];
        if (Array.isArray(data)) return data;
        if (typeof data === 'string') {
            try {
                const parsed = JSON.parse(data);
                return Array.isArray(parsed) ? parsed : data.split(',').map(item => item.trim());
            } catch (e) {
                return data.split(',').map(item => item.trim()).filter(item => item !== '');
            }
        }
        return [];
    };

    useEffect(() => {
        let isMounted = true;

        const fetchPostDetails = async () => {
            try {
                const response = await axios.get(`${be_site}/api/public/${postSlug}`);
        
                if (isMounted) {
                    const processedData = {
                        ...response.data.post,
                        tags: parseArrayData(response.data.post.tags),
                        keywords: parseArrayData(response.data.post.keywords)
                    }
                    setPostDetail(processedData);
                    setImageName(response.data.post.featured_image);
                }
            } catch (error) {
                if (isMounted) {
                    console.error("Error fetching post", error)
                }
            }
        }

        fetchPostDetails();

        return () => {
            isMounted = false;
        }
    }, [postSlug, be_site]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    };

    const sanitizedContent = (content) => {
        return DOMPurify.sanitize(content);
    }

    const capitalizeLetter = (string) => {
        if (!string) {
            return ''
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    const hasTags = postDetail.tags && postDetail.tags.length > 0;
    const hasKeywords = postDetail.keywords && postDetail.keywords.length > 0;

    return (
        <>
            <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 shadow-md">
                <main className="pt-8 pb-16">
                    {/* Featured Image Section */}
                    <div className="relative rounded-lg overflow-hidden mb-12">
                        <div className="h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 relative">
                            <img 
                                src={`${be_site}/api/image/${imageName}`}
                                alt="Featured post"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div 
                                className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent rounded-lg"
                            />
                        </div>
                        
                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                            <div className="max-w-3xl">
                                <span className="inline-flex px-3 py-1 text-sm font-medium text-white bg-teal-500 rounded-full mb-3">
                                    {capitalizeLetter(postDetail.category_name || 'Uncategorized')}
                                </span>
                                
                                <h1 className="text-lg sm:text-xl lg:text-3xl font-bold text-white mb-4 break-words leading-snug">
                                    {postDetail.title}
                                </h1>
                                
                                <div className="flex items-center">
                                    <img 
                                        src="/cropped_logo.png"
                                        alt="Author profile"
                                        className="h-8 w-8 sm:h-10 sm:w-10 rounded-full mr-3 object-cover border border-white/50" 
                                    />
                                    <div>
                                        <p className="text-white font-medium">
                                            {postDetail.author}
                                        </p>
                                        <p className="text-gray-300 text-xs sm:text-sm">
                                            {formatDate(postDetail.created_at)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Article Content */}
                    <article className="max-w-3xl mx-auto bg-white rounded-xl p-4 sm:p-8">
                        <div
                            dangerouslySetInnerHTML={{ 
                                __html: sanitizedContent(postDetail.content) 
                            }}
                            className="prose prose-sm sm:prose md:prose-lg lg:prose-xl max-w-none 
                                prose-headings:text-gray-900 
                                prose-headings:font-semibold
                                prose-headings:mb-2
                                prose-headings:my-2
                                prose-p:mt-2
                                prose-ul:list-disc 
                                prose-ul:pl-5
                                prose-ol:list-decimal 
                                prose-ol:pl-5
                                text-gray-800 
                                leading-tight
                                prose-p:my-2
                                prose-ul:my-2
                                prose-ol:my-2"
                        />

                        {/* Tags and Keywords Section */}
                        <div className="mt-16 sm:mt-24">
                            {/* Tags */}
                            {hasTags && (
                                <div className="mb-8">
                                    <div className="flex items-center gap-2 text-gray-900 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                                        </svg>
                                        <h3 className="font-semibold text-base sm:text-lg">Tags</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {postDetail.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                                        >
                                            {tag}
                                        </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Keywords */}
                            {hasKeywords && (
                                <div>
                                    <div className="flex items-center gap-2 text-gray-900 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                                        </svg>
                                        <h3 className="font-semibold text-base sm:text-lg">Keywords</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {postDetail.keywords.map((keyword, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                                        >
                                            {keyword}
                                        </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </article>
                </main>
            </div>

        </>
    );
};

export default PostContent;