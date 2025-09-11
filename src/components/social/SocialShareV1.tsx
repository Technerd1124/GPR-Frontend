import { Link } from "react-router-dom";
import { SocialLink } from "../../types/cms";


interface Props {
    socials: SocialLink[];
}
const SocialShareV1: React.FC<Props> = ({ socials }) => {
    return (
        <>
            {socials.map((item, i) => (
                <li key={item.id || i}>
                    <Link to={item.SocialUrl} target='_blank'><i className="fab fa-linkedin-in" /></Link>
                </li>
            ))}
        </>
    );
};

export default SocialShareV1;