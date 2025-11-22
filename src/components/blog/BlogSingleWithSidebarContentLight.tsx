import { Link } from "react-router-dom";
import team1Thumb from "/assets/img/team/9.jpg";
import BlogPostComments from './BlogPostComments';
import BlogCommentForm from './BlogCommentForm';
import handleSmoothScroll from '../utilities/handleSmoothScroll';
import SocialShareV3 from '../social/SocialShareV3';
import SearchWidget from '../widgets/SearchWidget';
import CategoryWidget from '../widgets/CategoryWidget';
import GalleryWidget from '../widgets/GalleryWidget';
import ArchiveWidget from '../widgets/ArchiveWidget';
import FollowWidget from '../widgets/FollowWidget';
import TagsWidget from '../widgets/TagsWidget';
import RecentPostsWidgetLight from '../widgets/RecentPostsWidgetLight';
import { MEDIA_URL } from "../../api/strapi";

interface BlogContentChild {
    type: "text";
    text: string;
    bold?: boolean;
}

interface BlogContentBlock {
    type: "paragraph";
    children: BlogContentChild[];
}

interface BlogMedia {
    url: string;
    // Additional fields if needed
}

interface DataType {
    Blog_Id: number;
    BlogTitle: string;
    author: string;
    Date: string;
    BlogMedia?: BlogMedia;
    BlogContent: BlogContentBlock[];
}

interface BlogSingleProps {
    blogInfo?: DataType;
    totalBlogs?: number;
    sectionClass?: string;
    allBlogs?: DataType[];
}

const BlogSingleWithSidebarContentLight = ({ blogInfo, totalBlogs, sectionClass, allBlogs }: BlogSingleProps) => {
    if (!blogInfo) return null;

    const { Blog_Id, BlogTitle, author, Date, BlogMedia, BlogContent } = blogInfo;

    const currentId = Blog_Id;
    const previousId = currentId === 1 ? (totalBlogs ?? 1) : currentId - 1;
    const nextId = currentId === (totalBlogs ?? 1) ? 1 : currentId + 1;

    const previousBlog = allBlogs?.find(blog => blog.Blog_Id === previousId);
    const nextBlog = allBlogs?.find(blog => blog.Blog_Id === nextId);

    const getFirstTwoWords = (text?: string) =>
        text?.split(' ').slice(0, 2).join(' ') || "No Title";

    // Function to render rich blog content from API's structured blocks
    const renderBlogContent = (contentBlocks: BlogContentBlock[] = []) => {
        return contentBlocks.map((block, idx) => {
            if (block.type === "paragraph") {
                return (
                    <p key={idx}>
                        {block.children.map((child, i) => (
                            <span
                                key={i}
                                style={{ fontWeight: child.bold ? "bold" : "normal" }}
                            >
                                {child.text}
                            </span>
                        ))}
                    </p>
                );
            }
            // Extend here for other block types if any
            return null;
        });
    };

    return (
        <>
            <div className={`blog-area single full-blog right-sidebar full-blog ${sectionClass ?? ""}`}>
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">

                                {/* Blog Single Post */}
                                <div className="blog-style-one item">
                                    <div className="blog-item-box">
                                        <div className="thumb">
                                            <img
                                                src={BlogMedia ? `${MEDIA_URL}${BlogMedia.url}` : "/default-thumb.jpg"}
                                                width={1075}
                                                height={546}
                                                alt={BlogTitle}
                                            />
                                        </div>
                                        <div className="info">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link to="#"><i className="fas fa-user-circle" /> {author}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#"><i className="fas fa-calendar-alt"></i> {Date}</Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Render dynamic blog content */}
                                            {renderBlogContent(BlogContent)}

                                        </div>
                                    </div>
                                </div>

                                {/* Post Author */}
                                <div className="post-author">
                                    <div className="thumb">
                                        <img src={team1Thumb} alt="Author" />
                                    </div>
                                    <div className="info">
                                        <h4><Link to="#" onClick={handleSmoothScroll}>Md Sohag</Link></h4>
                                        <p>
                                            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend.
                                        </p>
                                    </div>
                                </div>

                                {/* Post Tags & Share */}
                                <div className="post-tags share">
                                    <div className="tags">
                                        <h4>Tags: </h4>
                                        <Link to="#" onClick={handleSmoothScroll}>Algorithm</Link>
                                        <Link to="#" onClick={handleSmoothScroll}>Data science</Link>
                                    </div>
                                    <div className="social">
                                        <h4>Share:</h4>
                                        <ul>
                                            <SocialShareV3 />
                                        </ul>
                                    </div>
                                </div>

                                {/* Post Pagination */}
                                <div className="post-pagi-area">
                                    <div className="post-previous">
                                        <Link to={`/blog-single-with-sidebar-light/${previousId}`}>
                                            <div className="icon"><i className="fas fa-angle-double-left"></i></div>
                                            <div className="nav-title"> Previous Post <h5>{getFirstTwoWords(previousBlog?.BlogTitle)}</h5></div>
                                        </Link>
                                    </div>
                                    <div className="post-next">
                                        <Link to={`/blog-single-with-sidebar-light/${nextId}`}>
                                            <div className="nav-title">Next Post <h5>{getFirstTwoWords(nextBlog?.BlogTitle)}</h5></div>
                                            <div className="icon"><i className="fas fa-angle-double-right"></i></div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Blog Comments */}
                                <div className="blog-comments">
                                    <div className="comments-area">
                                        <div className="comments-title">
                                            <h3>3 Comments On “{BlogTitle}”</h3>
                                            <BlogPostComments />
                                        </div>
                                        <div className="comments-form">
                                            <div className="title">
                                                <h3>Leave a comments</h3>
                                            </div>
                                            <BlogCommentForm />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Sidebar */}
                            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside>
                                    <SearchWidget />
                                    <RecentPostsWidgetLight />
                                    <CategoryWidget />
                                    <GalleryWidget />
                                    <ArchiveWidget />
                                    <FollowWidget />
                                    <TagsWidget />
                                </aside>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSingleWithSidebarContentLight;
