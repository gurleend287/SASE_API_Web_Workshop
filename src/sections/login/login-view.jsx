import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  const router = useRouter();

  const handleClick = () => {
    const clientId = "9c5c515a5bfa40d9b4b622f71ee37314";
    const redirectUrl = "http://localhost:3030/";
    let apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      'user-read-email',
      'user-read-private',
      'user-modify-playback-state',
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-top-read',
      'user-library-read'
    ];

    apiUrl += '?response_type=token';
    apiUrl += `&client_id=${encodeURIComponent(clientId)}`;
    apiUrl += `&scope=${encodeURIComponent(scope.join(" "))}`;
    apiUrl += `&redirect_uri=${encodeURIComponent(redirectUrl)}`;
    
    window.location.href = apiUrl;
  };

  const renderForm = (
    <>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        Login
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign in to Spotify</Typography>

          <Stack direction="row" spacing={1}>
          </Stack>

          <Divider sx={{ my: 3 }}>
          </Divider>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
