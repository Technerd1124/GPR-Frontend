import { useEffect, useState } from "react";
import { Slide3Data } from "../../types/cms";
import { getProjectIdia, MEDIA_URL } from "../../api/strapi";


const ProjectIdeaV1 = () => {

    const [slide3, setSlide3] = useState<Slide3Data | null>(null);

    useEffect(() => {
        const fetchSlide1Data = async () => {
            try {
                const res = await getProjectIdia();
                setSlide3(res.data);
            } catch (err) {
                console.error("Error fetching Slider 1:", err);
            }
        };

        fetchSlide1Data();
    }, []);

    if (!slide3) return null;
    return (
        <>
            <div className="contact-panel-bg" style={{ backgroundImage: `url(${MEDIA_URL}${slide3.Slide3Media.url})` }} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h4 className="sub-title">Have you project in mind?</h4>
                        <h2 className="title">For instant support <br /> Please reach GPR </h2>
                        {/* <ul className="contact-list">
                            <li>
                                <div className="icon">
                                    <i className="fas fa-phone" />
                                </div>
                                <div className="info">
                                    {slide3?.ContactData?.map((item) => (
                                        <>
                                            <h4>{item.Label}</h4>
                                            <a className="phone-link" href={`tel:${item.value}`}>
                                                {item.value}
                                            </a>

                                        </>
                                    ))}
                                    <br />
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-envelope-open" />
                                </div>
                                <div className="info">
                                    <h4>Official Email</h4>
                                    <a href="mailto:info@agrul.com.com">info@agrul.com</a>
                                </div>
                            </li>
                        </ul> */}
                        <ul className="contact-list">
  {slide3?.ContactData?.map((item) => (
    <li key={item.id}>
      <div className="icon">
        {item.Label.toLowerCase().includes("phone") && <i className="fas fa-phone" />}
        {item.Label.toLowerCase().includes("email") && <i className="fas fa-envelope-open" />}
        {item.Label.toLowerCase().includes("address") && <i className="fas fa-map-marker-alt" />}
      </div>

      <div className="info">
        <h4>{item.Label}</h4>
        {item.Label.toLowerCase().includes("email") ? (
          <a href={`mailto:${item.value}`}>{item.value}</a>
        ) : item.Label.toLowerCase().includes("phone") ? (
          <a className="phone-link" href={`tel:${item.value}`}>
            {item.value}
          </a>
        ) : (
          <p>{item.value}</p>
        )}
      </div>
    </li>
  ))}
</ul>

                    </div>
                </div>
            </div>

        </>
    );
};

export default ProjectIdeaV1;