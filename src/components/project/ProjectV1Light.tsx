import SplitText from "../animation/SplitText.jsx"
import PortfolioV1Light from "../portfolio/PortfolioV1Light";
import { getRecentWork, MEDIA_URL } from '../../api/strapi.js';
import { RecentWorkData } from '../../types/cms.js';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, EffectFade } from 'swiper/modules';
import SinglePortfolioV1Light from "../portfolio/SinglePortfolioV1Light.js";
import { Link } from "react-router-dom";


const ProjectV1Light = () => {

    const [ProjectPage, setRecentData] = useState<RecentWorkData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getRecentWork();
                setRecentData(res.data);
            } catch (err) {
                console.error("Error fetching recent work page Data :", err);
            }
        };
        fetchData();
    }, []);

    if (!ProjectPage) return null;

    return (
        <>
            <div className="project-style-one-area default-padding blurry-shape-left overflow-hidden">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-4 pr-50 pr-md-15 pr-xs-15">
                            <div className="portfolio-style-one-left-info">
                                <h4 className="sub-title">Recent Work</h4>
                                <p className="split-text">
                                    {ProjectPage.PageDescription && (
                                        <SplitText
                                            delay={5}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            {ProjectPage.PageDescription}

                                        </SplitText>
                                    )}
                                </p>
                                <div className="portfolio-info-card">
                                    <h5>{ProjectPage.PageTitle}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            {/* <PortfolioV1Light project={ProjectPage.ProjectCard} /> */}


                            {/* From PortfolioLight Components  */}
                            <>
                                <div className="portfolio-style-one-content">
                                    <Swiper className="portfolio-style-two-carousel swiper"
                                        direction="horizontal"
                                        loop={true}
                                        autoplay={false}
                                        effect={"fade"}
                                        fadeEffect={{ crossFade: true }}
                                        speed={1000}
                                        pagination={{
                                            el: ".project-pagination",
                                            type: "custom",
                                            clickable: true,
                                            renderCustom: (_swiper, current, total) => `${current} <span></span> ${total}`,
                                        }}
                                        navigation={{
                                            nextEl: ".project-button-next",
                                            prevEl: ".project-button-prev",
                                        }}
                                        modules={[Navigation, Pagination, EffectFade, Keyboard]}
                                    >


                                        <div className="swiper-wrapper">
                                            {ProjectPage.ProjectCard.map(portfolio =>
                                                <SwiperSlide key={portfolio.count_id}>
                                                    {/* <SinglePortfolioV1Light project={portfolio} /> */}

                                                    {/* SinglePortfilio component =>  */}
                                                    <div className="portfolio-style-one-item">
                                                        <img src={`${MEDIA_URL}${portfolio.Project_img.image.url}`} alt="Image Not Found" width={710} height={800} />
                                                        <div className="info">
                                                            <h2><Link to={`/project-details/${portfolio.UrlToProject}`}> <strong>{portfolio.ProjectName}</strong></Link></h2>
                                                            <Link className="btn-animation mt-30" to={`/project-details/${portfolio.count_id}`}><i className="fas fa-arrow-right" /> <span>See Details</span></Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )}
                                        </div>
                                    </Swiper>
                                    <div className="project-swiper-nav">
                                        <div className="project-pagination" />
                                        <div className="project-button-prev" />
                                        <div className="project-button-next" />
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectV1Light;