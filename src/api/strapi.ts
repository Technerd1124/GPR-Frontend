// api/header.ts
import axios from "axios";
import { ContactSidebarData, HeaderData,FooterData ,HeroData ,AboutCompanyData, ServiceData, RecentWorkData, TeamSectionData, ActiveClient, TestimonialData, BlogResponse, WhyUsData, Slide2Data, Slide3Data} from "../types/cms";

export const API_URL = "http://localhost:1338/api";
export const MEDIA_URL="http://localhost:1338"

// Header - Navbar Menu 
export const getHeader = async (): Promise<{ data: HeaderData }> => {
  const res = await axios.get(
    `${API_URL}/header?populate[NAVLINK][populate]=SubLinks&populate[logo_gpr][populate]=logo_img`
  );
  return res.data;
};


 // Footer 
export const getFooter = async (): Promise<{ data: FooterData }> => {
  const res = await axios.get(
    `${API_URL}/footer?populate[UseFullLink][populate]=*`
  );
  return res.data;
};


 // Main ( Banner ) 
export const GetMainSection = async (): Promise<{ data: HeroData  }> => {
  const res = await axios.get(
    `${API_URL}/hero-section?populate=*`
  );
  return res.data;
};


 // Nav - SideBar  -
export const getSidebar = async (): Promise<{ data:  ContactSidebarData  }> => {
  const res = await axios.get(
    `${API_URL}/contact-slider?populate=*`
  );
  return res.data;
};

export const getAboutCompany = async (): Promise<{ data:  AboutCompanyData  }> => {
  const res = await axios.get(
    `${API_URL}/service-submain?populate=*`
  );
  return res.data;
};

export const getService = async (): Promise<{ data:  ServiceData  }> => {
  const res = await axios.get(
    `${API_URL}/service-main?populate[serviceMenu][populate]=ServiceIcon`
  );
  return res.data;
};

export const getRecentWork = async (): Promise<{ data:  RecentWorkData  }> => {
  const res = await axios.get(
    `${API_URL}/recent-work?populate[ProjectCard][populate][Project_img][populate]=image`
  );
  return res.data;
};


export const getTeamSection = async (): Promise<{ data:  TeamSectionData  }> => {
  const res = await axios.get(
    `${API_URL}/team-section?populate[TeamCard][populate][Avtar][populate]=image&populate[TeamCard][populate]=SocialLinks`
  );
  return res.data;
};


export const getActiveClients =async ():Promise<{ data:  ActiveClient  }> => {
  const res  = await axios.get( 
    `${API_URL}/active-client`
  );
  return res.data
}


export const getTestimonials =async ():Promise<{ data: TestimonialData  }> => {
  const res  = await axios.get( 
    `${API_URL}/testimonial?populate[TestimonialData][populate]=avatar`
  );
  return res.data
}

export const getBlog =async ():Promise<{ data: BlogResponse  }> => {
  const res  = await axios.get( 
    `${API_URL}/blog?populate[Blog][populate]=*`
  );
  return res.data
}


export const getWhyUsData =async ():Promise<{ data: WhyUsData  }> => {
  const res  = await axios.get( 
    `${API_URL}/slider-1?populate=*`
  );
  return res.data
}
export const getExpertise =async ():Promise<{ data:  Slide2Data }> => {
  const res  = await axios.get( 
    `${API_URL}/slider-2?populate=*`
  );
  return res.data
}

export const getProjectIdia =async ():Promise<{ data:  Slide3Data }> => {
  const res  = await axios.get( 
    `${API_URL}/slider-3?populate=*`
  );
  return res.data
}




