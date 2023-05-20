import { Box, TextField, Button, Link } from '@mui/material';
import { register } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
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
      noValidate
      sx={{ mt: 1 }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Username"
        type="text"
        name="name"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        type="email"
        name="email"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Register
      </Button>
      <Link href="#" variant="body2">
        {'Already have an account? Sign in'}
      </Link>
    </Box>
  );
};

export default RegisterForm;
