// import { useEffect, useState } from "react";
// import axios from "axios";
// // import { Link } from "react-router-dom";
// import type { CmsHero } from "../../types/cms";
// const Footer = () => {
//   const [setHero, setFooter] = useState< | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const FetchHero = async () => {
//       try {
//         const res = await axios.get<{ data: CmsHero }>("http://localhost:1338/api/hero-section?populate=*");
//         setFooter(res.data.data);
//       } catch (err: any) {
//         setError(err.message || "Failed to fetch navbar");
//       } finally {
//         setLoading(false);
//       }
//     };
//     FetchHero();
//   }, []);
// }