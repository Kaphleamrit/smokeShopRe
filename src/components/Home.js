import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import CarouselComponent from './CarouselComponent';
import tobacco from '../assets/tobacco.jpg';
import accessories from '../assets/accessories.jpg';
import vape from '../assets/vapes.jpg'

function Home() {
  return (
    <Container>
      <CarouselComponent />
      <Typography variant="h4" gutterBottom className="mt-5">
        Product Categories
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={tobacco}
              title="Tobacco"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tobacco
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                High quality tobacco products.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={accessories}
              title="Accessories"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Accessories
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                All the accessories you need.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={vape}
              title="Vapes"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Vapes
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
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
