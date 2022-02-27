import { Box, Typography } from '@mui/material';
import Copyright from './Copyright';

interface Props {}

export default function Footer({}: Props) {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </Box>
  );
}
