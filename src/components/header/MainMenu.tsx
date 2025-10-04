import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHeader } from "../../api/strapi";
import { HeaderData } from "../../types/cms";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
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

  // ✅ Dummy Offerings data
  const dummyOfferings = [
    { id: 1, Label: "AI-native Contact Center", url: "#" },
    { id: 2, Label: "Application Services", url: "#" },
    { id: 3, Label: "Cybersecurity", url: "#" },
    { id: 4, Label: "Digital Workplace", url: "#" },
    { id: 5, Label: "Enterprise Automation", url: "#" },
    { id: 6, Label: "Generative AI", url: "#" },
    { id: 7, Label: "Sustainability Services", url: "#" },
    { id: 8, Label: "Testing", url: "#" },
    { id: 9, Label: "Vibe Coding", url: "#" },
  ];

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

        return (
          <li
            key={link.id}
            style={{ position: "relative", marginRight: "20px" }}
            onMouseEnter={() => setHoveredIndex(hasSubLinks ? index : null)}
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

            {hasSubLinks && hoveredIndex === index && (
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
                  gridTemplateColumns: "3fr 1fr", // left grid + right sidebar
                  gap: "40px",
                  zIndex: 1000,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                }}
              >
                {/* LEFT SIDE: Services Grid */}

                {/* LEFT SIDE: Services Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
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
                        <h4
                          style={{
                            color: "#3b2eb0",
                            marginBottom: "10px",
                            fontSize: "16px",
                          }}
                        >
                          {sub.Label}
                        </h4>
                        <p style={{ fontSize: "13px", color: "#555" }}>
                          {sub.Label || "Deliver powerful solutions"}
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

                {/* RIGHT SIDE: Offerings List */}
                <div>
                  <h4 style={{ color: "#666", marginBottom: "15px" }}>
                    Offerings
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {dummyOfferings.map((offer) => (
                      <li key={offer.id} style={{ marginBottom: "10px" }}>
                        <Link
                          to={offer.url}
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
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;

