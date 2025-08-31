


  // HEADER - NAVBAR - LOGO TYPES
export type CmsSubLink = {
    id: number;
    Label: string;
    url: string | null;
    isButton: boolean;
    ButtonType: string | null;
  };
  
  export type CmsNavLink = {
    id: number;
    Label: string;
    URL: string;
    ButtonType: string;
    IsExternal: boolean;
    SubLinks: CmsSubLink[];
  };
  
  export type CmsLogo = {
    id: number;
    href: string;
    alt_text: string;
    logo_img: {
      url: string;
      alternativeText: string | null;
    };
  };
  
  export type CmsNavbar = {
    id: number;
    NAVLINK: CmsNavLink[];
    logo_gpr: CmsLogo;
  };
  


//   MAIN BODY -   HERO  SECTION TYPES  
export interface CmsHero {
    data: {
      id: number;
      documentId: string;
      MainSlogan: string;
      MainDescription: string;
      BackgroundHero: {
        id: number;
        url: string;
      };
    };
    meta: {};
  }
  