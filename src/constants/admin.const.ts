import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import CategoryIcon from '@mui/icons-material/Category';
import GroupIcon from '@mui/icons-material/Group';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { ProjectPlatform } from '@/enum/enum';

const base = '/admin'

export const ADMIN_NAV_ITEMS = [
    {
        id: 0,
        title: 'Dashboard',
        link: `${base}`,
        icon: SpaceDashboardIcon,
        isOpen: true
    },
    {
        id: 1,
        title: 'Messages',
        link: `${base}/message`,
        icon: TextSnippetIcon,
        isOpen: true
    },
    {
        id: 2,
        title: 'Category',
        link: `${base}/category`,
        icon: CategoryIcon,
        isOpen: false
    },  
    {
        id: 3,
        title: 'Projects',
        link: `${base}/project`,
        icon: AccountTreeIcon,
        isOpen: false
    },
]


export const Platforms = [ProjectPlatform.WEB, ProjectPlatform.IOS, ProjectPlatform.ANDROID, ProjectPlatform.DESKTOP]