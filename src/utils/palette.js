import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[50],
    },
    secondary: {
      main: '#e74c3c',
    },
  },
});
export default theme;
