import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json"
import SplitText from "../animation/SplitText.jsx"
import { Link } from "react-router-dom";
import { Key, useEffect, useState } from "react";
import { ServiceData } from "../../types/cms";
import { getService, MEDIA_URL } from "../../api/strapi.js";


interface DataType {
    hasTitle?: boolean;
    sectionClass?: string;
    lightMode?: boolean
}

const ServicesV1 = ({ hasTitle, sectionClass, lightMode }: DataType) => {

    const [, setActiveServiceId] = useState(ServicesV1Data[0]?.id || null);
    const [service, setService] = useState<ServiceData | null>(null);


    useEffect(() => {
        const fetchServiceData = async () => {
            try {
                const res = await getService();
                setService(res.data);
            } catch (err) {
                console.error("Error fetching service Section:", err);
            }
        };
        fetchServiceData();

    }, []);

    if (!service) return null;
    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };
    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };
    return (
        <>
            <div className={`services-style-one-area ${sectionClass ? sectionClass : ""}`}>
                {/* Service Title */}
                {hasTitle &&
                    <div className="service-style-one-heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                                    <div className="site-heading">
                                        <h4 className="sub-title">Services we offer</h4>
                                        <h2 className="title split-text">
                                            <SplitText
                                                delay={40}
                                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                                easing="easeOutCubic"
                                                threshold={0.2}
                                                rootMargin="-50px"
                                            >
                                                {service.ServicePageTitle}
                                            </SplitText>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }


                <div className="container">
                    <div className="services-style-one-items">
                        <div className="row">
                            {service?.serviceMenu?.map((item, i) => (
                                <div
                                    className="col-xl-3 col-lg-6 col-md-7 single-item"
                                    key={item.id || i} // ✅ unique key (prefer id if available)
                                    onMouseEnter={() => handleMouseEnter(item.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="services-style-one-item">
                                        <div className="icon">
                                            {item.ServiceIcon.map((icon, j) => (
                                                <img
                                                    key={icon.id || j} // ✅ key added
                                                    src={`${MEDIA_URL}${icon.url}`}
                                                    alt={item.ServiceName || "Service Icon"}
                                                    width={75}
                                                    height={60}
                                                />
                                            ))}
                                        </div>
                                        <h4>
                                            <Link to={`/service-details/${item.id}`}>
                                                {item.ServiceName}
                                            </Link>
                                        </h4>
                                        <p>{item.ServiceDescription}</p>
                                        <Link className="btn-full" to={`/service-details/${item.id}`}>
                                            Read More <i className="fas fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV1