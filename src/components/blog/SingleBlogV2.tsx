import { Link } from "react-router-dom";
import { BlogItem } from "../../types/cms";
import { MEDIA_URL } from "../../api/strapi";
interface Props {
  blog: BlogItem;
}


// When CLicking on Blog URL the page will direct to the Blog different page with lall  Blog Contents 
// blog-2-column-light -- Name of the Components 
const SingleBlogV2: React.FC<Props> = ({ blog }) => {
  return (
    <div className="home-blog-two">
      <div className="thumb">
        <Link to={`/blog-single-with-sidebar/${blog.Blog_id}`}>
          {blog.BlogMedia && (
            <img
              src={`${MEDIA_URL}${blog.BlogMedia.url}`}
              alt={blog.BlogMedia.alternativeText || "Blog Image"}
              width={400}
              height={300}
            />
          )}
        </Link>

      </div>

      <div className="info">
        <div className="content">
          <div className="meta">
            <ul>
              <li>
                <Link to="#">{blog.author}</Link>
              </li>

            </ul>
          </div>
          <h3 className="post-title">
            <Link to={"/blog-2-column"}>
              {blog.BlogTitle}
            </Link>
          </h3>

          <Link
            to={'/blog-single-light'}
            className="button-regular"
          >
            Continue Reading <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>


    </div>
  );
};

export default SingleBlogV2;