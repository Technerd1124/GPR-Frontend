import { Helmet } from "react-helmet-async";
import AboutV6 from "../../components/about/AboutV6";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import FunFactV1 from "../../components/fact/FunFactV1";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import PartnerV2 from "../../components/partner/PartnerV2";
import TeamV1 from "../../components/team/TeamV1";
import TestimonialV3 from "../../components/testimonial/TestimonialV3";
import ClientsV1 from "../../components/clients/ClientsV1";

const AboutUsLightPage = () => {
    return (
        <>
            <Helmet>
                <title>GroPro Rise - About Us Light</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='About Company' breadCrumb='About' LightMode={true} />
                <AboutV6 lightMode={true} />
                <FunFactV1 sectionClass='default-padding-bottom' />
                <PartnerV2 sectionClass='bg-gray' />
                <ClientsV1 />
                <TeamV1 hasTitle={true} />
                <TestimonialV3 />
            </LayoutV1Light>
        </>
    );
};

export default AboutUsLightPage;