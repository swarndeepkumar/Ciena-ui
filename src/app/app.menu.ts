import { MenuItem } from './menu.service';
export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'fa fa-tachometer fa-4x',
        route: '/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'fa fa-globe fa-4x',
        route: '/countries',
        submenu: null
    },
    {
        text: 'Settings',
        icon: 'fa fa-cogs fa-4x',
        route: '/settings',
        submenu: null
    }
]