import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../assets/image/Frame 536.png";

const FrontPage = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          // mt: -75,
          // [theme.breakpoints.down("sm")]: { mt: -60 },
          // "@media (width: 414px) and (height: 896px)": {
          //   mt: -70, // Specific height for iPhone XR
          // },
          // "@media (width: 1024px) and (height: 1366px)": {
          //   mt: -110, // Adjusted height for 1024x1336 screens
          // },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: "2.5rem",

            fontWeight: "bold",
            color: "black",
            [theme.breakpoints.down("sm")]: {
              fontSize: "2rem",
            },
            [theme.breakpoints.between("sm", "md")]: {
              fontSize: "2rem",
            },
            [theme.breakpoints.up("md")]: {
              fontSize: "2.5rem",
            },
          }}
        >
          Quickest, Easiest & Effortless Loan
          <p
            style={{ fontSize: "2.5rem", color: "orange", textAlign: "center" }}
          >
            in just 5 minutes
          </p>
        </Typography>

        <Button
          variant="contained"
          href="/apply-now"
          sx={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "14px", sm: "16px" }, // Adjust font size
            padding: { xs: "8px 16px", sm: "5px 10px" }, // Adjust padding
            animation: "blinking 1.5s infinite",
            "&:hover": {
              backgroundColor: "#FFAA00",
            },
            "@keyframes blinking": {
              "0%": { backgroundColor: "black", color: "white" },
              "50%": { backgroundColor: "#FFAA00", color: "black" },
              "100%": { backgroundColor: "black", color: "white" },
            },
          }}
        >
          Apply Now
        </Button>
      </Box>
      <Box
        sx={{
          overflowX: "hidden",
          width: "100%",
          backgroundColor: "#f9f9f9",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          color: "white",
          textAlign: "center",
          // padding: theme.spacing(2),
          height: { xs: "100vh", md: "110vh", sm: "125vh", lg: "100vh" }, // Same height across all screens
          "@media (width: 414px) and (height: 896px)": {
            height: "85vh", // Specific height for iPhone XR
          },
          "@media (width: 390px) and (height: 844px)": {
            height: "80vh", // Adjusted height for iPhone 12 Pro
          },
          "@media (width: 430px) and (height: 932px)": {
            height: "80vh", // Adjusted height for iPhone 14 Pro Max
          },
          "@media (width: 412px) and (height: 915px)": {
            height: "20vh", // Adjusted height for Pixel 7
          },
          "@media (width: 1024px) and (height: 1366px)": {
            height: "50vh", // Adjusted height for 1024x1336 screens
          },
          "@media (min-width: 768px) and (max-width: 820px) and (min-height: 1024px) and (max-height: 1180px)":
            {
              height: " 80vh" /* Adjusted height for specific screen sizes */,
            },
        }}
      >
        {" "}
        {/* Centered Content */}
        {/* Buttons in a smaller container */}
      </Box>
    </>
  );
};

export default FrontPage;
