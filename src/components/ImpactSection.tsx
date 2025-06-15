import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';

interface ImpactSectionProps {
  title: string;
  stats: Array<{
    number: string;
    description: string;
    color: string;
  }>;
}

const ImpactSection: React.FC<ImpactSectionProps> = ({ title, stats }) => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#FAFAFA' }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            color: 'text.primary',
            mb: { xs: 4, md: 6 },
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: { xs: 3, md: 4 },
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: stat.color,
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '3rem', md: '4rem' },
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                  }}
                >
                  {stat.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ImpactSection;