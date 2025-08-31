import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import type { CmsNavbar, CmsNavLink } from "../../types/cms";
const Header = () => {
  const [navbar, setNavbar] = useState<CmsNavbar | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await axios.get<{ data: CmsNavbar }>("http://localhost:1338/api/header?populate[NAVLINK][populate]=SubLinks&populate[logo_gpr][populate]=logo_img"); // ✅ calls your Strapi API
        setNavbar(res.data.data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch navbar");
      } finally {
        setLoading(false);
      }
    };
    fetchNavbar();
  }, []);

  if (loading) return <p>Loading navbar...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!navbar) return null;

  return (
    <header className="navbar">
      {/* ✅ Logo */}
      <Link to={navbar.logo_gpr.href || "/"}>
        <img
          src={navbar.logo_gpr.logo_img.url}
          alt={navbar.logo_gpr.alt_text || "Logo"}
          width={120}
        />
      </Link>

      {/* ✅ Nav Links */}
      <ul className="nav">
        {navbar.NAVLINK.map((link: CmsNavLink) => (
          <li key={link.id} className={link.SubLinks?.length ? "dropdown" : ""}>
            <Link
              to={link.URL}
              target={link.IsExternal ? "_blank" : "_self"}
            >
              {link.Label}
            </Link>

            {/* ✅ SubLinks */}
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
    </header>
  );
};

export default Header;
