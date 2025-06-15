import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';

interface TestimonialSectionProps {
  testimonial: {
    title: string;
    quote: string;
    author: string;
    position: string;
    image: string;
  };
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonial }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 400, md: 500 },
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${testimonial.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box sx={{ color: 'white', py: { xs: 4, md: 6 } }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#4FD1C7',
                  fontWeight: 500,
                  mb: 2,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                {testimonial.title}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: 'white',
                  mb: 4,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                "{testimonial.quote}"
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  fontSize: '1.1rem',
                }}
              >
                <strong>{testimonial.author}</strong>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#E2E8F0',
                  fontSize: '1rem',
                }}
              >
                {testimonial.position}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;