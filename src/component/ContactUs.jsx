import React from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import Swal from 'sweetalert2'; // Import SweetAlert
// import './ContactUs.css'; 
import aboutImage from '../assets/image/contact us qua.webp';
import backgroundImg from '../assets/image/Frame 446.png'; // Import the background image
import IconImage from '../assets/image/addre.jpg'; // Adjust the path as needed
import ContactIcon from '../assets/image/contact.png'; // Replace with your image path
import EmailIcon from '../assets/image/greivence.png'; // Replace with your icon image path
import OfficerIcon from '../assets/image/collect.png'; // Replace with your icon image path

const ContactUs = () => {
 
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log('Form submitted!'); // Check if this log appears

    // Show SweetAlert notification
    Swal.fire({
      icon: 'success',
      title: 'Thank You!',
      text: 'Thank you for connecting!',
      confirmButtonText: 'OK'
    });

    // You can also perform additional actions here, like sending the form data to your server
  };

  return (
    <>
 <Box 
        sx={{ 
          background:'#f9f9f9',

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
          height: { xs: '20vh', sm: '30vh', md: '40vh', lg: '90vh' },          
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
            padding:{xs:'0px',md:"20px"},
            border:'2px ',
            borderRadius:'50px'
          }}
        />
      </Box>

        {/* Contact Information Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              marginTop: '40px',
              color: '#333',
              fontWeight: 'bold',
              '&:hover': { color: '#FFA726' },
              fontSize: { xs: '24px', sm: '30px', md: '36px', lg: '48px' }
            }}
          >
            Do You Still Have <br /> Some Queries?
          </Typography>

     <Grid container spacing={2} justifyContent="center" mt={6}>
  {[
    {
      title: "Office Address",
      bgColor: "#AFD97E",
      icon: IconImage,
      content: [
        {
          subheading: "Registered Office Address",
          text: "Office No. 311, Suryakiran Building, K.G. Marg, Cannaught Place, New Delhi, 110001",
        },
        {
          subheading: "Corporate Office Address",
          text: "Office No. 311, Suryakiran Building, K.G. Marg, Cannaught Place, New Delhi, 110001",
        },
      ],
    },
    {
      title: "Contact Us",
      bgColor: "#007BBA",
      icon: ContactIcon,
      content: [
        { text: "+91 9999999341", iconClass: "fas fa-phone-alt" },
        { text: "info@salarysaathi.com", iconClass: "fas fa-envelope" },
      ],
    },
    {
      title: "Grievance Redressal Officer",
      bgColor: "#A77AE2",
      icon: EmailIcon,
      content: [
        { text: "AMAN KUMAR", iconClass: "fas fa-user-circle" },
        { text: "+91 9999999341", iconClass: "fas fa-phone-alt" },
        { text: "info@salarysaathi.com", iconClass: "fas fa-envelope" },
      ],
    },
    {
      title: "Collection Officer",
      bgColor: "#e01dd7",
      icon: OfficerIcon,
      content: [
        { text: "LUCKY MUDGAL", iconClass: "fas fa-user-circle" },
        { text: "+91-9355926174", iconClass: "fas fa-phone-alt" },
        { text: "info@salarysaathi.com", iconClass: "fas fa-envelope" },
      ],
    },
  ].map((box, index) => (
    <Grid key={index} item xs={12} sm={3}>
      <Box
        sx={{
          padding: "20px",
          background: box.bgColor,
          color: "#fff",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          height: "100%",
          marginTop: index !== 0 ? "-3px" : "0px", // Negative margin for overlap
        }}
      >
        {/* Icon with Zoom Animation */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "16px",
            animation: "zoom 1.5s infinite",
            "@keyframes zoom": {
              "0%, 100%": { transform: "scale(1)" },
              "50%": { transform: "scale(1.2)" },
            },
          }}
        >
          <img
            src={box.icon}
            alt={`${box.title} Icon`}
            style={{ width: "50px", height: "50px" }}
          />
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          {box.title}
        </Typography>

        {/* Content */}
        {box.content.map((item, i) => (
          <Typography
            key={i}
            sx={{
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "8px",
            }}
          >
            {item.iconClass && (
              <i
                className={item.iconClass}
                style={{ marginRight: "8px", color: "#FFD700" }}
              ></i>
            )}
            {item.text}
          </Typography>
        ))}
      </Box>
    </Grid>
  ))}
</Grid>


        </Box>

        

            {/* Contact Us Form */}
            <Grid container spacing={2} mt={5} mb={5}>
                        <Grid item xs={12} textAlign="center">
              <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold',marginTop:'50px' }}>
                Or Write To Us
              </Typography>
            </Grid>


            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box 
                component="form" 
                onSubmit={handleSubmit} 
                sx={{
                  background: 'rgba(217, 217, 217, 0.5)', // Light gray with 50% transparency
                  width: '110%', 
                  padding: '50px', 
                  borderRadius: '30px',
                  border: '2px solid white',
                  mt: 2,
                  maxWidth: '500px',
                  marginBottom:'40px',

                }}

              >
                <Grid container spacing={3} justifyContent="center">
                  <Grid item xs={12}>
                    <TextField 
                      label="Full Name" 
                      variant="outlined" 
                      fullWidth 
                      required 
                      InputProps={{
                        sx: { 
                          borderRadius: '15px',
                          height: '50px', // Set the desired height here
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                      label="Email" 
                      variant="outlined" 
                      fullWidth 
                      required 
                      type="email" 
                      InputProps={{
                        sx: { 
                          borderRadius: '15px',
                          height: '50px', // Set the desired height here
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                      label="Phone Number" 
                      variant="outlined" 
                      fullWidth 
                      required 
                      type="tel" 
                      InputProps={{
                        sx: { 
                          borderRadius: '15px',
                          height: '50px', // Set the desired height here
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                      label="City" 
                      variant="outlined" 
                      fullWidth 
                      required 
                      InputProps={{
                        sx: { 
                          borderRadius: '15px',
                          height: '50px', // Set the desired height here
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                      label="Message" 
                      variant="outlined" 
                      fullWidth 
                      multiline 
                      rows={4} 
                      required 
                      InputProps={{
                        sx: { 
                          borderRadius: '15px',
                        },
                      }}
                      
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      variant="contained" 
                      type="submit" 
                      fullWidth
                      sx={{ 
                        padding: '10px',
                        borderRadius: '15px', 
                        backgroundColor: '#444444', // Light black color
                        '&:hover': { backgroundColor: 'orange' }, 
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ marginTop: "27px", justifyContent: 'center', alignItems: 'center' }}>
  <Box
    component="iframe"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224304.2556588405!2d77.06826828769549!3d28.613939492829425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d31ab397b93%3A0x0!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1631888981286!5m2!1sen!2sus"
    width="600"
    height="400"
    style={{ border: 0, borderRadius: '40px' }}
    allowfullscreen=""
    loading="lazy"
    sx={{
      width: '90%',
      maxWidth: '500px',
      height: { xs: '50vh', md: '97vh' },
      borderRadius: '40px',
    }}
  />
</Grid>

            </Grid>


      </Box>
    </>
  );
};

export default ContactUs;
