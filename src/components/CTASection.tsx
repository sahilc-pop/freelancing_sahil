import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CTASection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F3FF' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              color: 'text.primary',
              mb: 3,
              fontWeight: 600,
            }}
          >
            Partner with Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 4,
              fontSize: '1.2rem',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            We collaborate with healthcare partners, including pharmaceutical
            companies and hospitals, to impact global patient health. Quality and
            compliance are prioritized, keeping the patient central.
          </Typography>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              color: 'primary.main',
              borderColor: 'primary.main',
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 500,
            }}
          >
            Partners Portal
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;