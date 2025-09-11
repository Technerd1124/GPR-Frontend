import twitter from '/assets/img/icon/twitter.png';
import { Link } from "react-router-dom";

const SocialShareV3 = () => {
    return (
        <>
            <li>
                <Link className="facebook" to="https://www.facebook.com/growprorise" target="_blank">
                    <i className="fab fa-facebook-f" />
                </Link>
            </li>
            <li>
                <Link className="twitter" to="https://www.x.com/growprorise" target="_blank">
                    <img src={twitter} alt="Image Not Found" />
                </Link>
            </li>
            <li>
                <Link className="pin" to="https://in.pinterest.com/growprorise/" target="_blank">
                    <i className="fab fa-pinterest-p" />
                </Link>
            </li>
            <li>
                <Link className="linkedin" to="https://www.linkedin.com/growprorise" target="_blank">
                    <i className="fab fa-linkedin-in" />
                </Link>
            </li>
            <li>
                <Link className="instagram" to="https://www.instagram.com/growprorise/" target="_blank">
                    <i className="fab fa-instagram"></i>

                </Link>
            </li>
        </>
    );
};

export default SocialShareV3;