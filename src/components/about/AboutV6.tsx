import arrowIcon from "/assets/img/icon/arrow.png";
import arrowTheme from "/assets/img/icon/arrow-theme.png";

import { Link } from "react-router-dom";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { getAboutCompany, MEDIA_URL } from "../../api/strapi";
import { AboutCompanyData } from "../../types/cms";

interface DataType {
    lightMode?: boolean;
    sectionClass?: string;
}

const AboutV6 = ({ lightMode, sectionClass }: DataType) => {
    const containerRef = useScrollAnimation();
    const [AboutData, setAboutData] = useState<AboutCompanyData | null>(null);
    const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const res = await getAboutCompany();
                setAboutData(res.data);
                // Set first service as active by default
                if (res.data?.menu?.length > 0) {
                    setActiveServiceId(res.data.menu[0].count);
                }
            } catch (err) {
                console.error("Error fetching About Data:", err);
            }
        };

        fetchAboutData();
    }, []);

    if (!AboutData) return null;

    const handleMouseEnter = (id: string) => {
        setActiveServiceId(id);
    };

    return (
        <>
            <div
                className={`about-style-six-area default-padding ${sectionClass ? sectionClass : ""
                    }`}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <div className="thumb-style-four">
                                <img
                                    src={`${MEDIA_URL}${AboutData.Media.url}`}
                                    alt="Image Not Found"
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-7">
                            <div
                                className="about-style-six-info text-scroll-animation"
                                ref={containerRef}
                            >
                                <div className="info">
                                    <div className="d-flex">
                                        <Link to="/about-us">
                                            <img
                                                src={lightMode ? arrowTheme : arrowIcon}
                                                alt="Image Not Found"
                                            />
                                        </Link>
                                        <h2 className="title text">{AboutData.Title}</h2>
                                    </div>
                                    <p className="text">{AboutData.Description}</p>
                                </div>

                                <ul className="service-list">
                                    {AboutData.menu.map((service) => (
                                        <li
                                            key={service.id}
                                            onMouseEnter={() => handleMouseEnter(service.count)}
                                        >
                                            <Link
                                                to={service.url}
                                                className={
                                                    activeServiceId === service.count ? "active" : ""
                                                }
                                            >
                                                <div className="icon">
                                                    <i className="fas fa-long-arrow-right" />
                                                </div>
                                                <span>{service.count}</span>
                                                {service.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV6;
