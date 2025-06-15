import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Partner {
  id: number;
  logo: string;
  title: string;
  description: string;
  buttonText: string;
}

interface PartnersSectionProps {
  partners: Partner[];
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ partners }) => {
  const theme = useTheme();

  const getCardBackgroundColor = (index: number) => {
    const colors = ['#F5F3FF', '#E8F5E8', '#FFF5F5'];
    return colors[index % colors.length];
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {partners.map((partner, index) => (
            <Grid item xs={12} md={4} key={partner.id}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: getCardBackgroundColor(index),
                  border: 'none',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 700,
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        mb: 1,
                      }}
                    >
                      {partner.logo}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.primary',
                      lineHeight: 1.6,
                      mb: 3,
                      fontSize: '1.1rem',
                      flexGrow: 1,
                    }}
                  >
                    {partner.title}
                  </Typography>
                  <Button
                    variant="text"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      color: 'primary.main',
                      p: 0,
                      justifyContent: 'flex-start',
                      fontSize: '1rem',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'primary.dark',
                      },
                    }}
                  >
                    {partner.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PartnersSection;