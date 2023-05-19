import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e74c3c',
    },
    secondary: {
      main: blueGrey[50],
    },
  },
});
export default theme;
