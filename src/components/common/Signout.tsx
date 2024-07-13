import { logout } from '../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../redux/hooks';
import { ALERTS } from '../../utils/alerts';

const Signout = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(logout())}
      className="btn btn-sm btn-outline btn-error"
    >
      {ALERTS.LOGOUT}
    </button>
  );
};

export default Signout;
