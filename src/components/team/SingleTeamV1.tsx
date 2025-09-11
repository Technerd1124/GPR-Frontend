import { Link } from "react-router-dom";
import SocialShareV1 from "../social/SocialShareV1";
import { MEDIA_URL } from "../../api/strapi";
import { TeamCard } from "../../types/cms";

const SingleTeamV1 = ({ team }: { team: TeamCard }) => {
    return (
        <div className="team-style-one-item">
            <div className="thumb">
                <Link to={`/team-details/${team.id}`}>
                    <img
                        src={`${MEDIA_URL}${team.Avtar?.image?.url}`}
                        alt={team.Avtar?.alt || "Team Member"}
                        width={300}
                        height={305}
                    />
                </Link>
                <div className="social-overlay">
                        <ul>
                            {/* <SocialShareV1 /> */}
                            <SocialShareV1 socials={team.SocialLinks || []} />
                        </ul>
                        <div className="icon">
                            <i className="fas fa-plus" />
                        </div>
                    </div>
            </div>

            <div className="info">
                <h4>
                    <Link to={`/team-details/${team.id}`}>{team.MemberName}</Link>
                </h4>
                <span>{team.MemberRole}</span>
            </div>
        </div>
    );
};

export default SingleTeamV1;
