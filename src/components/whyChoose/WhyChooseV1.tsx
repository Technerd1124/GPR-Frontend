import { useEffect, useState } from 'react';
import { WhyUsData } from '../../types/cms';
import Animate from '../animation/Animate';
import thumb3 from '/assets/img/thumb/3.jpg';
import { getWhyUsData, MEDIA_URL } from '../../api/strapi';

interface DataType {
    sectionClass?: string
}


const WhyChooseV1 = ({ sectionClass }: DataType) => {
    const [slide1, setSlide1] = useState<WhyUsData | null>(null);

    useEffect(() => {
        const fetchSlide1Data = async () => {
            try {
                const res = await getWhyUsData();
                setSlide1(res.data);
            } catch (err) {
                console.error("Error fetching Slider 1:", err);
            }
        };


        fetchSlide1Data();
    }, []);

    if (!slide1) return null;


    return (
        <>
            <div className={`${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="thumb-style-one">
                                <img src={`${MEDIA_URL}${slide1.Media.url}`} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="choose-us-style-one">
                                <div className="pl-80 pl-md-0 pl-xs-0">
                                    <h4 className="sub-title">Why GrowPro Rise </h4>
                                    <h2 className="title">{slide1.PageTitle}</h2>
                                    <div className="faq-style-one accordion mt-30" id="faqAccordion">
                                        {slide1.WhyUsCard.map((item, index) => {
                                            const headingId = `heading-${index}`;
                                            const collapseId = `collapse-${index}`;
                                            return (
                                                <div className="accordion-item" key={item.id}>
                                                    <h2 className="accordion-header" id={headingId}>
                                                        <button
                                                            className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#${collapseId}`}
                                                            aria-expanded={index === 0 ? "true" : "false"}
                                                            aria-controls={collapseId}
                                                        >
                                                            {item.title}
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id={collapseId}
                                                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                                        aria-labelledby={headingId}
                                                        data-bs-parent="#faqAccordion"
                                                    >
                                                        <div className="accordion-body">
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                </div>
                                <div className="award-items">
                                    <Animate className='animate__animated animate__fadeInLeft'>
                                        <div className="award-item">
                                            <i className="fab fa-behance" />
                                            <h4>Behance Awards </h4>
                                        </div>
                                    </Animate>

                                    <Animate className='animate__animated animate__fadeInLeft' delay="100ms">
                                        <div className="award-item">
                                            <i className="fas fa-layer-group" />
                                            <h4>Design Awards</h4>
                                        </div>
                                    </Animate>

                                    <Animate className='animate__animated animate__fadeInLeft' delay="200ms">
                                        <div className="award-item">
                                            <i className="fab fa-laravel" />
                                            <h4>Coding Awards</h4>
                                        </div>
                                    </Animate>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV1;