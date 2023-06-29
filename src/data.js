//  icons
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiTwitter,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/ss1.webp';
import Project2 from './assets/img/projects/ss2.webp';
import Project3 from './assets/img/projects/ss3.webp';
import Project4 from './assets/img/projects/ss4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';
import Project7 from './assets/img/projects/p1.webp';
import Project8 from './assets/img/projects/p2.webp';
import Project9 from './assets/img/projects/p3.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/rorr.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/felix-sowah/',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/_lan.celot/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Lancelot-SO',
  },
  {
    icon: <FiTwitter />,
    href: 'https://twitter.com/lancelot_hans',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'CarBnB',
    href: 'https://github.com/Lancelot-SO/carbnb-frontend',
    category: 'web development',
  },
  {
    id: '2',
    image: Project2,
    name: 'Budget App',
    href: 'https://budget-app-2wqv.onrender.com',
    category: 'web development',
  },
  {
    id: '3',
    image: Project3,
    name: 'Weather App',
    href: 'https://weatherapp-lvo9.onrender.com',
    category: 'web development',
  },
  {
    id: '4',
    image: Project4,
    name: 'Bookstore',
    href: 'https://store-oi8n.onrender.com',
    category: 'web development',
  },
  {
    id: '5',
    image: Project5,
    name: 'U&I Technology',
    href: 'https://ui-cleaning-services.business.site/',
    category: 'branding',
  },
  {
    id: '6',
    image: Project6,
    name: 'U&I Designs',
    href: 'https://ui-cleaning-services.business.site/',
    category: 'UI/UX design',
  },
  {
    id: '7',
    image: Project7,
    name: 'U&I Designs',
    href: 'https://ui-cleaning-services.business.site/',
    category: 'UI/UX design',
  },
  {
    id: '8',
    image: Project8,
    name: 'U&I Technology',
    href: 'https://ui-cleaning-services.business.site/',
    category: 'branding',
  },
  {
    id: '9',
    image: Project9,
    name: 'U&I Designs',
    href: 'https://ui-cleaning-services.business.site/',
    category: 'UI/UX design',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description: `Partnerss with influential bloggers, content creators, or industry experts. 
    We provide exceptional service and maintain good relationships with clients. Satisfied clients are more likely to recommend your services to others.`,
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description: `I write code and develop software applications using various programming languages, 
    frameworks, and tools. I follow best practices, coding standards, and adhere to project guidelines.`,
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description: `We provide highly rated products for big and small companies as well as individuals. 
    Our services are the best with efficiency and quality serving as our top priority for customers happiness`,
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'We master in optimization and improving the visibility. Our goal is to increase organic (non-paid) traffic to a website by making it more relevant and authoritative in the eyes of',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText: `Love the simplicity of the service. Good design, will recommend 
    you to my colleages for a project collaboration.`,
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      `I worked remotely with Felix on a React project. His technical and soft skills made the pair 
      programming very enjoyable. The one more thing that I truly admire in him is, his determination 
      to find solutions whenever were facing blockers. To all recruiters out there,
      Felix can deliver the job as Software Engineer.`,
    authorName: 'Anny Lane',
    authorPosition: 'Head of Design, Netflix',
  },
  {
    authorImg: TestiImage3,
    authorText:
      `He is a great developer who is always eager to learn and better himself at every opportunity. 
      An amazing personality who loves a good laugh.
      Truly a great person to have on your team. He would be a good fit for any projects you assigned to him.`,
    authorName: 'Brenda May',
    authorPosition: 'Project Manager, Meta',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at Fsowah001@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Accra, Ghana',
    description: 'Serving clients worldwide',
  },
];
