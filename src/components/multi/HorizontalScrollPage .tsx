import React from "react";
import useHorizontalScroll from "../../hooks/useHorizontalScroll";
import WhyChooseV1 from "../whyChoose/WhyChooseV1";
import ProjectIdeaV1 from "../project/ProjectIdeaV1";
import ExpertiseV1 from "../expertise/ExpertiseV1";


const HorizontalScrollPage = () => {
    useHorizontalScroll(); // ✅ activate the effect here

    return (
        <>
            <div className="multi-section overflow-hidden">
                <div className="thecontainer ">
                    <section className="panel overflow-hidden bg-gray">
                        <WhyChooseV1 />
                    </section>
                    <section className="panel overflow-hidden bg-gray">
                        <ExpertiseV1 />
                    </section>
                    <section className="panel overflow-hidden bg-gray">
                        <ProjectIdeaV1 />
                    </section>
                </div>
            </div>
        </>
    );
};

export default HorizontalScrollPage;
