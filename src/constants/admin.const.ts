import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import CategoryIcon from '@mui/icons-material/Category';

const base = '/admin'

export const ADMIN_NAV_ITEMS = [
    {
        id: 0,
        title: 'Dashboard',
        link: `${base}`,
        icon: SpaceDashboardIcon
    },
    {
        id: 1,
        title: 'Blog',
        link: `${base}/posts/list`,
        icon: TextSnippetIcon
    },
    {
        id: 1,
        title: 'Categories',
        link: `${base}/categories/list`,
        icon: CategoryIcon
    },
]