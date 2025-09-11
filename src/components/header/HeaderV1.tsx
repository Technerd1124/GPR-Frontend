import { Link } from "react-router-dom";
import MainMenu from './MainMenu';
import SidebarInfo from './SidebarInfo';
import logo from '/assets/img/LogoGpr.svg'; 
import useSidebarMenu from "../../hooks/useSidebarMenu";
import useSubMenuToggle from "../../hooks/useSubMenuToggle";
import useSidebarInfo from "../../hooks/useSidebarInfo";
import useStickyMenu from "../../hooks/useStickyMenu";
import { getHeader } from "../../api/strapi";
import { HeaderData } from "../../types/cms";
import { useEffect, useState } from "react";

const HeaderV1 = () => {

    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const toggleSubMenu = useSubMenuToggle();
    const { isInfoOpen, openInfoBar, closeInfoBar } = useSidebarInfo();
    const isMenuSticky = useStickyMenu();
    const [header, setHeader] = useState<HeaderData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getHeader();
                setHeader(res.data);
            } catch (err) {
                console.error("Error fetching header:", err);
            }
        };
        fetchData();
    }, []);

    if (!header) return null;
    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed on menu-center ${isMenuSticky ? "sticked" : "no-background"} ${isOpen ? "navbar-responsive" : ""}`}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>
                            <Link className="navbar-brand" to="/">
                                {/* <img src={header.logo_gpr.logo_img.url} className="logo logo-display logo-scrolled" alt="Logo" /> */}
                                <img src={logo} className="logo logo-display logo-scrolled" alt="Logo" />

                            </Link>
                        </div>
                        <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                            <img src={logo} alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times" />
                            </button>
                            <MainMenu toggleSubMenu={toggleSubMenu} navbarPlacement='navbar-center' />
                        </div>
                        <SidebarInfo openInfoBar={openInfoBar} closeInfoBar={closeInfoBar} isInfoOpen={isInfoOpen} />
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu} />
                </nav>
            </header>
        </>
    );
};

export default HeaderV1;