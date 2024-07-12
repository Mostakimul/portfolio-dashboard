import Dashboard from '../pages/Dashboard';
import AddExperience from '../pages/experience/AddExperience';
import AllExperience from '../pages/experience/AllExperience';
import AddSkill from '../pages/skill/AddSkill';
import AllSkill from '../pages/skill/AllSkill';
import { routesName } from './routesName';

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
        path: routesName.ADD_EXPERIENCE,
        element: <AddExperience />,
      },
      {
        name: 'All Experience',
        path: routesName.ALL_EXPERIENCE,
        element: <AllExperience />,
      },
    ],
  },
  {
    name: 'Skill Management',
    children: [
      {
        name: 'Add skill',
        path: routesName.ADD_SKILL,
        element: <AddSkill />,
      },
      {
        name: 'All Skill',
        path: routesName.ALL_SKILL,
        element: <AllSkill />,
      },
    ],
  },
];
