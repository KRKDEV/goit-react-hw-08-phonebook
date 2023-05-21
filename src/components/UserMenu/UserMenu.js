import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Box, Button, Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Typography>{user.name}</Typography>
        <Typography>{user.email}</Typography>
      </Stack>
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
