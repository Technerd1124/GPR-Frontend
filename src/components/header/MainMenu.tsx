import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHeader } from "../../api/strapi";
import { HeaderData } from "../../types/cms";

interface Props {
  navbarPlacement?: string;
  toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu = ({ navbarPlacement, toggleSubMenu }: Props) => {
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
    <ul
      className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`}
      data-in="fadeInDown"
      data-out="fadeOutUp"
    >
      {header.NAVLINK.map((link) => (
        <li
          key={link.id}
          className={link.SubLinks.length > 0 ? "dropdown" : ""}
        >
          <Link
            to={link.URL || "#"}
            className={link.SubLinks.length > 0 ? "dropdown-toggle" : ""}
            data-toggle={link.SubLinks.length > 0 ? "dropdown" : undefined}
            onClick={
              link.SubLinks.length > 0 && toggleSubMenu ? toggleSubMenu : undefined
            }
          >
            {link.Label}
          </Link>

          {/* SubLinks dropdown */}
          {link.SubLinks.length > 0 && (
            <ul className="dropdown-menu">
              {link.SubLinks.map((sub) => (
                <li
                  key={sub.id}
                  className={sub.Submenu?.length > 0 ? "dropdown" : ""}
                >
                  <Link
                    to={sub.url || sub.url || "#"}
                    className={sub.Submenu?.length > 0 ? "dropdown-toggle" : ""}
                    data-toggle={sub.Submenu?.length > 0 ? "dropdown" : undefined}
                    onClick={
                      sub.Submenu?.length > 0 && toggleSubMenu ? toggleSubMenu : undefined
                    }
                  >
                    {sub.Label}
                  </Link>

                  {/* Submenu inside SubLinks */}
                  {sub.Submenu?.length > 0 && (
                    <ul className="dropdown-menu">
                      {sub.Submenu.map((child) => (
                        <li key={child.IDno}>
                          <Link to={child.url || "#"}>{child.Label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
