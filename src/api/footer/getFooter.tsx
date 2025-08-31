// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import type { CmsFooter } from "../../types/cms";
// const Footer = () => {
//   const [footer, setFooter] = useState<CmsFooter | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchNavbar = async () => {
//       try {
//         const res = await axios.get<{ data: CmsFooter }>("http://localhost:1338/api/header?populate[NAVLINK][populate]=SubLinks&populate[logo_gpr][populate]=logo_img"); // ✅ calls your Strapi API
//         setFooter(res.data.data);
//       } catch (err: any) {
//         setError(err.message || "Failed to fetch navbar");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchNavbar();
//   }, []);

//   if (loading) return <p>Loading navbar...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!footer) return null;

// }

// export default Footer;
