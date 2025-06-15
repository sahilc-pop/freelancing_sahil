import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    'Who we are',
    'What we do',
    'How we work',
    'Work with us',
    'Contact us',
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'white',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              Dr.Reddy's
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.primary.main,
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
                    backgroundColor: 'white',
                  }}
                />
              </Box>
            </Typography>
          </Box>

          {!isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    textTransform: 'none',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton onClick={handleMenuOpen} sx={{ color: 'text.primary' }}>
              <MenuIcon />
            </IconButton>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton sx={{ color: 'text.primary' }}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ color: 'text.primary' }}>
              <LanguageIcon />
            </IconButton>
            {!isMobile && (
              <IconButton sx={{ color: 'text.primary' }}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ mt: 2 }}
          >
            {menuItems.map((item) => (
              <MenuItem key={item} onClick={handleMenuClose}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;