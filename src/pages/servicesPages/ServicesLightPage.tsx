import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ServicesV1Light from "../../components/services/ServicesV1Light";
import FunFactV1 from "../../components/fact/FunFactV1";
import ClientsV1 from "../../components/clients/ClientsV1";
import TestimonialV3 from "../../components/testimonial/TestimonialV3";

const ServicesLightPage = () => {
    const { label } = useParams<{ label?: string }>(); // label from URL


    return (
        <>
            <Helmet>
                <title>GrowPro Rise</title>
            </Helmet>
            <LayoutV1Light>
                <Breadcrumb title="Our Services" breadCrumb="services" LightMode={true} />
                {/* ✅ Pass the ID to ServicesV1Light */}
                <ServicesV1Light
                    sectionClass="default-padding-bottom bg-gray"
                    serviceLabel={label} // pass the submenu label
                />
                <FunFactV1 sectionClass="default-padding-bottom bg-gray" />
                <ClientsV1 />
                <TestimonialV3 />
            </LayoutV1Light>
        </>
    );
};

export default ServicesLightPage;
