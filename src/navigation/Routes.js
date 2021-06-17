import Dashboard from '../pages/Dashboard';
import Product from '../pages/Products';
import Sales from '../pages/Sales';
import Purchase from '../pages/Purchase';
import User from '../pages/UserManagement';
import Settings from '../pages/Settings';
import Suppliers from '../pages/Suppliers';
import Payroll from '../pages/Payroll';
import Report from '../pages/Reports';
import Customers from '../pages/Customers';

import {
  Dashboard as DashboardIcon,
  Group,
  AccountBox,
  TrendingUp,
  Settings as SettingsIcon,
  Equalizer,
  GetApp,
  Storage,
  ShoppingCart,
  Payment,
} from '@material-ui/icons';

const routes = [
  {
    path: '/',
    icon: <DashboardIcon fontSize='large' />,
    label: 'Dashboard',
    key: 'dashboard',
    isHidden: false,
    permission: [],
    exact: true,
    component: Dashboard,
  },
  {
    path: '/customers',
    icon: <Group fontSize='large' />,
    label: 'Customers',
    key: 'users',
    isHidden: false,
    permission: [],
    component: Customers,
  },
  {
    path: '/products',
    icon: <Storage fontSize='large' />,
    label: 'Product Management',
    key: 'products',
    isHidden: false,
    permission: [],
    component: Product,
  },
  {
    path: '/suppliers',
    icon: <GetApp fontSize='large' />,
    label: 'Suppliers',
    key: 'suppliers',
    isHidden: false,
    permission: [],
    component: Suppliers,
  },
  {
    path: '/purchase',
    icon: <ShoppingCart fontSize='large' />,
    label: 'Purchase',
    key: 'purchase',
    isHidden: false,
    permission: [],
    component: Purchase,
  },
  {
    path: '/sales',
    icon: <TrendingUp fontSize='large' />,
    label: 'Sales',
    key: 'sales',
    isHidden: false,
    permission: [],
    component: Sales,
  },
  {
    path: '/user-management',
    icon: <AccountBox fontSize='large' />,
    label: 'User Management',
    key: 'user-management',
    component: User,
  },
  {
    path: '/payroll',
    icon: <Payment fontSize='large' />,
    label: 'Payroll',
    key: 'payroll',
    isHidden: false,
    permission: [],
    component: Payroll,
  },
  {
    path: '/reports',
    icon: <Equalizer fontSize='large' />,
    label: 'Reports',
    key: 'reports',
    isHidden: false,
    permission: [],
    component: Report,
  },
  {
    path: '/settings',
    icon: <SettingsIcon fontSize='large' />,
    label: 'Settings',
    key: 'settings',
    isHidden: false,
    permission: [],
    component: Settings,
  },
];

export default routes;
