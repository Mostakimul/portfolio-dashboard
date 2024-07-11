import { NavLink } from 'react-router-dom';
import { TUserPath } from '../types';

const hasDynamicSegments = (path: string): boolean => {
  return path.includes(':');
};

export const renderSidebarItems = (item: TUserPath) => {
  return (
    <li key={item.name}>
      {item.path && item.name && !hasDynamicSegments(item.path) && (
        <NavLink to={`/${item.path}`}>{item.name}</NavLink>
      )}
      {item.children && (
        <details>
          <summary className="mb-2">{item.name}</summary>
          <ul>{item.children.map((child) => renderSidebarItems(child))}</ul>
        </details>
      )}
    </li>
  );
};
