import { Box, TextField, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box
      component="form"
      sx={{ mt: 1 }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="outlined-required"
        label="Email Address"
        type="email"
        name="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="outlined-required"
        label="Password"
        name="password"
        type="password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Typography>
        Don't have an account?{' '}
        <Link
          to="/register"
          style={{ textDecoration: 'none', color: '#e74c3c' }}
        >
          Register
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
