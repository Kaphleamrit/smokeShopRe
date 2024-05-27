import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import CarouselComponent from './CarouselComponent';
import tobacco from '../assets/tobacco.jpg';
import accessories from '../assets/accessories.jpg';
import vape from '../assets/vapes.jpg';

function Home() {
  return (
    <Container>
      <CarouselComponent />
      <Typography variant="h4" gutterBottom className="mt-5" id = "products">
        Product Categories
      </Typography>
      <Grid container spacing={4}> 
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <CardMedia
              component="img"
              height="300"
              image={tobacco}
              title="Tobacco"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ color: 'white', fontFamily: 'Kaushan Script'}}>
                Tobacco
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: 'white' }}>
                High quality tobacco products.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <CardMedia
              component="img"
              height="300"
              image={accessories}
              title="Accessories"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ color: 'white', fontFamily: 'Kaushan Script' }}>
                Accessories
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: 'white' }}>
                All the accessories you need.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <CardMedia
              component="img"
              height="300"
              image={vape}
              title="Vapes"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ color: 'white', fontFamily: 'Kaushan Script' }}>
                Vapes
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: 'white' }}>
                Latest vaping products.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
