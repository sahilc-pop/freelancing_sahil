import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface FooterProps {
  footer: {
    companyInfo: {
      name: string;
      year: string;
      rights: string;
    };
    sections: Array<{
      title: string;
      links: Array<{
        text: string;
        href: string;
      }>;
    }>;
    bottomLinks: Array<{
      text: string;
      href: string;
    }>;
  };
}

const Footer: React.FC<FooterProps> = ({ footer }) => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: '#5225B5', color: 'white', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="xl">
        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Logo and Company Info */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              {footer.companyInfo.name}
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: '#6C2C91',
                  }}
                />
              </Box>
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              © {footer.companyInfo.year} {footer.companyInfo.rights}
            </Typography>
          </Grid>

          {/* Footer Links */}
          {footer.sections.map((section, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              {section.title && (
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontSize: '1rem',
                  }}
                >
                  {section.title}
                </Typography>
              )}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    sx={{
                      color: 'white',
                      textDecoration: 'none',
                      opacity: 0.8,
                      fontSize: '0.9rem',
                      '&:hover': {
                        opacity: 1,
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            pt: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'center' },
            gap: 3,
          }}
        >
          {/* Bottom Links */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 2, md: 4 },
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            {footer.bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.8,
                  fontSize: '0.85rem',
                  '&:hover': {
                    opacity: 1,
                    textDecoration: 'underline',
                  },
                }}
              >
                {link.text}
              </Link>
            ))}
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton sx={{ color: 'white', opacity: 0.8, '&:hover': { opacity: 1 } }}>
              <YouTubeIcon />
            </IconButton>
            <IconButton sx={{ color: 'white', opacity: 0.8, '&:hover': { opacity: 1 } }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: 'white', opacity: 0.8, '&:hover': { opacity: 1 } }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: 'white', opacity: 0.8, '&:hover': { opacity: 1 } }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: 'white', opacity: 0.8, '&:hover': { opacity: 1 } }}>
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;