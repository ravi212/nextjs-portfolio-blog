
// Theme Props
type ThemeProviderProps = {
    children: React.ReactNode
}

type ThemeContextProps = {
    theme: string;
    switchThemeTo: (theme: string) => void;
}

// Navbar Props
type NavBarProps = {
    openDrawer: boolean; 
    toggleDrawer: () => void,
}

type NavItemProps = {
    title: string;
    link: string;
    type: string
}


//Social Icons Props
type SocialItemProps = {
    title: string;
    link: string;
    type: string
}

// Drawer Menu Props
type DrawerMenuProps = {
    open: boolean;
    onClose: () => void,
    breakPoint: number
}


//RESUME SECTIONS
interface ResumeItems  {
    id: number;
    title: string;
    role?: string;
    period?: string;
    description?: string[];
    isDesc?: boolean;
    skills?:  string[];
}

type ResumeSectionProps = 
    {
        id: number;
        title: string;
        description: string ;
        handle: string;
        items: ResumeItems[];
    }
