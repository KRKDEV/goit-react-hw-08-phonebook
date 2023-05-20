import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Box, Button, Typography } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Typography variant="h6">{user.name}</Typography>
      <Button
        type="button"
        variant="outlined"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </Box>
  );
};

export default UserMenu;
