import React, { useEffect, useState, useMemo } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box, CircularProgress } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import pipes from '../assets/pipes3.jpg';
import vivazen from '../assets/vivazen.JPG';
import rhinos from '../assets/rhino2.jpg';
import '../Carousel.css';

function CarouselComponent() {
  const items = useMemo(() => [
    {
      name: "Premium Smoking Pipes",
      description: "Discover our Elegant and Premium smoking pipes, crafted for the perfect experience.",
      image: pipes
    },
    {
      name: "Enhance Performance with Rhino", // Shortened title
      description: "The ultimate sex pill for enhanced performance and stamina.",
      image: rhinos
    },
    {
      name: "Vivazen: Pain Reliever and Energy Support",
      description: "Natural pain relief and energy support with herbal ingredients",
      image: vivazen
    }
  ], []);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const preloadImages = () => {
      const promises = items.map(item => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = item.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(promises)
        .then(() => setImagesLoaded(true))
        .catch(error => console.error('Error loading images:', error));
    };

    preloadImages();
  }, [items]);

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Container className="container" maxWidth="md">
      <Box mt={4}>
        {imagesLoaded ? (
          <Carousel
            autoPlay
            interval={currentIndex === 0 ? 500 : 4000} // 500ms for the first slide, 4000ms for subsequent slides
            onChange={handleChange}
          >
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
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default CarouselComponent;
