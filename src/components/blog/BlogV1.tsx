import BlogV1Data from '../../../src/assets/jsonData/blog/BlogV1Data.json';
import SingleBlogV1 from './SingleBlogV1';
import SplitText from "../animation/SplitText.jsx"
import { BlogItem } from '../../types/cms.js';
import { useEffect, useState } from 'react';
import { getBlog } from '../../api/strapi.js';

interface DataType {
    sectionClass?: string
}

interface DataType {
    sectionClass?: string;
}

  
const BlogV1 = ({ sectionClass }: DataType) => {
 
     const [blogs, setBlogs] = useState<BlogItem[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await getBlog();
                setBlogs(res.data.Blog); 
            } catch (err) {
                console.error("Error fetching blogs:", err);
            }
        };
        fetchBlogs();
    }, []);

        if (!blogs) return null;

    return (
        <>
            <div className={`blog-area home-blog blog-style-one-area default-padding bottom-less ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-3">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">News & Events</h4>
                                <h2 className="title split-text">
                                    <SplitText
                                        delay={100}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Latest Blog Posts
                                    </SplitText>
                                </h2>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {BlogV1Data.slice(0, 3).map(blog =>
                            <div className="col-lg-4 col-md-6 mb-30" key={blog.id}>
                                <SingleBlogV1 blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV1;