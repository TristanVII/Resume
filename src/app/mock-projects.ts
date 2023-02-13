import { Project } from './project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    Title: 'Employee Management Webapp',
    desc: 'Group project aimed to develop and test a web application while following SCRUM methodologies',
    tech: 'Python, Flask, Bootstrap',
    url: 'https://github.com/PenPen7531/ACIT-2911-CubeTech-Project',
  },
  {
    id: 2,
    Title: 'Reminder App',
    desc: 'Designed a responsive web application utilizing Express for the CRUD api. User can login with authentication and manage their reminders',
    tech: 'NodeJS, EJS, PassportJS, Express',
    url: 'https://github.com/TristanVII/ReminderApp',
  },
  {
    id: 3,
    Title: 'League of Legends Shooter',
    desc: 'Built a 3rd person shooter game in pygames. The game has a user login interface and scores are posted to a front end utilizing Flask as its backend API.',
    tech: 'Python, Flask, Pygame',
    url: 'https://github.com/TristanVII/Python_final_project',
  },
  {
    id: 4,
    Title: 'Discord OpenAI Bot',
    desc: 'Personal project Discord bot utilizing the OpenAI API to answer discord users questions',
    tech: 'Python, OpenAI API, Discord API',
    url: 'https://github.com/TristanVII/discordopenaibot',
  },
  {
    id: 5,
    Title: 'Load Balancer Project',
    desc: 'Designed a load balancing infrastructure on digital ocean, with VPC and firewall. The loadbalancer balanced incoming traffic between two nodeJS applications. The github includes a detailed guide on how to construct this infrastructure.',
    tech: 'NodeJS, Caddy, Digital Ocean',
    url: 'https://github.com/TristanVII/2420_assign2',
  },
];
