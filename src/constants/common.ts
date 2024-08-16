import ProjectImageOne from '../../public/images/1.jpg'
import ProjectImageTwo from '../../public/images/2.jpg'
import ProjectImageThree from '../../public/images/3.jpg'

export const NAV_ITEMS = [
    {
        id: 0,
        title: 'Home',
        link: '/'
    },
    {
        id: 1,
        title: 'About Me',
        link: '/about'
    },
    {
        id: 2,
        title: 'Projects',
        link: '/projects'
    },
    {
        id: 3,
        title: 'Contact',
        link: '/contact'
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
    }
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