import { Link } from "react-router-dom";
import { MEDIA_URL } from "../../api/strapi";


import { BlogItem } from "../../types/cms";

interface Props {
    blog: BlogItem;   // ✅ direct type reference
}

const SingleBlog3ColumnLight = ({ blog }: { blog: BlogItem }) => {
    // const { id, thumb, title2, date, author } = blog

    return (
        <>
            <div className="home-blog-style-one">
                <div className="thumb">
                    <Link to={`/blog-single-with-sidebar-light/${blog.Blog_id}`}>
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
                            <Link to={`/blog-single-with-sidebar-light/${blog.Blog_id}`}>{blog.BlogTitle}</Link>
                        </h2>
                        <Link to={`/blog-single-with-sidebar-light/${blog.Blog_id}`} className="button-regular">
                            Continue Reading
                            <i className="fas fa-long-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog3ColumnLight;