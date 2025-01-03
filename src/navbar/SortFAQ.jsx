import React, { useEffect, useRef, useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import backgroundImage from '../assets/image/Frame 45.png'; // Replace with your background image path

const SortFAQ = () => {
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

    return (
        <Box
            className="loan-calculate"
            sx={{
                width: '100%',
                height: 'auto',
                padding: 4,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#f9f9f9',
                backdropFilter: 'blur(5px)',

                // Responsive background image styling
                '@media (max-width: 1024px)': {
                    backgroundSize: 'contain', // For tablets and smaller screens, use 'contain' to fit within the container
                    backgroundPosition: 'top center', // Adjust position for smaller screens
                },
                '@media (max-width: 600px)': {
                    backgroundSize: 'contain', // For mobile devices, maintain the 'contain' behavior
                    backgroundPosition: 'top center', // Ensure the background is positioned well on mobile
                },
            }}
            ref={faqRef}
        >
            <Typography
                variant="h3"
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#135deg',
                    mb: 4,
                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' }, // Adjust font size based on screen size
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                Frequently Asked Questions
            </Typography>

            <Box
                sx={{
                    margin: '40px',
                    padding: '2rem',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    '@media (max-width: 600px)': {
                        margin: '20px',
                        padding: '1rem',
                    },
                }}
            >
                <Paper elevation={0} sx={{ overflow: 'hidden', backgroundColor: 'transparent' }}>
                    <div>
                        {faqItems.map((faq, index) => (
                            <Accordion
                                key={index}
                                sx={{
                                    backgroundColor: 'transparent',
                                    opacity: isVisible ? 1 : 0,
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={
                                        <ExpandMoreIcon
                                            sx={{
                                                color: 'black',
                                                transition: 'color 0.3s ease',
                                                fontSize: '2.5rem', // Adjust this value to increase the size
                                                '.Mui-expanded &': {
                                                    color: 'white',
                                                },
                                                '&:hover': {
                                                    color: 'white',
                                                },
                                            }}
                                        />
                                    }
                                    aria-controls={`faq${index}-content`}
                                    id={`faq${index}-header`}
                                    sx={{
                                        backgroundColor: 'transparent',
                                        color: 'black',
                                        transition: 'background-color 0.3s ease',
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
                                        <Typography
                                            sx={{
                                                fontFamily: 'Arial, sans-serif',
                                                color: 'inherit',
                                                fontSize: '2rem',
                                                fontWeight: 'bold',
                                                margin: '0 1rem 0 0',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {String(index + 1).padStart(2, '0')}.
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Arial, sans-serif',
                                                color: 'inherit',
                                                fontSize: '1.25rem',
                                                margin: '0',
                                                textAlign: 'center',
                                                width: '100%',
                                            }}
                                        >
                                            {faq.question}
                                        </Typography>
                                    </Box>
                                </AccordionSummary>

                                <AccordionDetails
                                    sx={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        color: 'black',
                                        fontSize: '1rem',
                                        padding: '1rem 1.8rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: 'Arial, sans-serif',
                                            color: 'inherit',
                                        }}
                                    >
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </Paper>
            </Box>
        </Box>
    );
};

// FAQ items data
const faqItems = [
    {
        question: 'What does SalarySaathi do and how can it help me?',
        answer: 'SalarySaathi is your digital lending buddy, who is a one-stop solution for your financial assistance! We are here to offer fast, hassle-free personal loans, especially for salaried individuals who have struggled with traditional bank loans. Whether it’s a medical emergency, wedding setup, or consolidating debt, we provide financial solutions customized as per your needs.'
    },
    {
        question: 'How is SalarySaathi different from a traditional bank?',
        answer: 'Unlike traditional banks that may reject loan applications based on strict criteria, SalarySaathi is a part of RICHMAN FINCAP LIMITED, which is an RBI-registered NBFC. We specialize in providing loans to salaried class who may not meet traditional lending standards. We also offer quick approvals, minimal paperwork, and prompt fund transfers, making the borrowing process easy and stress-free.'
    },
    {
        question: 'How do I apply for a loan with SalarySaathi?',
        answer: 'It’s super simple! Just follow these 3 steps: • Fill in your basic details • Upload your KYC documents (PAN, Aadhaar, salary slips, and bank statements) • Get your funds instantly credited once they are approved!'
    },
    {
        question: 'What loan amount can I borrow?',
        answer: 'You can borrow anywhere between ₹5,000 to ₹1,00,000, depending on your eligibility and needs. Use our loan calculator to see what works best for you.'
    },
    {
        question: 'How do I repay the loan?',
        answer: 'Repaying your loan is super easy! You can choose between UPI or a Bank Transfer. We offer flexible repayment options so you can pay on time without any stress.'
    },
];

export default SortFAQ;
