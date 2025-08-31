import { Link } from "react-router-dom";
import type { CmsNavLink } from "../../types/cms";

interface DataType {
  navbarPlacement?: string;
  toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  menuItems: CmsNavLink[]; // coming from Strapi API
}



const MainMenu = ({ navbarPlacement, toggleSubMenu, menuItems }: DataType) => {
  return (
    <ul
      className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`}
      data-in="fadeInDown"
      data-out="fadeOutUp"
    >
      {menuItems.map((link) => (
        <li key={link.id} className={link.SubLinks?.length ? "dropdown" : ""}>
          <Link
            to={link.URL || "#"}
            className={link.SubLinks?.length ? "dropdown-toggle" : ""}
            data-toggle={link.SubLinks?.length ? "dropdown" : undefined}
            onClick={link.SubLinks?.length ? toggleSubMenu : undefined}
            target={link.IsExternal ? "_blank" : "_self"}
          >
            {link.Label}
          </Link>

          {/* Render SubLinks if available */}
          {link.SubLinks?.length > 0 && (
            <ul className="dropdown-menu">
              {link.SubLinks.map((sub) => (
                <li key={sub.id}>
                  <Link to={sub.url || "#"}>{sub.Label}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;

// /* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

  


// interface DataType {
//     navbarPlacement?: string;
//     toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
// }


// const MainMenu = ({ navbarPlacement, toggleSubMenu }: DataType) => {
 
//     return (
//         <>
//             <ul className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`} data-in="fadeInDown" data-out="fadeOutUp">
//                 <li><Link to="/home-1-light">Home</Link></li>     
//                 <li className="dropdown">
//                     <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Pages</Link>
//                     <ul className="dropdown-menu">
//                                 <li><Link to="/about-us-light">About Us</Link></li>
//                                 <li><Link to="/team-light">Team Style One</Link></li>
//                                 <li><Link to="/team-details-light/1">Team Details</Link></li>
//                                 <li><Link to="/project-light">Project Showcase</Link></li>
//                                 <li><Link to="/project-2-light">Interactive Portfolio</Link></li>
//                                 <li><Link to="/project-3-light">Showcase Carousel</Link></li>
//                                 <li><Link to="/project-details-light/1">Project Details</Link></li>
//                                 <li><Link to="/contact-us-light">Contact Us</Link></li>
//                                 <li><Link to="/faq-light">Faq</Link></li>
//                     </ul>
//                 </li>
//                 <li className="dropdown">
//                     <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Services</Link>
//                     <ul className="dropdown-menu">
//                                 <li><Link to="/services-light">Service Version One</Link></li>
//                                 <li><Link to="/service-details-light/1">Marketing Strategy</Link></li>
//                     </ul>
//                 </li>
//                 <li><Link to="/blog-with-sidebar-light">Blog</Link></li>
//                 <li><Link to="/contact-us">contact</Link></li>
//             </ul>
//         </>
//     );
// };

// export default MainMenu;



