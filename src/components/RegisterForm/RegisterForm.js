import { Box, TextField, Button, Typography } from '@mui/material';
import { register } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
        label="Username"
        type="text"
        name="name"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="outlined-required"
        label="Email Address"
        type="email"
        name="email"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="outlined-required"
        label="Password"
        type="password"
        name="password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Register
      </Button>
      <Typography>
        Already have an account?{' '}
        <Link to="/login" style={{ textDecoration: 'none', color: '#e74c3c' }}>
          Sign in
        </Link>
      </Typography>
    </Box>
  );
};

export default RegisterForm;
