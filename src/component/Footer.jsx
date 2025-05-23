import React from 'react';
import { Email, Phone, LocationOn, Facebook,LinkedIn, Instagram, YouTube } from '@mui/icons-material';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import logo from '../assets/image/Salari-Saathi-logo-White.png';
import X from '../assets/image/logo.webp'
const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  fontSize: '0.9rem',
  textDecoration: 'none',
  marginBottom: '8px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#f0a500',
  },
};

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#000',
      padding: '80px 30px',
      color: '#fff',
      position: 'relative',
    }}>
      <Container maxWidth="lg" style={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={3} container justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <img src={logo} alt="Logo" style={{ width: '160px', height: 'auto' }} /> {/* Logo image */}
          </Grid>
          
          {/* Empty Grid item to create space */}
          <Grid item xs={12} md={6} />

          <Grid item xs={12} md={3} container justifyContent={{ xs: 'center', md: 'flex-end' }}>
            <Box mt={1} display="flex" gap={1} justifyContent="center">
              <Link href="https://www.facebook.com/profile.php?id=61569833756263" sx={{ ...iconStyle, backgroundColor: '#4267B2' }}><Facebook /></Link>
              <Link href="https://x.com/salarysathi" sx={{ ...iconStyle, backgroundColor: 'white' }}>
              <img src={X} alt="Logo" style={{ width: '100%', height: 'auto',background:'black' }} />
            </Link>
              <Link href="https://www.linkedin.com/company/105757921/admin/dashboard/" target="_blank" sx={{ ...iconStyle, backgroundColor: '#0077B5' }}><LinkedIn /></Link>
              <Link href="https://www.instagram.com/salarysaathi/?next=%2Fspeedo.loan%2F" target="_blank" sx={{ ...iconStyle, backgroundColor: '#C13584' }}><Instagram /></Link>
              <Link href="https://www.youtube.com/@salarysaathi" target="_blank" sx={{ ...iconStyle, backgroundColor: '#FF0000' }}><YouTube /></Link>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{
            borderBottom: '1px solid #fff',
            borderTop: '1px solid #fffc',
            mt: 4,
            pb: 3,
            textAlign: { xs: 'center', md: 'left' }, // Center align on small screens
          }}
        >
          {/* Fast Link Section */}
          <Grid 
            item 
            xs={12} 
            md={4} 
            style={{ paddingTop: '12px' }}
            sx={{
              textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: '#fff',
                fontWeight: 500,
                textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)',
                mb: 2,
                textAlign: { xs: 'center', md: 'left' }, // Center heading on small screens
              }}
            >
              Fast Links
            </Typography>
            <Box 
              component="ul"
              sx={{
                listStyleType: 'none', 
                padding: 0, 
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' }, // Center links on small screens
              }}
            >
              <li><Link href="/" sx={linkStyle}>Home</Link></li>
              <li><Link href="about-us" sx={linkStyle}>About Us</Link></li>
              <li><Link href="apply-now" sx={linkStyle}>Apply Now</Link></li>
              <li><Link href="repay-now" sx={linkStyle}>Repay Now</Link></li>
              <li><Link href="contact-us" sx={linkStyle}>Contact Us</Link></li>
            </Box>
          </Grid>

          {/* Centered Resources Section */}
          <Grid item xs={12} md={4} style={{ paddingTop: '12px' }} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'center' } }}>
            <div>
              <Typography
                variant="h6"
                sx={{
                  color: '#fff',
                  fontWeight: 500,
                  textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)',
                  mb: 2,
                  textAlign: 'center',
                 display: 'flex', justifyContent: { xs: 'center', md: 'left' } 
                }}
              >
                Resources
              </Typography>
               <ul style={{ listStyleType: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
                <li><Link href="terms-condition" sx={{ ...linkStyle, display: 'block', textAlign: { xs: 'center', md: 'left' } }}>Terms & Conditions</Link></li>
                <li><Link href="privacy-policy" sx={{ ...linkStyle, display: 'block', textAlign: { xs: 'center', md: 'left' } }}>Privacy Policy</Link></li>
                <li><Link href="fqa" sx={{ ...linkStyle, display: 'block', textAlign: { xs: 'center', md: 'left' } }}>FAQs</Link></li>
              </ul>
            </div>
          </Grid>

          {/* Right-aligned Contact Us Section */}
          <Grid item xs={12} md={4} style={{ paddingTop: '12px' }} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            <div>
              <Typography
                variant="h6"
                sx={{
                  color: '#fff',
                  fontWeight: 500,
                  textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)',
                  mb: 2,
                }}
              >
                Contact Us
              </Typography>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, justifyContent: { xs: 'center', md: 'flex-end' } }}>
                <li>
                  <Link href="contact-us" sx={{ ...linkStyle, alignItems: 'center' }}>
                    <Email sx={{ mr: 1 }} />   info@salarysaathi.com
                  </Link>
                </li>
                <li>
                  <Link href="contact-us" sx={{ ...linkStyle, alignItems: 'center' }}>
                    <Phone sx={{ mr: 1 }} /> +91 9643311652
                  </Link>
                </li>
                <li>
                  <Link href="contact-us" sx={{ ...linkStyle, alignItems: 'center' }}>
                    <LocationOn sx={{ mr: 1 }} /> Office No. 311, Suryakiran Building, K.G. Marg, Cannaught Place, New Delhi, 110001
                  </Link>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Bottom */}
      <Box mt={2} py={1} style={{
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        textAlign: 'center',
        borderRadius: '0 0 10px 10px',
        boxShadow: '0 -3px 10px rgba(0, 0, 0, 0.3)',
      }}>
        <Typography variant="body2" style={{ color: '#fff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
          Copyright &copy; 2024 Richman Fincap Limited. All Rights Reserved.
        </Typography>
      </Box>
    </footer>
  );
};

const iconStyle = {
  color: '#fff',
  borderRadius: '50%',
  padding: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
  transition: 'transform 0.2s, background-color 0.2s',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)',
  '&:hover': {
    backgroundColor: '#e0e0e0',
    color: '#111',
    transform: 'translateY(-3px)',
  },
};

export default Footer;
