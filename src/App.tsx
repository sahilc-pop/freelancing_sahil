import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box, CircularProgress } from '@mui/material';
import { theme } from './theme/theme';
import { fetchPartnershipData, PartnershipData } from './api/data';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnershipSections from './components/PartnershipSections';
import ImpactSection from './components/ImpactSection';
import PartnersSection from './components/PartnersSection';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState<PartnershipData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const partnershipData = await fetchPartnershipData();
        setData(partnershipData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#F8F9FA',
          }}
        >
          <CircularProgress size={60} />
        </Box>
      </ThemeProvider>
    );
  }

  if (!data) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#F8F9FA',
          }}
        >
          Error loading data
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        <Header />
        <HeroSection
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          description={data.hero.description}
          image={data.hero.image}
        />
        <PartnershipSections
          existingPartners={data.existingPartners}
          businessPartnership={data.businessPartnership}
          researchPartnership={data.researchPartnership}
        />
        <ImpactSection
          title={data.impact.title}
          stats={data.impact.stats}
        />
        <PartnersSection partners={data.partners} />
        <TestimonialSection testimonial={data.testimonial} />
        <CTASection />
        <Footer footer={data.footer} />
      </Box>
    </ThemeProvider>
  );
}

export default App;