import { RiAlignJustify } from 'react-icons/ri';
import { Outlet } from 'react-router-dom';
import Signout from '../components/common/Signout';
import { selectCurrentUser } from '../redux/features/auth/authSlice';
import { useAppSelector } from '../redux/hooks';
import Sidebar from './Sidebar';

const MainLayout = () => {
  const user = useAppSelector(selectCurrentUser);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center p-2 bg-gray-900">
        {/* Mobile breadcum icon */}
        <div className="w-full flex items-center justify-end">
          <label
            htmlFor="my-drawer-2"
            className="drawer-button lg:hidden text-gray-200"
          >
            <RiAlignJustify size={30} />
          </label>
        </div>

        {/* Page goes here */}
        <div className="w-full h-full p-2">
          <div className="flex items-center justify-end gap-5">
            <div className="badge badge-accent badge-outline">
              Name: {user?.name}
            </div>

            <Signout />
          </div>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default MainLayout;
