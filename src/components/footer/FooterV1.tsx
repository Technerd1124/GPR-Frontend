import { Link } from "react-router-dom";
import NewsletterV2 from "../newsletter/NewsletterV2";
import FooterSocial from "../social/FooterSocial";
import logo from "/assets/img/LogoGpr.svg";
import { FooterData, HeaderData } from "../../types/cms";
import { useEffect, useState } from "react";
import { getFooter, getHeader } from "../../api/strapi";

interface DataType {
    sectionClass?: string;
}

const FooterV1 = ({ sectionClass }: DataType) => {
    const [footer, setFooter] = useState<FooterData | null>(null);
    const [links, setLinks] = useState<HeaderData | null>(null);

    useEffect(() => {
        const fetchFooterData = async () => {
            try {
                const res = await getFooter();
                setFooter(res.data);
            } catch (err) {
                console.error("Error fetching Footer:", err);
            }
        };

        const fetchLinks = async () => {
            try {
                const res = await getHeader();
                setLinks(res.data);
            } catch (err) {
                console.error("Error fetching Footer Links:", err);
            }
        };

        fetchFooterData();
        fetchLinks();
    }, []);

    if (!footer) return null;

    return (
        <footer className={`${sectionClass ? sectionClass : ""}`}>
            <div className="container">
                <div className="f-items">
                    <div className="row">
                        {/* Left column */}
                        <div className="col-lg-6 footer-item about pr-120 pr-md-15 pr-xs-15">
                            <div className="top">
                                <img src={logo} alt={footer.Logo?.alt_text || "Logo"} />
                            </div>

                            {/* Contact Addresses */}
                            <ul className="address-list">
                                {footer?.contactItem?.map((item) => (
                                    <li key={item.id}>
                                        <h4>{item.Label}</h4>
                                        <p>{item.value}</p>
                                    </li>
                                ))}
                            </ul>

                            <NewsletterV2 />
                        </div>

                        {/* Right column */}
                        <div className="col-lg-5 offset-lg-1 footer-item">
                            <h4 className="widget-title">Useful Link</h4>
                            <ul className="useful-link">
                                {/* Header Links */}
                                {links?.NAVLINK?.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            to={item.URL}
                                            target={item.IsExternal ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                        >
                                            {item?.Label}
                                        </Link>
                                    </li>
                                ))}



                                {/* Footer Links */}
                                {footer?.footerLinks?.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            to={item.Url}
                                            target={item.IsExternal ? "_blank" : "_self"}
                                            rel="noopener noreferrer">
                                            {item?.Label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Contact Info */}
                            <div className="footer-contact">
                                <ul>
                                    {footer.MailID && (
                                        <li>
                                            <a href={`mailto:${footer.MailID}`}>{footer.MailID}</a>
                                        </li>
                                    )}
                                    {footer.contactNo && (
                                        <li>
                                            <a href={`tel:+${footer.contactNo}`}>
                                                {footer.contactNo}
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="footer-social">
                                <FooterSocial />
                            </ul>
                        </div>
                        <div className="col-lg-6 text-end">
                            <p>
                                Copyright &copy; {new Date().getFullYear()} GPR. All Rights
                                Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterV1;
