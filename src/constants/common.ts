export const NAV_ITEMS = [
    {
        id: 0,
        title: 'Home',
        link: '/'
    },
    {
        id: 1,
        title: 'Resume',
        link: '/resume'
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
    // {
    //     id: 3,
    //     title: 'About me',
    // }
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
    {
        id: 2,
        title: 'My Skills',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis impedit cum minima maxime! Libero repellat consequatur culpa magni, maxime', 
        handle: 'skills',
        items: [
            {
                id: 0,
                title: 'Programming Languages',
                skills: 'Javascript, Typescript, Dart, JAVA, C++.',
            },
            {
                id: 1,
                title: 'Technologies',
                skills: 'Angular, Next, React, IONIC, React-Native, ElectronJS, Node, Express, MongoDB, Bootstrap, Material UI, Nz-Zorro, Handlebars, Google Maps API, MapBox Api, Socket.IO, Medusa.js.',
            },
            {
                id: 2,
                title: 'Tools',
                skills: 'Git, Jira, Trello, VS Code, Android Studio, XCode, VirtualBox, Firebase, MongoDB Compass.',
            },
            {
                id: 2,
                title: 'Soft Skills',
                skills: 'Diligent, Attention to Details, Team Work, Problem Solving, Adaptability.',
            },
        ]
    }
]