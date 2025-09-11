import illustration1 from '/assets/img/illustration/1.png';
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import SplitText from "../animation/SplitText.jsx"
import { useEffect, useState } from 'react';
import { GetMainSection } from '../../api/strapi.js';
import { HeroData } from '../../types/cms.js';
import { MEDIA_URL } from '../../api/strapi.js';



const BannerV8 = () => {

    const [MainSection, setMainSection] = useState<HeroData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await GetMainSection();
                setMainSection(res.data);
            } catch (err) {
                console.error("Error fetching header:", err);
            }
        };
        fetchData();
    }, []);

    if (!MainSection) return null;
    return (
        <>
            <div className="banner-style-eight-area bg-cover"
                style={{
                    backgroundImage: `url(${MEDIA_URL}${MainSection.BackgroundHero.url})`,
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="banner-style-eight-heading">
                                <div className="banner-title">

                                    <h2>
                                        <SplitText
                                            className="title-left split-text"
                                            delay={150}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            {MainSection.MainSlogan}
                                        </SplitText>
                                    </h2>



                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="thumb">
                                <img src={illustration1} alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="d-grid">
                                <h4>{MainSection.SubTitle}</h4>
                                <div className="right">
                                    <p>
                                        {MainSection.MainDescription}
                                    </p>
                                    <Link className="btn-animation mt-10" to="/Services"><i className="fas fa-arrow-right" /> <span>Know More</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 offset-xl-1">
                            <div className="card-style-one">
                                <div className="bottom">
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer"><CountUp end={MainSection.completeProjectNo} enableScrollSpy /></div>
                                            <div className="operator">+</div>
                                        </div>
                                        <span className="medium">Completed Projects</span>
                                    </div>
                                    <Link to="/project"><i className="fas fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV8;