import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

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
        link: `${base}/blog`,
        icon: TextSnippetIcon
    },
]