import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  image,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ backgroundColor: '#F8F9FA', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              sx={{
                color: 'text.primary',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '4rem' },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: 'text.secondary',
                mb: 4,
                fontWeight: 400,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
              }}
            >
              {subtitle}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                fontSize: '1.1rem',
                maxWidth: { md: '90%' },
              }}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                height: { xs: 300, md: 500 },
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              }}
            >
              <img
                src={image}
                alt="Laboratory"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;