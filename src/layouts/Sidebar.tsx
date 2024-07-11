import { useNavigate } from 'react-router-dom';
import { selectCurrentUser } from '../redux/features/auth/authSlice';
import { useAppSelector } from '../redux/hooks';
import { protectedPaths } from '../routes/protectedPaths';
import { renderSidebarItems } from '../utils/renderSidebarItems';

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();

  let content = null;

  if (!user) {
    navigate('/login');
  } else {
    content = content = protectedPaths.map((item) => renderSidebarItems(item));
  }

  return <ul className="menu bg-base-200 w-56 h-full p-4 gap-2">{content}</ul>;
};

export default Sidebar;
