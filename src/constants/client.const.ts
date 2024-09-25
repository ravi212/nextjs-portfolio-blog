import ProjectImageOne from '../../public/images/1.jpg'
import ProjectImageTwo from '../../public/images/2.jpg'
import ProjectImageThree from '../../public/images/3.jpg'

export const NAV_ITEMS = [
    {
        id: 0,
        title: '#take me home',
        link: '/'
    },
    {
        id: 1,
        title: '#my journey',
        link: '/journey'
    },
    {
        id: 3,
        title: '#I can help you with...',
        link: '/skill'
    },
    // {
    //     id: 4,
    //     title: '#my way of working',
    //     link: '/working'
    // },
    {
        id: 5,
        title: "#ping me",
        link: '/contact',
    }
]

export const EXPERT_SECTION = [
    {
        id: 0,
        title: 'Bringing Your Online Vision to Life',
        description: ' I transform your ideas into vibrant, interactive websites that captivate your audience and drive results. I create stunning and user-friendly experiences. My backend work with Node.js and Express ensures your site is smooth, reliable, and secure.'
    },
    {
        id: 1,
        title: 'Crafting Engaging Mobile Journeys',
        description: 'I bring your mobile app ideas to life with intuitive and engaging experiences for both iOS and Android. With React Native and Flutter, I design apps that are visually appealing and perform seamlessly. My backend solutions keep your app responsive and reliable.'
    },
    {
        id: 2,
        title: 'Revolutionizing Desktop Applications',
        description: ' I design cross-platform desktop applications that blend functionality with elegance, offering a smooth and productive experience. Using Electron, I develop apps that fit perfectly into the desktop environment. My backend solutions ensure efficient performance and effortless data management.'
    }
]

export const EXPERTISE = [
    {
        title: 'Web Development',
        description: 'Bringing visuals to life through developing highly functional and scalable web solutions with strong backend support.'
    },
    {
        title: 'Mobile Development',
        description: 'Dynamic Hybrid Mobile Application Developer with Expertise in Cross-Platform Solutions.'
    },
    {
        title: 'Full Package',
        description: 'Get the best of both worlds for your website/mobile app, capture your brand identity and get fully functional features.'
    }
]

export const SOCIAL_ITEMS = [
    {
        id: 0,
        title: 'Github',
        type: 'github',
        link: 'https://github.com/ravi212'
    },
    {
        id: 1,
        title: 'LinkedIn',
        type: 'linkedIn',
        link: 'https://linkedin.com/in/ravir212',
    },
    {
        id: 2,
        title: 'Mail',
        type: 'mail',
        link: 'mailto:raviraina212@gmail.com',
    },

]


export const JOURNEY_MILESTONES = [
    {
        id: 0,
        checkpointId: 1,
        isExpand: true,
        milestones: [
            {
                id: 0,
                order: 1,
                title: 'As a Frontend Developer',
                description: "Starting as a Frontend Developer, I designed and implemented chat, notification, and subscription modules, integrated REST APIs and payment gateways, and led the development of a time activity tracking application and a video editor module for cross-platform desktop applications.",
                date: '2022'
            },
            {
                id: 1,
                order: 2,
                title: 'Got the opportunity to work as a Fullstack developer',
                description: "I had developed backend for my personal projects, but now is the time for me to excel and build it for client's oversea's.",
                date: '2023'
            },
            {
                id: 1,
                order: 3,
                title: 'Working as a Fullstack developer',
                description: "As a Fullstack Developer I have successfully developed and deployed cutting-edge solutions, including real-time APIs, engaging chat systems, custom maps with MapBox and Google Maps, robust admin panels, and dynamic ecommerce platforms using Medusa JS.",
                date: '2023'
            },
            {
                id: 2,
                order: 4,
                title:"Leading project's for Mobile & Web as a Software developer",
                description: "Working as a software developer has profoundly changed my perspective and personal growth. Today, I’m more confident and results-driven, with an unquenchable thirst to explore, learn, upskill, and continuously grow.",
                date: '2024'
            }
        ],
    },
    {
        id: 1,
        checkpointId: 2,
        isExpand: true,
        milestones: [
            {
                id: 0,
                order: 1,
                title: 'My experience with a startup',
                description: "The beauty of working in a startup lies in the opportunity to explore and engage with various modules and processes of software development, exactly what I was seeking at the start of my career.",
                date: '2021'
            },
            {
                id: 1,
                order: 2,
                title: 'As a Mobile Application Developer (Frontend/Hybrid)',
                description: "While working here, I built and deployed mobile apps for both Android and iOS using Ionic + Angular, Cordova, and React Native. I also implemented real-time chat with Socket.io, integrated notifications with Google Firebase, and developed a payment wallet system.",
                date: '2021'
            },
        ],
    },
    {
        id: 2,
        checkpointId: 3,
        isExpand: false,
        milestones: [
            {
                id: 0,
                order: 1,
                title: 'Career Dilemma',
                description: 'After completing my B.Tech, I faced a period of career uncertainty and began preparing for government job exams, only to realize my true passion lay elsewhere.',
                date: '2014-2016'
            },
            {
                id: 1,
                order: 2,
                title: 'Part time Job',
                description: "While preparing for government job exams, I took on a part-time role as a Broadcast Assistant at All India Radio, where I handled office operations and supported announcers both in and out of the studio. This experience not only honed my management and interpersonal skills but also fueled my passion for dynamic, people-centric roles.",
                date: '2016 - 2017'
            },
            {
                id: 2,
                order: 3,
                title: 'Working as an Announcer',
                description: "At this stage, I auditioned for and secured a role as an Announcer at All India Radio, where I’ve developed the crucial skill of punctuality through a flexible 'as and when required' schedule. I continue to thrive in this dynamic, on-call role, mastering the demands of live broadcasting. (working on the basis of as and when required)",
                date: '2017 - present'
            },
            {
                id: 2,
                order: 4,
                title: 'Working as Technician',
                description: "After graduation, facing stiff competition for government jobs, I leveraged my technical background to join a private radio station as a technician. There, I supported the technical team in installing radio transmitters and handled diagnostics, reporting, and troubleshooting of technical issues.",
                date: '2019 - 2021'
            },
            {
                id: 2,
                order: 5,
                title:'Pursuit for government job ends',
                description: 'Over the past seven years since earning my degree, I explored various career paths while consistently working on projects and staying connected to my technical background. This dedication led me to my first role as a Frontend Developer, where I discovered that this is where my true passion truly lies.',
                date: '2021'
            }
        ],
    },
]


export const JOURNEY = [
    {
        id: 0,
        checkpoint: 'I am here',
        date: 'Today',
        title: 'Journey in Progress...',
        description: '',
    },
    {
        id: 1,
        checkpoint: 'Started working in current company',
        date: '2022',
        role: '', 
        title: 'Codeferns Technologies Pvt. Ltd.',
        description: "My eternal hunger to learn, upskill and grow drived me to join my current company. Here i am transforming client's vision into real life working solutions.",
    },
    {
        id: 2,
        checkpoint: 'Started working in a startup',
        role: '', 
        date: '2021',
        title: 'Appitech Pvt. Ltd.',
        description: 'My Professional journey in the field of software starts from here. I contributed to projects like ecommerce, payment wallets etc. and also learned technical as well as interpersonal skills.',
    },
    {
        id: 3,
        checkpoint: 'Graduated',
        date: '2014',
        title: 'Bachelor of Technology',
        description: 'Computer Science & Engineering',
    },
]


export const SKILLS = [
    {
        id: 0,
        title: 'Web',
        skills: ['Angular', 'Next', 'React', 'Api Integration'],
    },
    {
        id: 1,
        title: 'Mobile',
        skills: ['React-Native', 'IONIC', 'Flutter'],
    },
    {
        id: 1,
        title: 'Desktop',
        skills: ['Electron', 'Angular', 'React'],
    },
    {
        id: 1,
        title: 'Design',
        skills: ['Tailwind CSS', 'Material UI', 'Ant Design', 'Bootstrap'],
    },
    {
        id: 2,
        title: 'Backend',
        skills: ['Javascript', 'Typescript', 'Node', 'Express', 'MongoDB', 'Api'] ,
    },
    {
        id: 3,
        title: 'Tools',
        skills: ['Android Studio', 'XCode', 'VirtualBox', 'Firebase Console', 'MongoDB Compass', 'Git', 'Jira', 'Trello', 'VS Code'],
    },
    {
        id: 4,
        title: 'Soft Skills',
        skills: ['Diligent', 'Attention to Details', 'Team Work', 'Problem Solving', 'Adaptability'],
    },
]

export const PROJECTS = [
    {
        id: 0,
        title: 'Project 1',
        description: 'desc',
        technologies: ['Next',' React'],
        images: [ProjectImageOne, ProjectImageTwo, ProjectImageThree],
        links: [
            {
                id: 0,
                site: 'github',
                icon: '',
            },
            {
                id: 0,
                site: 'live',
                icon: '',
            }
        ]
    },
    {
        id: 1,
        title: 'Project 2',
        description: 'desc',
        technologies: ['React',' Next'],
        images: [ProjectImageTwo, ProjectImageOne, , ProjectImageThree],
        links: [
            {
                id: 0,
                site: 'github',
                icon: '',
            },
            {
                id: 0,
                site: 'live',
                icon: '',
            }
        ]
    },
    {
        id: 2,
        title: 'Project 3',
        description: 'desc', 
        technologies: ['Node',' Express'],
        images: [ProjectImageThree ,ProjectImageTwo, ProjectImageOne],
        links: [
            {
                id: 0,
                site: 'github',
                icon: '',
            },
            {
                id: 0,
                site: 'live',
                icon: '',
            }
        ]
    }
]