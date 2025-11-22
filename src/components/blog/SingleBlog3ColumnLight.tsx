import { Link } from "react-router-dom";
import { MEDIA_URL } from "../../api/strapi";
import { BlogItem } from "../../types/cms";

interface Props {
    blog: BlogItem;
}

const SingleBlog3ColumnLight = ({ blog }: Props) => {
    // Get media URL if available
    const imageUrl = blog.BlogMedia?.url
        ? `${MEDIA_URL}${blog.BlogMedia.url}`
        : "/default-thumb.jpg"; // Use a fallback if needed

    return (
        <div className="home-blog-style-one">
            <div className="thumb">
                <Link to={`/blog-single-with-sidebar-light/${blog.Blog_Id}`}>
                    <img src={imageUrl} width={800} height={600} alt="Thumb" />
                </Link>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li>
                                <Link to="#">{blog.author}</Link>
                            </li>
                            <li>{blog.description}</li>
                        </ul>
                    </div>
                    <h2 className="post-title">
                        <Link to={`/blog-single-with-sidebar-light/${blog.Blog_Id}`}>
                            {blog.BlogTitle}
                        </Link>
                    </h2>
                    <Link to={`/blog-single-with-sidebar-light/${blog.Blog_Id}`} className="button-regular">
                        Continue Reading
                        <i className="fas fa-long-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog3ColumnLight;
