import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, EffectFade } from 'swiper/modules';
import SinglePortfolioV1Light from './SinglePortfolioV1Light';
import { ProjectCard } from '../../types/cms';

interface PortfolioV1LightProps {
    project: ProjectCard[];
}

const PortfolioV1Light: React.FC<PortfolioV1LightProps> = ({ project }) => {
    return (
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
                        {project.map(portfolio =>
                            <SwiperSlide key={portfolio.count_id}>
                                <SinglePortfolioV1Light project={portfolio} />
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
    );
};

export default PortfolioV1Light;