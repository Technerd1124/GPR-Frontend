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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      style={{ listStyle: "none", margin: 0, padding: 0, display: "flex" }}
    >
      {header.NAVLINK.map((link, index) => {
        const hasSubLinks = link.SubLinks?.length > 0;

        return (
          <li
            key={link.id}
            style={{ position: "relative", marginRight: "20px" }}
            onMouseEnter={() => setHoveredIndex(hasSubLinks ? index : null)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link
              to={link.URL || "#"}
              onClick={
                hasSubLinks && toggleSubMenu ? toggleSubMenu : undefined
              }
              style={{ textDecoration: "none", color: "#000", padding: "10px" }}
            >
              {link.Label}
            </Link>

            {hasSubLinks && hoveredIndex === index && (
              <ul
                style={{
                  position: "static",
                  top: "0%",
                  left: 0,
                  width: "100vw",
                  margin: 0,
                  padding: "20px 40px",
                  backgroundColor: "#fffefeff",
                  display: "flex",
                  flexWrap: "wrap",
                  zIndex: 1000,
                  listStyle: "none",
                }}
              >
                {link.SubLinks.map((sub) => (
                  <li
                    key={sub.id}
                    style={{ marginRight: "40px", minWidth: "150px" }}
                  >
                    {sub.Submenu?.length > 0 ? (
                      <>
                        <h4 style={{ color: "#ffffffff", marginBottom: "10px" }}>
                          {sub.Label}
                        </h4>
                        <div>

                          {sub.Submenu.map((child) => (
                            <Link
                              key={child.IDno}
                              to={child.url || "#"}
                              style={{
                                // display: "block",
                                color: "#020202ff",
                                textDecoration: "none",
                                padding: "5px 0",
                              }}
                            >
                              {child.Label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        to={sub.url || "#"}
                        style={{
                          display: "block",
                          color: "#090808ff",
                          textDecoration: "none",
                          padding: "5px 0",
                        }}
                      >
                        {sub.Label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
