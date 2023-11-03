// gitprofile.config.js

const config = {
  github: {
    username: 'rmchauncey', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'robert-chauncey',
    phone: '2523393510',
    email: 'robertchauncey3@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1aaOjWsZoGR1eBAKOELOHMCtgw18Qy3hW/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'JavaScript',
    'Microsoft MySQL Server',
    'Git',
    'CSS',
  ],
  experiences: [
    {
      company: 'Howard Hanna William E. Wood',
      position: 'REALTOR',
      from: 'September 2020',
      to: 'January 2022',
      companyLink: 'https://www.howardhanna.com/Office/Detail/Elizabeth-City/007705',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'East Carolina University College of Business',
      degree: 'Bachelor of Science in Business Administration, Management Information Systems',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'College of the Albemarle',
      degree: 'Associate of Arts',
      from: '2018',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Elavator Pitch',
      description:
        '',
      imageUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjcyNS0wMTIuanBn.jpg',
      link: 'https://docs.google.com/document/d/1V6cWqGz2OShy49zP6QQHubutHVBFP3DGRcy_kplSpBM/edit?usp=sharing',
    },
    {
      title: 'Packet Tracer Badge',
      description:
        '',
      imageUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjcyNS0wMTIuanBn.jpg',
      link: 'https://drive.google.com/file/d/1ih7hx2YThCblzumrniu_-ebk75zoAC5J/view?usp=sharing',
    },
     {
      title: '(ISC)2 Badge',
      description:
        '',
      imageUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjcyNS0wMTIuanBn.jpg',
      link: 'https://drive.google.com/file/d/1LPZ5RN7FvUnW3W_onrL7JwqZ7n3crrN2/view?usp=sharing',
    },
     {
      title: 'AWS Badge',
      description:
        '',
      imageUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjcyNS0wMTIuanBn.jpg',
      link: 'https://example.com',
    },
     {
      title: 'Financial Services Fictional Case',
      description:
        '',
      imageUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjcyNS0wMTIuanBn.jpg',
      link: 'https://docs.google.com/document/d/1OdK7PerjbSNdnuh5x9zd09e0OYtoZtnM/edit?usp=sharing&ouid=108312881197280114839&rtpof=true&sd=true',
    },
     {
      title: 'NIST Security Incident',
      description:
        '',
      imageUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjcyNS0wMTIuanBn.jpg',
      link: 'https://docs.google.com/document/d/1B-504kWFHNL86aPSL4ADtotd1wMGNhtq/edit?usp=sharing&ouid=108312881197280114839&rtpof=true&sd=true',
    },
     {
      title: 'Home Network Heatmap',
      description:
        '',
      imageUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjcyNS0wMTIuanBn.jpg',
      link: 'https://drive.google.com/file/d/1ahzqIX1qAAdrxcWcCoyCyKtpBVycd_OM/view?usp=sharing',
    },
     {
      title: 'Kali Linux',
      description:
        '',
      imageUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjcyNS0wMTIuanBn.jpg',
      link: 'https://docs.google.com/document/d/149hVII4leJVMOPZ4TxAb3H0XVStd0ZcA/edit?usp=sharing&ouid=108312881197280114839&rtpof=true&sd=true',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
