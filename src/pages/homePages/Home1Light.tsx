import { Helmet } from "react-helmet-async";
import AboutV6 from "../../components/about/AboutV6";
import BannerV8 from "../../components/banner/BannerV8";
import BlogV2 from "../../components/blog/BlogV2";
import ClientsV1 from "../../components/clients/ClientsV1";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";
import ProjectV1Light from "../../components/project/ProjectV1Light";
import ServicesV1 from "../../components/services/ServicesV1";
import TeamV1 from "../../components/team/TeamV1";
import TestimonialV3 from "../../components/testimonial/TestimonialV3";
import WhyChooseV1 from "../../components/whyChoose/WhyChooseV1";
import ExpertiseV1 from "../../components/expertise/ExpertiseV1";
import ProjectIdeaV1 from "../../components/project/ProjectIdeaV1";

const Home1Light = () => {
    return (
        <>
            <Helmet>
                <title> Grow Pro Rise</title>
            </Helmet>
            <div className="smooth-scroll-container">
                <HeaderV1 />
                <BannerV8 />
                <AboutV6 lightMode={true} />
                <ServicesV1 sectionClass='bg-gray default-padding' hasTitle={true} />
                <ProjectV1Light />
                {/* <TeamV1 hasTitle={true} /> */}
                <ClientsV1 sectionClass='bg-dark' />
                <TestimonialV3 sectionClass='bg-gray' />
                <div className="panel overflow-hidden">
                    <WhyChooseV1 />
                </div>
                <div className="panel overflow-hidden bg-gray">
                    <ExpertiseV1 />
                </div>
                <div className="panel contact-panel overflow-hidden">
                    <ProjectIdeaV1 />
                </div>
                <BlogV2 sectionClass='bg-gray' />
                <FooterV1 />
            </div>
        </>
    );
};

export default Home1Light;