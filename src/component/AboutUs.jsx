import React, { useEffect, useRef,useState } from 'react';
import { Typography, Grid, Box ,Divider,Paper, Accordion,
  AccordionSummary,
  AccordionDetails, } from '@mui/material';
import VisionImage from '../assets/image/image.png'; // Import your vision image here
import MissionImage from '../assets/image/image1.png'; // Import your mission image here
import aboutImage from '../assets/image/about us qua.webp'; // Correct image path for about us
import backgroundImg from '../assets/image/Frame 470.png'; // Import the background image
import DocumentIcon from '@mui/icons-material/Description'; // Adjust import according to the icon you want
import WhyChooseUs from './WhyChooseUs';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import videoSrc from '../assets/videos/how it works salary sathi final.mp4'; // Video ka path yahan den



const AboutUs = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 } // Adjust this threshold as needed
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);


  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef(null);

  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              const entry = entries[0];
              if (entry.isIntersecting) {
                  setIsVisible(true);
              } else {
                  setIsVisible(false);
              }
          },
          { threshold: 0.1 }
      );

      if (faqRef.current) {
          observer.observe(faqRef.current);
      }

      return () => {
          if (faqRef.current) {
              observer.unobserve(faqRef.current);
          }
      };
  }, []);

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);


  
  return (
    <Box 
    sx={{ 
      background: '#f9f9f9',
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', // Adjust height as needed
      padding: '30px',
    }}
  >
    {/* Image Section */}
    <Box 
      sx={{ 
        position: 'relative',
        width: '100%',
        height: { xs: '30vh', sm: '60vh', md: '60vh', lg: '110vh' },          
        overflow: 'hidden',
        mb: 2,
      }}
    >
      <Box
        component="img"
        src={aboutImage}
        alt="Contact Us"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          padding: {xs:'1px',md:'10px'},

          border: '2px solid transparent', // Added a solid border for consistency
          borderRadius: '50px',
        }}
      />
    </Box>
      <Box 
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0)', // More transparent background
          padding: '40px',
          marginBottom: 4,
          maxWidth: '90%', // Default maxWidth for larger screens
          margin: '0 auto', // Center the box
          marginTop: '60px',
          
          // For smaller screens, the box will take full width (100%)
          '@media (max-width: 600px)': {
            maxWidth: '100%', // Full width on small screens
            padding: '20px', // Adjust padding for smaller screens if needed
          },
        }}
      >
        <Typography 
          variant="body1" 
          sx={{
            fontFamily: 'Inter',
            fontSize: '22px', // Font size
            fontWeight: 500, 
            lineHeight: '40px', 
            letterSpacing: '-0.408px', // Adjusted letter spacing
            textAlign: 'center',
          }}
        >
          Welcome to SalarySaathi, your trusted solution in providing personal finance loans. As a premier digital lending platform under RICHMAN FINCAP LIMITED, we specialize in providing fast, convenient, and short-term unsecured personal loans to salaried individuals across India. Our main goal is to make our customers feel financially empowered with full access to credit, simplifying the loan process through innovative use of technology and personalized solutions that meet their unique financial needs. </Typography>
        
        {/* Divider with Document Icon */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginY: 2 }}>
          <Divider sx={{ flexGrow: 1, backgroundColor: 'gray' }} />
          <DocumentIcon sx={{ margin: '0 10px', color: '#A52B60' }} />
          <Divider sx={{ flexGrow: 1, backgroundColor: 'gray' }} />
        </Box>

        <Typography 
          variant="body1" 
          sx={{
            fontFamily: 'Inter',
            fontSize: '22px', // Font size
            fontWeight: 500, 
            lineHeight: '40px', 
            letterSpacing: '-0.408px', // Adjusted letter spacing
            textAlign: 'center',
            marginTop: 2,
          }}
        >
          At SalarySaathi, we understand that life can be really unpredictable whether it’s the arrival of emergency situations, wedding expenses, home improvisations. We're here to make sure that financial problems don’t hold you back. With our easy-to-use fully digital platform, you can apply for a loan in a few minutes, track your application status in real-time, and receive funds instantly into your bank account.   </Typography>
      </Box>
 
      {/* mission & vission */}

                  <Box
                  ref={ref}
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: '20px',
                    borderRadius: '40px',
                    marginTop: '100px',
                    maxWidth: '100%',
                    margin: '0 auto',
                    border: '2px solid white',
                    opacity: inView ? 1 : 0, // Fade in when in view
                    transition: 'opacity 0.5s ease-out',
                  }}
                  className={inView ? 'animate' : ''}
                >
                  <style>
                    {`
                      @keyframes slideRightToLeft {
                        from {
                          transform: translateX(100%); /* Start off-screen right */
                          opacity: 0;
                        }
                        to {
                          transform: translateX(0); /* Move to its normal position */
                          opacity: 1;
                        }
                      }

                      @keyframes slideLeftToRight {
                        from {
                          transform: translateX(-100%); /* Start off-screen left */
                          opacity: 0;
                        }
                        to {
                          transform: translateX(0); /* Move to its normal position */
                          opacity: 1;
                        }
                      }

                      @keyframes slideUp {
                        from {
                          transform: translateY(50px); /* Start below */
                          opacity: 0;
                        }
                        to {
                          transform: translateY(0); /* Move to its normal position */
                          opacity: 1;
                        }
                      }

                      .animate .slideLeftToRight {
                        animation: slideLeftToRight 1s ease-out forwards;
                      }

                      .animate .slideRightToLeft {
                        animation: slideRightToLeft 1s ease-out forwards;
                      }

                      .animate .slideUp {
                        animation: slideUp 2s ease-out forwards; /* Slow down animation */
                      }

                      .animate .slideUpDelayed {
                        animation: slideUp 2s ease-out forwards 0.3s; /* Delay for staggered effect */
                      }

                      .animate .slideUpDelayedLong {
                        animation: slideUp 2s ease-out forwards 0.6s; /* Longer delay for images */
                      }
                    `}
                  </style>

                  <Grid container spacing={4} sx={{ paddingTop: '50px', marginBottom: 4 }}>
                    {/* Left Side: Our Vision */}
                    <Grid item xs={12} md={6} sx={{ letterSpacing: '-0.408px' }}>
                      <Typography
                        variant="h4"
                        className={inView ? 'slideRightToLeft' : ''}
                        sx={{
                          
                          fontFamily: 'Inter',
                          fontSize: { xs: '28px', md: '36px' },
                          fontWeight: 700,
                          lineHeight: '44px',
                          textAlign: 'left',
                          marginBottom: 2,
                        }}
                      >
                        Our Vision
                      </Typography>
                      <Typography
                        variant="body1"
                        className={inView ? 'slideUpDelayed' : ''}
                        sx={{
                          fontFamily: 'Inter',
                          fontSize: { xs: '16px', sm: '18px', md: '22px' }, // Responsive font size
                          fontWeight: 500, 
                          lineHeight: '40px', 
                          letterSpacing: '-0.408px', // Letter spacing

                          textAlign: 'left',
                        }}
                      >
                Our vision at SalarySaathi is to redefine how personal loans are accessed by salaried professionals in India. We aim to create a transparent, customer-centric lending platform that provides access to credit when it’s needed the most. By making use of the latest technology and leveraging our expertise in financial services, we strive to build a future where financial inclusion is a reality for all, irrespective of their income sources or background.                      </Typography>
                    </Grid>

                    {/* Right Side: Vision Image */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <img
                        src={VisionImage}
                        alt="Our Vision"
                        className={inView ? 'slideLeftToRight' : ''}
                        style={{
                          maxWidth: { xs: '200px', md: '100%' },
                          height: 'auto',
                          borderRadius: '20px',
                          marginBottom: '40px',
                          width: '100%',
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={6}>
                    {/* Left Side: Mission Image */}
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        top: { xs: '0px', md: '-260px' },
                        marginBottom: { xs: '40px', md: '-200px' },
                      }}
                    >
                      <img
                        src={MissionImage}
                        alt="Our Mission"
                        className={inView ? 'slideRightToLeft' : ''}
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          borderRadius: '20px',
                          width: '100%',
                        }}
                      />
                    </Grid>

                    {/* Right Side: Our Mission */}
                    <Grid item xs={12} md={6} sx={{ marginTop: '-20px', letterSpacing: '-0.408px' }}>
                      <Typography
                        variant="h4"
                        className={inView ? 'slideLeftToRight' : ''}
                        sx={{
                          fontFamily: 'Inter',
                          fontSize: { xs: '28px', md: '36px' },
                          fontWeight: 700,
                          lineHeight: '44px',
                          textAlign: 'left',
                          marginBottom: 2,
                        }}
                      >
                        Our Mission
                      </Typography>
                      <Typography
                        variant="body1"
                        className={inView ? 'slideUpDelayed' : ''}
                        sx={{

                          fontFamily: 'Inter',
                          fontSize: { xs: '16px', sm: '18px', md: '22px' }, // Responsive font size
                          fontWeight: 500, 
                          lineHeight: '40px', 
                          letterSpacing: '-0.408px', // Letter spacing
                          textAlign: 'left',
                        }}
                      >
                       Our mission is to make personal loans quicker, simpler, and easily accessible for salaried individuals. We believe in giving everyone the feel of being financially secured and are committed to providing easy and affordable access to credit. Through our partnership with RICHMAN FINCAP LIMITED, an RBI-registered NBFC (Non-Banking Financial Company), we offer loans that are secure, transparent, and designed as per the needs of today’s modern-day consumer.
                        </Typography>
                    </Grid>
                  </Grid>
                </Box>





              <WhyChooseUs/>
         {/* <Technology/> */}

         
         <Box
                  sx={{
                      width: '100%',
                      height: 'auto',
                      padding: 4,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backdropFilter: 'blur(5px)',

                      '@media (max-width: 600px)': {
                          width: '100%',
                          padding: 2,
                          margin: 0,
                          backgroundSize: 'contain',
                          backgroundPosition: 'top center',
                      },
                  }}
                  ref={faqRef}
              >
                  <Typography
                      sx={{
                          fontWeight: 'bold',
                          mb: 4,
                          fontSize: { xs: '2.4rem', md: '3rem' },
                          fontFamily: 'Arial, sans-serif',
                          opacity: isVisible ? 1 : 0,
                          transition: 'opacity 1s ease-in-out',
                          textAlign: 'center',
                          width: { xs: '100%', md: 'fit-content' },
                          margin: { xs: 0, md: '0 auto' },
                      }}
                  >
                      Our Technology
                  </Typography>

                  <Typography
                      variant="h5"
                      sx={{
                          maxWidth: { xs: '100%', md: '800px' },
                          fontFamily: 'Arial, sans-serif',
                          opacity: isVisible ? 1 : 0,
                          transition: 'opacity 1s ease-in-out',
                          mb: 4,
                          lineHeight: 1.6,
                          textAlign: 'center',
                          margin: { xs: 0, md: '0 auto' },
                      }}
                  >
SalarySaathi is powered by a modern digital platform that simplifies every step of the loan process. We use advanced algorithms to assess your creditworthiness as quickly as possible and with more accuracy, ensuring that you get the best possible loan offers.                  </Typography>

                  {/* Top line above Paper */}

                  <Box
                      sx={{
                          width: '100%',
                          padding: { xs: 0, md: 12 },
                          paddingTop: { xs: 6, md: 2 },
                          opacity: isVisible ? 1 : 0,
                          transition: 'opacity 1s ease-in-out',
                      }}
                  >
                <Paper elevation={0} sx={{ overflow: 'hidden', backgroundColor: 'transparent' }}>
                <div>
                          <Box sx={{ width: '100%', borderTop: '2px solid black', my: 2 }} />

                              {techItems.map((tech, index) => (
                                  <Accordion
                                      key={index}
                                      sx={{
                                        backgroundColor: 'transparent',

                                          opacity: isVisible ? 1 : 0,
                                      }}
                                  >
                                      <AccordionSummary
                                          expandIcon={<ExpandMoreIcon sx={{ color: 'black', fontSize: '2.5rem' }} />}
                                          aria-controls={`tech${index}-content`}
                                          id={`tech${index}-header`}
                                          sx={{
                                              color: 'black',
                                              '&:hover': {
                                                  backgroundColor: 'black',
                                                  color: 'white',
                                              },
                                              '&.Mui-expanded': {
                                                  backgroundColor: 'black',
                                                  color: 'white',
                                              },
                                          }}
                                      >
                                          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                              <Typography sx={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 1rem 0 0' }}>
                                                  {String(index + 1).padStart(2, '0')}.
                                              </Typography>
                                              <Typography sx={{ fontSize: '1.25rem', margin: '0', textAlign: 'center', width: '100%' }}>
                                                  {tech.title}
                                              </Typography>
                                          </Box>
                                      </AccordionSummary>

                                      <AccordionDetails sx={{ color: 'black' }}>
                                          <Typography>{tech.description}</Typography>
                                      </AccordionDetails>

                                  </Accordion>
                                  
                              ))}
                          </div>
                          <Box sx={{ width: '100%', borderBottom: '2px solid black', my: 2 }} />

                      </Paper>
                  </Box>

              </Box>

               <Box 
                sx={{ 
                  width: '100%', 
                  
                }}
              >
                <Typography 
                 
                  component="h2" 
                  align="center" 
                  sx={{
                    fontWeight: 'bold',
                    color: '#333',
                    mb: 2,
                    fontSize: { xs: '2.4rem', md: '3rem' },
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                  }}
                >
              How Easy is to Get a Loan?
                </Typography>

                <Box 
                  sx={{ 
                    display: 'flex',           // Center the video horizontally
                    justifyContent: 'center',   // Align video to center
                    alignItems: 'center',       // Center content within the box
                  }}
                >
                  <Box 
                    component="video" 
                    ref={videoRef}
                    src={videoSrc} 
                    sx={{ 
                      width: { xs: '120%', sm: '80%' }, // Full width on extra-small screens, 80% on small and up
                      maxWidth: { xs: '120%', sm: '800px' }, // Max width adjusts based on screen size
                      borderRadius: '8px',
                      mt: 3,
                      mb: 9,
                    }}
                    muted
                  />
                </Box>
              </Box>


        
        </Box>
        
   
  );
};
const techItems = [
  {
      title: ' Quick Credit Assessments',
      description: 'Our advanced algorithms ensure quick and accurate credit assessments, enabling you to get the best loan offers without any delay.'
  },
  {
      title: ' User-Friendly Interface',
      description: 'SalarySaathi offers an intuitive and easy-to-navigate platform, ensuring a smooth loan application process for all users.'
  },
  {
      title: ' Real-Time Tracking',
      description: 'Track your loan application status in real-time, providing complete transparency and peace of mind throughout the process.'
  },
  {
      title: ' Secure Transactions',
      description: 'We prioritize your security by using encrypted transactions, ensuring your sensitive data remains safe at all given times.'
  },
];

export default AboutUs;
