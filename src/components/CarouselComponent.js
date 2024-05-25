import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import pipes from '../assets/pipes3.jpg';
import vivazen from '../assets/vivazen.JPG';
import rhinos from '../assets/rhino2.jpg';
import '../Carousel.css';

function CarouselComponent() {
  const items = [
    {
      name: "Boost Your Performance with Rhino",
      description: "Unlock your full potential with Rhino, the ultimate sex pill for enhanced performance and stamina. Experience heightened sensations and long-lasting effects.",
      image: rhinos
    },
    {
      name: "Premium Smoking Pipes",
      description: "Discover our range of premium smoking pipes, crafted for the perfect smoking experience. Combining elegance and functionality, our pipes are ideal for both casual and dedicated smokers.",
      image: pipes
    },
    {
      name: "Vivazen: Pain Reliever and Energy Support",
      description: "Vivazen offers natural pain relief and energy support. Harness the power of herbal ingredients to alleviate pain and boost your energy levels throughout the day.",
      image: vivazen
    }
  ];

  return (
    <Container>
      <Box mt={4}> {/* Adds margin at the top */}
        <Carousel>
          {items.map((item, i) => (
            <Grid container spacing={3} key={i} alignItems="center" justifyContent="center">
              <Grid item xs={12}>
                <Card className="carousel-card">
                  <CardMedia
                    component="img"
                    image={item.image}
                    title={item.name}
                    className="carousel-image"
                  />
                  <CardContent className="carousel-content">
                    <Typography gutterBottom variant="h4" component="div" className="carousel-title">
                      {item.name}
                    </Typography>
                    <Typography variant="body1" component="p" className="carousel-description">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
}

export default CarouselComponent;
