export interface IEXPERIENCE {
  title: string;
  role: string;
  date: string;
  workType?: string;
  duration?: string;
  href?: string;
  location?: string;
  description: string[];
}

export interface IEXPERIENCES {
  year: string;
  experiences: IEXPERIENCE[];
}

export const EXPERIENCES: IEXPERIENCES[] = [
  {
    year: "2024",
    experiences: [
      {
        title: "Property Webmasters",
        role: "Frontend Developer",
        date: "September 2024 - Present",
        description: [
          "Working with Property Webmasters a website service provider in the real estate space as a Frontend Developer.",
          "Responsible for making improvements to the current platform and bring delight to PWM's customers.",
        ],
      },
      {
        title: "Amito",
        role: "Builder",
        date: "Jan 2024 - Present",
        description: [
          "During a career break early this year, I found myself getting into solopreneurship.",
          "Built a micro-SaaS dedicated for small store owners here in the Philippines using the tech stack NextJS, React, Clerk, Xata, Vercel to ship fast. It is a small Inventory and Sales Tracking app that is simple to use and allows store owners to gain insights on their store's performance e.g., tracking daily sales, notification of low or out of stock items, most sold items etc.",
          "This is still in the early stage of the product and I need to learn how to market the app to the right audience while building a brand for it. I am actively looking for freelance or full time work in order to bootstrap this venture.",
        ],
      },
    ],
  },
  {
    year: "2023",
    experiences: [
      {
        title: "VTVL",
        href: "https://vtvl.io",
        role: "Frontend Developer",
        workType: "Full time",
        date: "Sep 2022 - Dec 2023",
        duration: "1 year 3 months",
        location: "Singapore, Singapore · Remote",
        description: [
          "Our purpose is to help Web3 investors in their token management by automating token vesting and distribution.",
          "Implemented marketing website designed for web3 with integrated features.",
          "Created compelling UI and enhanced web app's overall user experience.",
          "Integrated with web3 features such as smart contracts for vesting and claiming using NextJS, web3-react and ethers.js.",
          "Improved overall development and testing efficiency by implementing workflow automations.",
          "Successfully launched the platform in a highly agile environment, earning recognition from our investors.",
        ],
      },
    ],
  },
  {
    year: "2022",
    experiences: [
      {
        title: "Mable",
        href: "https://mable.com.au",
        role: "Frontend Developer",
        workType: "Full time",
        date: "Dec 2021 - Sep 2022",
        duration: "9 months",
        location: "Sydney, New South Wales, Australia · Remote",
        description: [
          "Crafted highly accessible components advocating KISS and DRY practices.",
          "Designed and architected components based on function and brand.",
          "Fixed different types of issues like bugs, improvements and accessibility. ",
        ],
      },
    ],
  },
  {
    year: "2021",
    experiences: [
      {
        title: "Yondu, Inc.",
        href: "https://www.yondu.com/",
        role: "Solutions Architect",
        workType: "Full time",
        date: "Jan 2020 - Jun 2021",
        duration: "1 year 5 months",
        location: "BGC Taguig, Philippines · On-site",
        description: [
          "Studied and acquired AWS SolArch Associate Certificate.",
          "Designed solutions for a cinema mobile app.",
          "Transitioned cinema mobile app into an over-the-top video streaming platform.",
        ],
      },
      {
        title: "Yondu, Inc.",
        href: "https://www.yondu.com/",
        role: "Frontend Development Lead",
        workType: "Full time",
        date: "Feb 2017 - Dec 2019",
        duration: "2 years 10 months",
        location: "BGC Taguig, Philippines · On-site",
        description: [
          "Led Front End Developers in delivering WiFi captive portal interfaces.",
          // "Engaged with stakeholders in assessing WiFi captive portal front end feasibility due to limitations.",
          "Produced a config-based theming and connection of WiFi portals in AWS.",
          "Spearheaded use of Vue.JS for new projects.",
          "Implemented numerous projects with responsive, user-friendly interfaces that integrates seamlessly with backend APIs.",
        ],
      },
      {
        title: "Yondu, Inc.",
        href: "https://www.yondu.com/",
        role: "UXD Team Capability Lead",
        workType: "Full time",
        date: "Oct 2016 - Feb 2017",
        duration: "4 months",
        location: "BGC Taguig, Philippines · On-site",
        description: [
          "Review project development estimates for Tech pre-sales team adding increased project contracts.",
          "Track team resources and project management ensuring team efficiency.",
          "Managed UX/UI Design and Front End Development roles.",
        ],
      },
      {
        title: "Yondu, Inc.",
        href: "https://www.yondu.com/",
        role: "UX/UI Designer / FE Dev",
        workType: "Full time",
        date: "Oct 2015 - Oct 2016",
        duration: "1 year",
        location: "BGC Taguig, Philippines · On-site",
        description: [
          "Created wireframes, mockups or storyboard for custom development projects.",
          "Converted mock-ups into working web page / app within agreed timelines.",
          "Constructed Front End Development workflow using Grunt (early days of web development automations).",
        ],
      },
    ],
  },
  {
    year: "2015",
    experiences: [
      {
        title: "Betica Tech",
        href: "https://www.betica.com/",
        role: "Frontend Developer",
        workType: "Full time",
        date: "May 2015 - Aug 2015",
        duration: "3 months",
        location: "BGC Taguig, Philippines · On-site",
        description: [
          "Javascript developer contributing to the creation of a single page web application for an online gaming platform in UK.",
          "I am responsible in delivering rich experience to user interface as well as its functionality.",
        ],
      },
      {
        title: "Victa Software Solutions",
        role: "Web Dev / Graphic Designer",
        workType: "Full time",
        date: "Aug 2013 - Mar 2015",
        duration: "1 year 7 months",
        location: "Philippines · On-site",
        description: [
          "Creation of concepts for proposal to Japanese client in web development.",
          "Analysis and Research on Web Projects for usability of Japanese employees.",
          "Implementation of Agile Development methodology.",
          "Provide prototypes for proposed project.",
          "Supervise web development team.",
          "Graphic Design + Coding for front-end and back-end projects.",
        ],
      },
      {
        title: "Infinite Motivation",
        role: "Web Dev / Graphic Designer",
        workType: "Full time",
        date: "Jun 2010 - Jul 2013",
        duration: "3 years 1 month",
        location: "Philippines · On-site",
        description: [
          "Responsible for integrating front-end layout to actual website in order to meet expected results.",
          "Create custom back-end features based on client request or the distinction of the project.",
          "Study for brainstormed project ideas within the team.",
          "Conduct research for development and its usability.",
        ],
      },
      {
        title: "COMTEQ Computer & Business College",
        role: "Web Development Instructor",
        workType: "Part time",
        date: "Jun 2011 - May 2012",
        duration: "10 months",
        location: "Philippines · On-site",
        description: [
          "Teaching early days web development:",
          "HTML, CSS, Javascript, PHP, Graphic Design with Adobe Photoshop",
          "Doing event graphic designs to support school",
        ],
      },
      {
        title: "John Graphic Image Advertising",
        role: "Graphic Designer",
        workType: "Full time",
        date: "Jan 2008 - Jun 2010",
        duration: "2 years 5 months",
        location: "Philippines · On-site",
        description: [
          "Generation of concept and art from scratch to finish.",
          "Development of designs for different types of print mediums.",
        ],
      },
    ],
  },
];
