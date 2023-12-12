import App from '../App';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { Layout } from '../pages/layout/Layout';

export function PublicRoute() {
  return [{ path: '/', element: <App /> }];
}

export function PrivateRoute() {
  return [
    {
      path: '/dashboard',
      element: <Layout />,
      children: [{ path: '/', element: <Dashboard /> }],
    },
  ];
}
