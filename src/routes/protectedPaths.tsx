import Dashboard from '../pages/Dashboard';
import AddExperience from '../pages/experience/AddExperience';
import AllExperience from '../pages/experience/AllExperience';

export const protectedPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    name: 'Experience Management',
    children: [
      {
        name: 'Add Experience',
        path: 'add-experience',
        element: <AddExperience />,
      },
      {
        name: 'All Experience',
        path: 'all-ecperience',
        element: <AllExperience />,
      },
    ],
  },
];
