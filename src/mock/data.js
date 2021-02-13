import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ajea Smith | Front-End Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ajea Smith.',
  subtitle: `I'm a Front-End Developer`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'ajea.jpg',
  paragraphOne: `Hey, I'm Ajea. I'm a Software developer for both mobile and the web. I've been enjoying the journey. 80% of the time I'm busy making beautiful things with the web while keeping my skills sharp with my favorite YouTubers like Traversy Media, New Boston, Kevin Powell, Net Ninja, CodeWithChris, and more. The other 20% is spent outside skateboard, walking, and bike riding, etc. `,
  paragraphTwo: `Fun fact, my favorite music to code to is Trip Hop / Lofi mix, Matt Corby, Amy Whinehouse, and Twenty One Pilots.`,
  resume: 'https://drive.google.com/file/d/1oLOnwqrtDLVGKecjzeW3IdZEuE8RMkrK/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'YTComments.png',
    title: 'YouTube Comments Analyst',
    info: 'A web app that calculates the positivity of a youtube video based on their comments.',
    info2: 'React, Ant-Design, Youtube Data API',
    url: 'https://youtubeanalyst.netlify.app/',
    repo: 'https://github.com/AjeaSmith/FrontendGuide/tree/master/React/commentanalytics', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Contact Me',
  email: 'smithajea@rocketmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ajeasmith',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ajea-smith/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AjeaSmith',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
