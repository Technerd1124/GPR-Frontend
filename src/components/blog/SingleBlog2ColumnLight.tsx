import { Link } from "react-router-dom";
import { BlogItem } from "../../types/cms";
import { useEffect, useState } from "react";
import { getBlog, MEDIA_URL } from "../../api/strapi";

const SingleBlog2ColumnLight = () => {
    const [blogs, setBlogs] = useState<BlogItem[]>([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await getBlog();
                setBlogs(res.data.Blog); // 
            } catch (err) {
                console.error("Error fetching blogs:", err);
            }
        };
        fetchBlogs();
    }, []);
    if (!blogs) return

    return (
        <>
            {blogs.map((blog) => (
                <div className="home-blog-style-one">
                    <div className="thumb">
                        <Link to={`/blog-single-light/${blog.Blog_id}`}>
                            <img src={`${MEDIA_URL}${blog.BlogMedia?.url}`} width={800} height={600} alt="Thumb" />
                        </Link>
                        <div className="info">
                            <div className="meta">
                                <ul>
                                    <li>
                                        <Link to="#">{blog.author}</Link>
                                    </li>
                                    <li>{blog.Date}</li>
                                </ul>
                            </div>
                            <h2 className="post-title">
                                <Link to={`/blog-single-light/${blog.Blog_id}}`}>{blog.BlogTitle}</Link>
                            </h2>
                            <Link to={`/blog-single-light/${blog.Blog_id}`} className="button-regular">
                                Continue Reading
                                <i className="fas fa-long-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>

            ))}
        </>
    );
};

export default SingleBlog2ColumnLight;