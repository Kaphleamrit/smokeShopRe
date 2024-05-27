import React from 'react';
import { Container, Typography, Paper, Box, Divider } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  padding: '40px',
  minHeight: '100vh',
});

const StyledPaper = styled(Paper)({
  padding: '30px',
  backgroundColor: 'rgba(100, 100, 100, 0.3)', // Slightly darker with less transparency
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Enhanced shadow for a modern look
  borderRadius: '10px', // Rounded corners
});

const StyledDivider = styled(Divider)({
  backgroundColor: '#34495e',
  margin: '20px 0',
});

const StyledTypography = styled(Typography)({
  color: 'white', // Set the font color to white
  fontWeight: '600',
  letterSpacing: '0.5px',
  marginBottom: '20px',
});

const Contact = () => {
  return (
    <StyledContainer>
      <StyledPaper elevation={3}>
        <StyledTypography variant="h4" gutterBottom>
          Contact Us
        </StyledTypography>
        <Typography variant="body1" paragraph style={{ color: 'white', fontWeight: '300', lineHeight: '1.6' }}>
          We would love to hear from you! Reach out to us with any questions, comments, or concerns.
        </Typography>
        <StyledDivider />
        <Box>
          <Typography variant="h6" gutterBottom style={{ color: 'white', fontWeight: '400', marginBottom: '10px' }}>
            Address:
          </Typography>
          <Typography variant="body2" paragraph style={{ color: 'white', fontWeight: '300', lineHeight: '1.6' }}>
            <a href="https://www.google.com/maps/search/?api=1&query=16111+Lakewood+Blvd,+Bellflower,+CA+90706" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              16111 Lakewood Blvd, Bellflower, CA 90706
            </a>
          </Typography>
          <Typography variant="h6" gutterBottom style={{ color: 'white', fontWeight: '400', marginBottom: '10px' }}>
            Phone Number:
          </Typography>
          <Typography variant="body2" paragraph style={{ color: 'white', fontWeight: '300', lineHeight: '1.6' }}>
            <a href="tel:+15622063422" style={{ color: 'white' }}>
              (562) 206-3422
            </a>
          </Typography>
        </Box>
        <div style={{ width: '100%', height: '400px', marginTop: '20px', borderRadius: '10px', overflow: 'hidden' }}>
          <iframe
            title="Google Map of 16111 Lakewood Blvd, Bellflower, CA 90706"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.3454185259224!2d-118.14309208478018!3d33.888165580647176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cb007ba88cc7%3A0x8280b31f1f24f5d0!2s16111%20Lakewood%20Blvd%2C%20Bellflower%2C%20CA%2090706%2C%20USA!5e0!3m2!1sen!2sin!4v1620498466527!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Contact;
 