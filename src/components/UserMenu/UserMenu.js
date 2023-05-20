import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      Welcome {user.name}
      <Button
        type="button"
        variant="outlined"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
