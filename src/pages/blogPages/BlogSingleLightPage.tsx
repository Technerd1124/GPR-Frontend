import { useParams } from "react-router-dom";
import BlogSingleContentLight from "../../components/blog/BlogSingleContentLight";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import BlogV3Data from "../../../src/assets/jsonData/blog/BlogV3Data.json"
import { Helmet } from "react-helmet-async";
import { BlogItem } from "../../types/cms";
import { useEffect, useState } from "react";
import { getBlog } from "../../api/strapi";


   
const BlogSingleLightPage = () => {
    const { id } = useParams();
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
    
    const data = blogs.find(portfolio => portfolio.Blog_id === parseInt(id || '0'));
    return (
        <>
            <Helmet>
                <title>GroPro Rise - Blog Single Light</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Blog Single' breadCrumb='blog-single-light' LightMode={true} />
                {data && <BlogSingleContentLight sectionClass='default-padding' blogInfo={data} totalBlogs={BlogV3Data.length} />}
            </LayoutV1Light>
        </>
    );
};

export default BlogSingleLightPage;