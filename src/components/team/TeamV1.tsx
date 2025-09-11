import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import SplitText from "../animation/SplitText.jsx";
import SingleTeamV1 from './SingleTeamV1';
import { getTeamSection } from "../../api/strapi";
import { TeamSectionData, TeamCard } from "../../types/cms";

interface DataType {
    sectionClass?: string;
    hasTitle?: boolean;
}

const TeamV1 = ({ sectionClass, hasTitle }: DataType) => {
    const [TeamMember, setTeamMember] = useState<TeamSectionData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getTeamSection();
                setTeamMember(res.data);
            } catch (err) {
                console.error("Error fetching Team Section:", err);
            }
        };
        fetchData();
    }, []);

    if (!TeamMember) return null;

    // group by role (just an example, you can adjust filters)
    const managingDirectors = TeamMember.TeamCard.filter(m => m.MemberRole.includes("Co-Founder"));
    const marketingManagers = TeamMember.TeamCard.filter(m => m.MemberRole.includes("Co-Founder"));
    const developers = TeamMember.TeamCard.filter(m => m.MemberRole.includes("Co-Founder"));

    return (
        <div className={`team-style-one-area relative overflow-hidden default-padding-bottom ${sectionClass || ""}`}>
            {/* Team Title  */}
            {hasTitle && (
                <div className="team-style-one-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                                <div className="site-heading">
                                    <h4 className="sub-title">Team members</h4>
                                    <h2 className="title split-text">
                                        <SplitText
                                            delay={40}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            {TeamMember.PageTitle}
                                        </SplitText>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container">
                <div className="team-style-one-items">
                    <div className="row">
                        {/* Left side tabs */}
                        <div className="col-xl-4">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#tab1">
                                        <strong>Managing Director</strong>
                                        <span>Head of department</span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#tab2">
                                        <strong>Marketing Manager</strong>
                                        <span>Sales Department</span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#tab3">
                                        <strong>Software Developer</strong>
                                        <span>App Department</span>
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Right side carousel */}
                        <div className="col-xl-7 offset-xl-1">
                            <div className="tab-content">
                                {/* Tab 1 */}
                                <div className="tab-pane fade show active" id="tab1">
                                    <Swiper
                                        className="team-style-one-carousel"
                                        loop={true}
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        breakpoints={{
                                            768: { slidesPerView: 2, spaceBetween: 60 },
                                        }}
                                        modules={[Keyboard]}
                                    >
                                        {managingDirectors.map((team: TeamCard) => (
                                            <SwiperSlide key={team.id}>
                                                <SingleTeamV1 team={team} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>

                                {/* Tab 2 */}
                                <div className="tab-pane fade" id="tab2">
                                    <Swiper
                                        className="team-style-one-carousel"
                                        loop={true}
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        breakpoints={{
                                            768: { slidesPerView: 2, spaceBetween: 60 },
                                        }}
                                        modules={[Keyboard]}
                                    >
                                        {marketingManagers.map((team: TeamCard) => (
                                            <SwiperSlide key={team.id}>
                                                <SingleTeamV1 team={team} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>

                                {/* Tab 3 */}
                                <div className="tab-pane fade" id="tab3">
                                    <Swiper
                                        className="team-style-one-carousel"
                                        loop={true}
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        breakpoints={{
                                            768: { slidesPerView: 2, spaceBetween: 60 },
                                        }}
                                        modules={[Keyboard]}
                                    >
                                        {developers.map((team: TeamCard) => (
                                            <SwiperSlide key={team.id}>
                                                <SingleTeamV1 team={team} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamV1;
