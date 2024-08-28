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
        link: '/about'
    },
    {
        id: 3,
        title: '#I can help you with',
        link: '/projects'
    },
    {
        id: 4,
        title: '#my way of working',
        link: '/working'
    },
    {
        id: 3,
        title: "#ping me",
        link: '/contact'
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

export const RESUME_NAV_ITEMS =  [
    {
        id: 0,
        title: 'Experience',
        handle: 'experience'
    },
    // {
    //     id: 1,
    //     title: 'Education',
    //     handle: 'education'
    // },
    {
        id: 2,
        title: 'Skills',
        handle: 'skills'
    },
    {
        id: 3,
        title: 'About me',
        handle: 'about'
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
                title: 'The begining of the phase of confusion and frustration',
                description: 'After my B.tech i was confused and have no guidance. So, as a regular Indian graduate i started preparing for government jobs.',
                date: '2014-2016'
            },
            {
                id: 1,
                order: 2,
                title: 'The begining of the phase of confusion and frustration',
                description: 'While i was preparing for govt. jobs. I started working part-time as a broadcast assistant in All India Radio.',
                date: '2016 - 2017'
            },
            {
                id: 2,
                order: 3,
                title:'',
                description: 'At this point i auditioned for the position of Announcer in All India Radio and got selected. (on the basis of as and when required)',
                date: '2017 - present'
            },
            {
                id: 2,
                order: 4,
                title:'',
                description: 'A long time has passedI got no luck With govt. jobs',
                date: '2019 - 2021'
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
                title: 'The begining of the phase of confusion and frustration',
                description: 'The begining of the phase of confusion and frustration. So, as a regular Indian graduate i started preparing for government jobs.',
                date: '2014-2016'
            },
            {
                id: 1,
                order: 2,
                title: 'The begining of the phase of confusion and frustration',
                description: 'While i was preparing for govt. jobs. I started working part-time as a broadcast assistant in All India Radio.',
                date: '2016 - 2017'
            },
            {
                id: 2,
                order: 3,
                title:'',
                description: 'At this point i auditioned for the position of Announcer in All India Radio and got selected. (on the basis of as and when required)',
                date: '2017 - present'
            },
            {
                id: 2,
                order: 4,
                title:'',
                description: 'A long time has passedI got no luck With govt. jobs',
                date: '2019 - 2021'
            }
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
                title: '',
                description: 'After my B.tech a phase of confusion and frustration started for me. I was having no clarity of future at this point. So, as a regular Indian graduate i started preparing for government jobs.',
                date: '2014-2016'
            },
            {
                id: 1,
                order: 2,
                title: 'Part time Job',
                description: 'During my preprations for govt. jobs I started working part-time as a broadcast assistant in All India Radio. While working in this role i managed the office work and assisted announcers in and out of studios.',
                date: '2016 - 2017'
            },
            {
                id: 2,
                order: 3,
                title: 'Working as an Announcer',
                description: 'At this point i auditioned for the position of Announcer in All India Radio and got selected. (working on the basis of as and when required)',
                date: '2017 - present'
            },
            {
                id: 2,
                order: 4,
                title: 'Working as Technician',
                description: 'A long period of time had passed since i graduated and with a tough competition I got no luck with govt. jobs but based on my technical degree i got an opportunity to work as a technician in a Private Radio station.',
                date: '2019 - 2021'
            },
            {
                id: 2,
                order: 5,
                title:'Pursuit for govt. job ends',
                description: 'Its been 7 years since i got my degree and during these 7 years i explored and tried different kind of jobs and options but during these years i kept on learning new software technologies and made projects based on which my first opportunity as a frontend developer awaits me. Its when i realised i always wanted to do this.',
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
        title: 'Codeferns Technologies Pvt. Ltd.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis impedit cum minima maxime! Libero repellat consequatur culpa magni, maxime',
    },
    {
        id: 2,
        checkpoint: 'Started working in a startup',
        role: 'Frontend developer', 
        date: '2021',
        title: 'Appitech Pvt. Ltd.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis impedit cum minima maxime! Libero repellat consequatur culpa magni, maxime',
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


export const RESUME_SECTIONS = [
    {
        id: 0,
        title: 'My Experience',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis impedit cum minima maxime! Libero repellat consequatur culpa magni, maxime', 
        handle: 'experience',
        items: [
            {
                id: 0,
                title: 'Codeferns Technologies Pvt. Ltd.',
                role: 'Software Engineer',
                period: '2022 - Present',
                description: ['Orchestrated a cutting-edge mobile application with custom maps capabilities, boosting user engagement by 20% and enhancing navigation accuracy by 30%.', 'Engineered a web application that aggregates financial news from multiple reputable sources, increasing user engagement by 40% and improving user satisfaction by 25%.'],
                isDesc: false
            },
            {
                id: 1,
                title: 'Appitech Pvt. Ltd.',
                role: 'Mobile Developer',
                period: '2021 - 2022',
                description: ['Spearheaded the development of e-commerce and e-wallet features, yielding a 25% surge in user engagement and positive app reviews.', 'Partnered with product managers to translate conceptual ideas into technically feasible solutions.'],
                isDesc: false
            },
        ]
    },
    {
        id: 2,
        title: 'My Skills',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis impedit cum minima maxime! Libero repellat consequatur culpa magni, maxime', 
        handle: 'skills',
        items: [
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
    },
    {
        id: 0,
        title: 'About me',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis impedit cum minima maxime! Libero repellat consequatur culpa magni, maxime', 
        handle: 'about',
        items: [
            {
                id: 0,
                title: 'Codeferns Technologies Pvt. Ltd.',
                role: 'Software Engineer',
                period: '2022 - Present'
            },
            {
                id: 1,
                title: 'Appitech Pvt. Ltd.',
                role: 'Frontend Developer',
                period: '2021 - 2022'
            },
        ]
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