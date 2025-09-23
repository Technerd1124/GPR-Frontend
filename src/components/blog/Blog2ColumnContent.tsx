import BlogV3Data from "../../../src/assets/jsonData/blog/BlogV3Data.json";
import SingleBlog2Column from './SingleBlog2Column';
import { useEffect, useState } from 'react';
import Pagination from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogItem } from "../../types/cms";
import { getBlog } from "../../api/strapi";

interface DataType {
    sectionClass?: string
}

const Blog2ColumnContent = ({ sectionClass }: DataType) => {

    // Pagination 
    const navigate = useNavigate();
    const { page } = useParams<{ page?: string }>();

    // Set initial page from URL
    const currentPageNumber = Number(page) || 1;
    const [currentPage, setCurrentPage] = useState(currentPageNumber);
    const [itemsPerPage] = useState(4);

    useEffect(() => {
        setCurrentPage(currentPageNumber);
    }, [currentPageNumber]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogData = BlogV3Data.slice(startIndex, endIndex);

    const handlePageClick = (data: any) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);

        // Update the URL dynamically
        navigate(`/blog-2-column?page=${selectedPage}`);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

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

    const totalPages = Math.ceil(BlogV3Data.length / itemsPerPage);
    return (
        <>
            <div className={`blog-area blog-grid-colum ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        {blogs.slice(0, 2).map((blog) => (
                            <div className="col-lg-6 mb-50" key={blog.Blog_id}>
                                <SingleBlog2Column  />
                            </div>

                        ))}


                    </div>

                    {/* Pagination */}
                    <div className="row">
                        <div className="col-md-12 pagi-area text-center">
                            <Pagination
                                previousLabel={currentPage === 1 ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-left'></i>}
                                nextLabel={currentPage === totalPages ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-right'></i>}
                                breakLabel={'...'}
                                pageCount={Math.ceil(BlogV3Data.length / itemsPerPage)}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
                                containerClassName={'pagination text-center'}
                                activeClassName={'active'}
                                pageClassName={'page-item'}
                                pageLinkClassName={'page-link'}
                                previousLinkClassName={'page-link'}
                                nextLinkClassName={'page-link'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog2ColumnContent;