
// types/header.ts


export interface submenu { 
   Label:string;
   url:string;
   IDno:number;
}

export interface SubLink {
  id: number;
  Label: string;
  url: string | null;
  isButton: boolean;
  ButtonType: string | null;
  Submenu:submenu[];
}
export interface NavLink {
  id: number;
  Label: string;
  URL: string;
  ButtonType: string;
  IsExternal: boolean;
  SubLinks: SubLink[];
}

export interface Logo {
  id: number;
  href: string;
  alt_text: string;
  logo_img: {
    id: number;
    url: string;
    alternativeText: string;
  };
}

export interface HeaderData {
  id: number;
  NAVLINK: NavLink[];
  logo_gpr: Logo;
}

// Types for Footer 


export interface FooterLogo {
  id: number;
  href: string;
  alt_text: string;
}

export interface ContactItem {
  id: number;
  Label: string;
  value: string;
  OnClickUrl: string;
  IsExternal: boolean;
}

export interface UseFullLinkItem {
  id: number;
  Label: string;
  Url: string;
  IsExternal: boolean;
}

export interface FooterData {
  id: number;
  documentId: string;
  contactNo: number;
  MailID: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Logo: FooterLogo;
  contactItem: ContactItem[];
  footerLinks:UseFullLinkItem[];
}

// Main Section -- Hero Section 

export interface MediaFormat {
  name?: string;
  hash?: string;
  ext?: string;
  mime?: string;
  path?: string | null;
  width?: number;
  height?: number;
  size?: number;
  url?: string;
}
export interface BackgroundHero {
  id:number;
  name: string;
  alternativeText: string | null;
  width: number | null;
  height: number | null;
  formats: {
    thumbnail?: MediaFormat;
    small?: MediaFormat;
    medium?: MediaFormat;
    large?: MediaFormat;
  } | null;
  hash: string;
  ext: string;
  size: number;
  url: string;
 
}

export interface HeroData {
    id: number;
    documentId: string;
    MainSlogan: string;
    MainDescription: string;
    SubTitle:string;
    completeProjectNo: number;
    BackgroundHero: BackgroundHero;

}

// Contact Slider ( RIGHT )

export interface ContactItem {
  id: number;
  Label: string;
  value: string;
  OnClickUrl: string;
  IsExternal: boolean;
}

export interface LogoData {
  id: number;
  href: string;
  alt_text: string;
}

export interface ContactSidebarData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  VisitBtn: string;
  Logo: LogoData;
  ContactData: ContactItem[];
}


// 2 Section   -- About Company 

export interface getAboutMedia {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number | null;
    height: number | null;
    formats: {
      thumbnail?: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        url: string;
        width: number;
        height: number;
        size: number;
      };
    }
    hash: string;
    ext: string;
    url: string;
  
}

export interface AboutCompanyData {
  id: number;
  Title: string;
  Description: string;
  Media : getAboutMedia;
  menu: {
    id: number;
    label: string;
    url: string;
    count:string;
  }[];
}

// Main Service Page / Section  


export interface ServiceIcon {
  id: number;
  url: string;
  width: number;
  height: number;
  alternativeText: string | null;
}
export interface ServiceMenuItem {
  id: number;
  ServiceName: string;
  ServiceDescription:string;
  ServicePageUrl: string;
  ServiceIcon: ServiceIcon[];   // <-- This is the icon field
}


export interface ServiceData {
  id: number;
  ServicePageTitle: string;
  serviceMenu: ServiceMenuItem[];
}


// Recent Work  
export interface Media {
  id: number;
  name: string;
  width: number;
  height: number;
  url: string;
  
}
export interface ProjectImage {
  id: number;
  alt: string;
  image: Media;
}
export interface ProjectCard {
  id: number;
  ProjectName: string;
  UrlToProject: string;
  count_id:number;
  Project_img: ProjectImage;
}

export interface RecentWorkData {
  id: number;
  documentId: string;
  PageTitle: string;
  PageDescription: string;
  ProjectCard: ProjectCard[];
}


// Team Members 

      // Avatar Component
    export interface Avatar {
      id: number;
      alt: string | null;
      image: {
        id: number;
        url: string; // e.g. "/uploads/member1.jpg"
        name: string;
      };
    }

    // SocialLinks Component
    export interface SocialLink {
      id: number;
      SocialUrl: string;
      IsExternal: boolean;
      SocialLogo?: {
        id: number;
        url: string;
        name: string;
      } | null;
    }

    // TeamCard Component
    export interface TeamCard {
      id: number;
      MemberName: string;
      MemberRole: string;
      Avtar: Avatar;
      SocialLinks: SocialLink[];
    }

    // Root TeamSection Response
    export interface TeamSectionData {
      id: number;
      PageTitle: string;
      TeamCard: TeamCard[];
    }



    //  Active Client Number 

     export interface ActiveClient { 
        id: number;
        documentId: string;
        ActiveClientNumber: number;
        createdAt: string;  
        updatedAt: string;   
        publishedAt: string; 
     }


     //  TESTIMONIAL DATA  


export type TestimonialAvatar = {
  id: number;
  name: string;
  caption: string | null;
  width: number;
  height: number;
  url: string;
};

export type Testimonial = {
  id: number;
  quote: string;
  authorTitle: string;
  authorName: string;
  avatar: TestimonialAvatar;
  rating:number;
};

  export type TestimonialData = {
    TestimonialData: Testimonial[];
};



 // Blog Page  Data 


          // ✅ Text block
        export interface BlogContentChild {
          type: "text";
          text: string;
          bold?: boolean;
        }

        export interface BlogContentBlock {
          type: "paragraph";
          children: BlogContentChild[];
        }

        // ✅ Image formats
        export interface ImageFormat {
          url: string;
          width: number;
          height: number;
        }

        export interface ImageFormats {
          thumbnail?: ImageFormat;
          small?: ImageFormat;
          medium?: ImageFormat;
          large?: ImageFormat;
        }

        // ✅ Blog media
        export interface BlogMedia {
          id: number;
          name: string;
          url: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: ImageFormats;
        }

        // ✅ Single blog item
        export interface BlogItem {
          description: string;
          publishedAt: any;
          Blog_id: number;
          author: string;
          BlogTitle: string;
          Date: string;
          BlogContent: BlogContentBlock[];
          BlogMedia?: BlogMedia; // optional if not always present
        }

        // ✅ API response for /api/blog
        
        export interface BlogResponse {
            id: number;
            PageTitle: string;
            DocumentId:string;
            Blog: BlogItem[];
        
        }
 // Slider 1 == WHY US 



export interface MediaFormat1 {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;

}

// Media object
export interface Media {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

// WhyUsCard
export interface WhyUsCard {
  id: number;
  title: string;
  description: string;
}

export interface WhyUsData {
  id: number;
  documentId: string;
  PageTitle: string;
  Media: Media;
  WhyUsCard: WhyUsCard[];
}


//  Slide 2 == Expertises 

export interface SectionData {
  id:number;
  title:String;
  Description:String;
}
export interface Slide2Data { 
  id:number;
  pageTitle:String;
  sectionData:SectionData[];

}


// Slide 3 = ProjectIdia 

export interface Slide3Data {
   pageTitle:string;
   Slide3Media:Media;
   ContactData:ContactItem[];

}

