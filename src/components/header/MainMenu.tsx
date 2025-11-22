import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHeader } from "../../api/strapi";
import { HeaderData } from "../../types/cms";
import { FaAngleRight } from "react-icons/fa";

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

  useEffect(() => {
    const handleClickOutside = () => setHoveredIndex(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  if (!header) return null;

  return (
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        position: "relative",
      }}
    >
      {header.NAVLINK.map((link, index) => {
        const hasSubLinks = link.SubLinks?.length > 0;
        const hasServiceOffers = link.ServiceOffers?.length > 0;

        return (
          <li
            key={link.id}
            style={{ position: "relative", marginRight: "20px" }}
            onMouseEnter={() =>
              setHoveredIndex(hasSubLinks || hasServiceOffers ? index : null)
            }
          >
            <Link
              to={link.URL || "#"}
              onClick={hasSubLinks && toggleSubMenu ? toggleSubMenu : undefined}
              style={{
                textDecoration: "none",
                color: "#000",
                padding: "10px",
                fontWeight: 500,
              }}
            >
              {link.Label}
            </Link>
            {(hasSubLinks || hasServiceOffers) && hoveredIndex === index && (
              <div
                style={{
                  position: "fixed",
                  top: "60px",
                  left: 0,
                  width: "100vw",
                  margin: 0,
                  padding: "40px 60px",
                  backgroundColor: "#fff",
                  display: "grid",
                  gridTemplateColumns: hasServiceOffers ? "3fr 1fr" : "1fr", // ✅ Dynamic
                  gap: hasServiceOffers ? "40px" : "20px",
                  zIndex: 1000,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                }}
              >
                {/* LEFT SIDE: SubLinks Grid */}
                {hasSubLinks && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "20px 40px",
                    }}
                  >
                    {link.SubLinks.map((sub) => (
                      <div
                        key={sub.id}
                        style={{
                          background: "#fafafa",
                          padding: "20px",
                          borderRadius: "8px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          transition: "all 0.2s ease",
                          position: "relative",
                        }}
                      >
                        <div>
                          <h4>
                            <Link
                              to={`/services-light/${sub.Label}`}
                              style={{
                                color: "#3b2eb0",
                                textDecoration: "none",
                                fontSize: "14px",
                              }}
                            >
                              {sub.Label}
                            </Link>

                          </h4>
                          <p style={{ fontSize: "13px", color: "#555" }}>
                            {sub.Description || "Deliver powerful solutions"}
                          </p>
                        </div>

                        {/* Right Arrow */}
                        <span
                          style={{
                            position: "absolute",
                            right: "15px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            fontSize: "16px",
                            color: "#3b2eb0",
                            fontWeight: "bold",
                          }}
                        >
                          <FaAngleRight style={{ color: "#3b2eb0", fontSize: "18px" }} />
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* RIGHT SIDE: Service Offers */}
                {hasServiceOffers && (
                  <div>
                    <h4 style={{ color: "#666", marginBottom: "15px" }}>Offerings</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {link.ServiceOffers.map((offer) => (
                        <li key={offer.id} style={{ marginBottom: "10px" }}>
                          <Link
                            to={offer.Url || "#"}
                            style={{
                              color: "#3b2eb0",
                              textDecoration: "none",
                              fontSize: "14px",
                            }}
                          >
                            {offer.Label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
