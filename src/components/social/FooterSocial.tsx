import twitter from "/assets/img/icon/twitter.png"
import { Link } from "react-router-dom";

const FooterSocial = () => {
    return (
        <>
            <li>
                <Link to="https://www.facebook.com/growprorise" target='_blank'><i className="fab fa-facebook-f" /></Link>
            </li>
            <li>
                <Link to="https://www.linkedin.com/company/growproris" target='_blank'><i className="fab fa-linkedin-in" /></Link>
            </li>
            <li>
                <Link to="https://x.com/growprorise" target='_blank'><img src={twitter} alt="Image Not Found" /></Link>
            </li>
        </>
    );
};

export default FooterSocial;