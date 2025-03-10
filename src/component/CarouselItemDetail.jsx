import React, { useRef } from "react";
import { Box, Typography, Card, CardMedia, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import backgroundImg from "../assets/image/Frame 464.png";

// Import images
import image1 from "../assets/image/Trust-and-Transparency 1.png";
import image2 from "../assets/image/Easy-Approval-and-Disbursal 2.png";
import image3 from "../assets/image/Easy-Approval-and-Disbursal 2.png";
import image4 from "../assets/image/Easy-Repayment 1.png";
import image5 from "../assets/image/Trust-and-Transparency 1.png";
import image6 from "../assets/image/Trust-and-Transparency 1.png";

// Carousel content configuration
const cardDetails = [
  {
    imgUrl: image1,
    title: "Quick Approval",
    description: `We know your time is precious! So with our user-friendly finance technology, we’ll check your documents and approve your loan in just a couple of minutes.`,
  },
  {
    imgUrl: image2,
    title: "Stress-Free Repayment",
    description: `With options like Easy Pay or Bank Transfer, our flexible repayment plans make it a breeze for you to stay on top of your finances. `,
  },
  {
    imgUrl: image3,
    title: "Clear Pricing",
    description: `We aim to make your financial journey as smooth and hassle-free as possible.`,
  },
  {
    imgUrl: image4,
    title: "Easy Documentation",
    description: `Say goodbye to the hassles of paperwork and long queues to the bank.`,
  },
  {
    imgUrl: image5,
    title: "Instant Fund Transfer",
    description: `No standing in lines waiting for your turn - just quick financial relief!`,
  },
  {
    imgUrl: image6,
    title: "Secure Process",
    description: `Your information is absolutely in safe and secure hands! Our dedicated teams work diligently at every stage to ensure a safe and transparent experience for all.`,
  },
];

// Carousel Item Component
function CarouselItemDetail({ imgUrl, imgTitle, description, index }) {
  const [visibleLines, setVisibleLines] = React.useState([]);
  const colors = ["#EB685A", "#A77AE2", "#56B8DC", "#AFD97E", "#A77AE2"];

  const descriptionLines = description.split("\n");

  React.useEffect(() => {
    setVisibleLines([]);
    descriptionLines.forEach((_, lineIndex) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, lineIndex]);
      }, lineIndex * 500);
    });
  }, [description]);

  return (
    <Card
      sx={{
        width: 380,
        height: 450,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors[index % colors.length],
        boxShadow: 4,
        borderRadius: 3,
        margin: 2,
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      <Box>
        <CardMedia
          component="img"
          image={imgUrl}
          alt={imgTitle}
          sx={{

            width: "100%",
            height: "100%",
            maxHeight: 150,
            marginBottom: 10,
            marginTop:10
          }}
        />
      </Box>
      <Typography variant="h5" fontWeight="bold" color="white" align="center" >
        {imgTitle}
      </Typography>
      <Box mt={1} textAlign="center">
        {descriptionLines.map((line, lineIndex) => (
          <Typography
            key={lineIndex}
            color="white"
            sx={{
              marginBottom: 10,
              paddingLeft:'30px',
              paddingRight:'30px',

              fontSize: "20px",
              opacity: visibleLines.includes(lineIndex) ? 1 : 0,
              transition: "opacity 0.5s ease",
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
              textAlign: "center",
              maxWidth: "100%",
            }}
          >
            {line}
          </Typography>
        ))}
      </Box>
    </Card>
  );
}

// Autoplay Carousel Component
export default function AutoplayCarousel() {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400; // Adjust to control the scroll distance per click
      const currentScroll = carouselRef.current.scrollLeft;
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      
      // Calculate the new scroll position
      let newScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      // Ensure that the scroll position stays within bounds
      if (newScroll < 0) {
        newScroll = 0;
      } else if (newScroll > maxScroll) {
        newScroll = maxScroll;
      }

      // Set the scroll position to the new value with smooth behavior
      carouselRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth", // Add smooth scrolling behavior
      });
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f9f9f9",
        position: "relative",
      }}
    >
      <Typography variant="h4" fontWeight={750} align="center" color="black" gutterBottom style={{fontWeight:'bold', color: 'black',fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' }}}>
        Why Us?
      </Typography>
         <Typography
          variant="h5"
          align="center"
          color="black"
          paragraph
          sx={{
            display: "block", // Remove line clamping for full text display
            textAlign: "center",
          }}
        >
          Is your salary running low before the month ends? Don’t stress over it – SalarySaathi is here to help! Get a quick loan disbursed directly into your account in just 5 minutes.
        </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <IconButton
          onClick={() => scrollCarousel("left")}
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            zIndex: 1,
            color: "black",
          }}
        >
          <ArrowBackIos />
        </IconButton>
        <Box
          ref={carouselRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            whiteSpace: "nowrap",
            "&::-webkit-scrollbar": { display: "none" },
            gap: 2, // Adding gap between cards
            padding: "20px 0", // Padding around the carousel for better spacing
          }}
        >
          {cardDetails.map((item, index) => (
            <Box key={index} sx={{ display: "inline-block" }}>
              <CarouselItemDetail
                imgUrl={item.imgUrl}
                imgTitle={item.title}
                description={item.description}
                index={index}
              />
            </Box>
          ))}
        </Box>
        <IconButton
          onClick={() => scrollCarousel("right")}
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            zIndex: 1,
            color: "black",
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
}
