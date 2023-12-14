import App from '../App';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { LayoutPage } from '../pages/layout/LayoutPage';

export function PublicRoute() {
  return [{ path: '/', element: <App /> }];
}

export function PrivateRoute() {
  return [
    {
      path: '/',
      element: <LayoutPage />,
      children: [{ path: '/', element: <Dashboard /> }],
    },
  ];
}
