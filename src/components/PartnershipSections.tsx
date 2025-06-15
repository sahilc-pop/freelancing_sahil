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

interface PartnershipSectionsProps {
  existingPartners: {
    title: string;
    description: string;
    buttonText: string;
  };
  businessPartnership: {
    title: string;
    description: string;
    buttonText: string;
  };
  researchPartnership: {
    title: string;
    description: string;
    buttonText: string;
  };
}

const PartnershipSections: React.FC<PartnershipSectionsProps> = ({
  existingPartners,
  businessPartnership,
  researchPartnership,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        {/* Existing Partners Section */}
        <Box sx={{ mb: 8 }}>
          <Card
            sx={{
              backgroundColor: '#F5F3FF',
              border: 'none',
              boxShadow: 'none',
              p: { xs: 3, md: 4 },
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={8}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: 'text.primary',
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    {existingPartners.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {existingPartners.description}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      color: '#5225B5',
                      borderColor: 'primary.main',
                      px: 3,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 500,
                    }}
                  >
                    {existingPartners.buttonText}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

        {/* Business and Research Partnership Sections */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box sx={{ pr: { md: 2 } }}>
              <Typography
                variant="h3"
                sx={{
                  color: 'text.primary',
                  mb: 3,
                  fontWeight: 600,
                }}
              >
                {businessPartnership.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  mb: 4,
                  fontSize: '1rem',
                }}
              >
                {businessPartnership.description}
              </Typography>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: 'primary.main',
                  borderColor: 'primary.main',
                  px: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 500,
                }}
              >
                {businessPartnership.buttonText}
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 2 } }}>
              <Typography
                variant="h3"
                sx={{
                  color: 'text.primary',
                  mb: 3,
                  fontWeight: 600,
                }}
              >
                {researchPartnership.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  mb: 4,
                  fontSize: '1rem',
                }}
              >
                {researchPartnership.description}
              </Typography>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: 'primary.main',
                  borderColor: 'primary.main',
                  px: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 500,
                }}
              >
                {researchPartnership.buttonText}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PartnershipSections;