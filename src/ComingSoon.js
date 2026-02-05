import { useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function ComingSoon() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const primaryColor = "#00adef";
  // theme.palette.primary.main;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: isDarkMode
          ? 'linear-gradient(to bottom, #1a1a1a, #000)'
          : 'linear-gradient(to bottom, #ffffff, #f5f5f5)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* --- Animated Icon --- */}
          <Box
            sx={{
              mb: 4,
              animation: 'float 3s ease-in-out infinite alternate',
            }}
          >
            <Box
              sx={{
                p: 4,
                borderRadius: '50%',
                backgroundColor: `${primaryColor}1A`, // ~10% opacity
                boxShadow: `0 0 30px ${primaryColor}40`,
              }}
            >
              <RocketLaunchIcon
                sx={{
                  fontSize: 80,
                  color: primaryColor,
                }}
              />
            </Box>
          </Box>

          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              mb: 4,
              lineHeight: 1.2,
              color: isDarkMode ? '#fff' : 'grey.800',
            }}
          >
            We are building
            <br />
            something awesome!
          </Typography>

          <Typography
            sx={{
              mb: 5,
              maxWidth: 400,
              color: isDarkMode ? 'grey.400' : 'grey.600',
              lineHeight: 1.6,
            }}
          >
            This feature is currently under development. Stay tuned for updates! 
          </Typography>
        </Box>
      </Container>
      
      <style>
        {`
          @keyframes float {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(15px);
            }
          }
        `}
      </style>
    </Box>
  );
}
