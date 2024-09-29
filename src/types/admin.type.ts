type HeaderProps = {
    onClick: (state: boolean) => void;
}

type SideMenuProps = {
    isOpen: boolean; 
    onClose: () => void;
}

type AdminNavItems = {
    id: number,
    title: string,
    link: string,
    icon: any
}

type ProjectType = {
    _id?: string;
    title: string;
    slug: string;
    description: string;
    technologies: [string];
    coverImage: string;
    isRecent?: boolean;
    platform: [PlatformType];
    createdAt?: any
}

type PlatformType = {
    title: string;
    link: string
}