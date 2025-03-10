import React from 'react';
import { Link } from 'react-router-dom';
import WarningIcon from '@mui/icons-material/Warning'; // Import Warning icon
import Yesbank from '../assets/image/YESBANK.NS_BIG.svg'; 
import backgroundImg from '../assets/image/Contact Us Frame 1.png'; // Import the background image
import repayaImage from '../assets/image/Repay Now qua.webp';
import { Grid, Box, Typography, Button, Divider } from '@mui/material';

const RepayLoan = () => {
  return (
    <Box 
      sx={{ 
        background: '#f9f9f9',
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: { xs: '20px', sm: '30px' }, // Adjust padding for small screens
      }}
    >
      {/* Image Section */}
      <Box 
        sx={{ 
          position: 'relative',
          width: '100%',
          height: { xs: '30vh', sm: '35vh', md: '45vh', lg: '100vh' }, // Responsive height
          overflow: 'hidden',
          mb: 2,
        }}
      >
              <Box
          component="img"
          src={repayaImage}
          alt="Repay Loan"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            padding: { xs: '5px', md: '30px' },
            border: '2px solid transparent',
            borderRadius: '50px',
            
          }}
        />

      </Box>

            {/* Marquee Section */}
            <Box 
        sx={{ 
          overflow: 'hidden', 
          whiteSpace: 'nowrap', 
          width: '100%', 
          backgroundColor: '#f9f9f9', 
          border: 'none !important',
          py: 1, 
        }}
      >
        <Typography
          variant="body1"
          sx={{
            display: 'inline-block',
            animation: 'scroll-text 20s linear infinite',
            fontSize: { xs: '14px', sm: '18px' },
            color: 'red',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          "Beware of fraud! Always use our secure Repayment Website Link for loan payments. Salarysaathi is not responsible for payments made to other accounts."
        </Typography>

        {/* Keyframe animation using Material-UI */}
        <style>
          {`
            @keyframes scroll-text {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(-100%);
              }
            }
          `}
        </style>
      </Box>




      {/* Warning Message */}
      <Box 
        sx={{ 
          textAlign: 'center', 
          border: '2px solid white', 
          borderRadius: '30px',
          padding: '16px',
          maxWidth: '80vw',
          margin: '0 auto',
          mt:6,

          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography 
          variant="h5" 
          color="black" 
          sx={{ 
            fontFamily: 'Inter',
            fontSize: { xs: '22px', sm: '30px' }, // Adjust font size for small screens
            lineHeight: '50px',
            letterSpacing: '-0.408px',
            mb: 2,
          }}
        >
          <strong style={{fontSize:'30px', color:'danger'}}>Warning:</strong> We are not liable for any payments made in <br />
          personal accounts of employees. Please make all <br />
          payments in the company’s account only.
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            mb: 2, 
          }}
        >
          <hr style={{ flex: 1, border: '1px solid gray', marginLeft: '80px', marginRight: '8px' }} />
          <WarningIcon color="error" />
          <hr style={{ flex: 1, border: '1px solid gray', marginRight: '80px', marginLeft: '8px' }} />
        </Box>

        <Typography 
          variant="body2" 
          sx={{ 
            mt: 1, 
            fontFamily: 'Inter',
            fontSize: { xs: '16px', sm: '24px' }, // Adjust font size for small screens
            lineHeight: '36px',
            letterSpacing: '-0.408px',
            mb: 5,
          }}
        >
          Please share a screenshot of your transfer <br />
          from your bank/Google Pay to <br />
          <strong>recovery@salarysaathi.com</strong>.
        </Typography>
      </Box>

      {/* Main Content */}
      <Box mt={10}>
        <Grid container spacing={4}>
          {/* Bank Details Form */}
          <Grid item xs={12}>
            <Typography 
              variant="h5" 
              gutterBottom 
              textAlign="center" 
              sx={{ fontWeight: 'bold', mb: 4, paddingX: { xs: '20px', sm: '50px' } }} // Responsive padding
            >
              Please repay your loan and interest amount into the following bank a/c:
            </Typography>

            <Grid container spacing={3} justifyContent="center" sx={{ mb: 8 }}>
              <Grid item xs={12} sm={10} md={8}>
                <Box
                  component="form"
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' }, // Stack elements on small screens
                    alignItems: 'center',
                    padding: '20px',
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    background: 'linear-gradient(180deg, #AE285D 0%, #5B437C 100%)',
                  }}
                >
                  {/* Left Side - Centered Bank Image and Name */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      color: 'white',
                      mr: 3,
                      textAlign: 'center',
                      mb: { xs: 3, sm: 0 }, // Add margin for small screens
                    }}
                  >
                    <img 
                      src={Yesbank} 
                      alt="AXIS Bank" 
                      style={{ width: '100px', marginBottom: '8px' }} 
                    />
                    
                  </Box>

                  {/* Vertical Divider */}
                  <Divider orientation="vertical" flexItem sx={{ backgroundColor: 'white', mx: 5 }} />

                  {/* Right Side - Bank Details */}
                 <Box sx={{ color: 'white' }}>
                  <Typography variant="body1" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Box component="span" sx={{ fontWeight: 'bold', minWidth: { xs: '100px', sm: '130px' } }}>
                      Bank Name
                    </Box>
                    <Typography sx={{ marginLeft: { xs: 2, md: 3 } }}> YES BANK</Typography>
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Box component="span" sx={{ fontWeight: 'bold', minWidth: { xs: '100px', sm: '130px' } }}>
                     Name
                    </Box>
                    <Typography sx={{ marginLeft: { xs: 2, md: 3 } }}>
                    RICHMAN FINCAP LIMITED
                    </Typography>
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Box component="span" sx={{ fontWeight: 'bold', minWidth: { xs: '100px', sm: '130px' } }}>
                      Account Number
                    </Box>
                    <Typography sx={{ marginLeft: { xs: 2, md: 3 } }}>023763300012311</Typography>
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Box component="span" sx={{ fontWeight: 'bold', minWidth: { xs: '100px', sm: '130px' } }}>
                      IFSC Code
                    </Box>
                    <Typography sx={{ marginLeft: { xs: 2, md: 3 } }}>YESB0000237</Typography>
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Box component="span" sx={{mt:-3, fontWeight: 'bold', minWidth: { xs: '100px', sm: '130px' } }}>
                      Branch Name
                    </Box>
                    <Typography sx={{ marginLeft: { xs: 2, md: 3 } }}>
                      YES BANK LTD.,GROUND FLOOR,E-34,NARAINA VIHAR, NEW DELHI 110028
                    </Typography>
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Box component="span" sx={{ fontWeight: 'bold', minWidth: { xs: '100px', sm: '130px' } }}>
                      Account Type
                    </Box>
                    <Typography sx={{ marginLeft: { xs: 2, md: 3 } }}>CURRENT ACCOUNT</Typography>
                  </Typography>
                </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RepayLoan;
