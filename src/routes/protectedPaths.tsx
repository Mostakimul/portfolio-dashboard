import AddBlog from '../pages/blog/AddBlog';
import AllBlogs from '../pages/blog/AllBlogs';
import Dashboard from '../pages/Dashboard';
import AddExperience from '../pages/experience/AddExperience';
import AllExperience from '../pages/experience/AllExperience';
import AddProject from '../pages/project/AddProject';
import AllProject from '../pages/project/AllProject';
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
      {
        name: 'Edit Experience',
        path: `${routesName.EDIT_EXPERIENCE}/:id`,
        element: <AddExperience />,
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
      {
        name: 'Edit Skill',
        path: `${routesName.EDIT_SKILL}/:id`,
        element: <AddSkill />,
      },
    ],
  },
  {
    name: 'Project Management',
    children: [
      {
        name: 'Add project',
        path: routesName.ADD_PROJECT,
        element: <AddProject />,
      },
      {
        name: 'All Project',
        path: routesName.ALL_PROJECT,
        element: <AllProject />,
      },
      {
        name: 'Edit Project',
        path: `${routesName.EDIT_PROJECT}/:id`,
        element: <AddProject />,
      },
    ],
  },
  {
    name: 'Blog Management',
    children: [
      {
        name: 'Add blog',
        path: routesName.ADD_BLOG,
        element: <AddBlog />,
      },
      {
        name: 'All Blogs',
        path: routesName.ALL_BLOG,
        element: <AllBlogs />,
      },
      {
        name: 'Edit Blog',
        path: `${routesName.EDIT_BLOG}/:id`,
        element: <AddBlog />,
      },
    ],
  },
];
