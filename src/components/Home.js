import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import CarouselComponent from './CarouselComponent';
import scary from '../assets/scary.jpg';
import bangers from '../assets/bangers.jpg';
import vape from '../assets/vapess.jpg';
import backwoods from '../assets/backwoods.jpg';
import bongg from '../assets/bongg.jpg';
import cig from '../assets/cig.jpg';
import clearEyes from '../assets/clearEyes.jpg';
import kratom from '../assets/kratom.jpg';
import pineapple from '../assets/pineapple.jpg';
import pipp from '../assets/pipppp.jpg';
import pods from '../assets/pods.jpg';
import polkadot from '../assets/polkadot.jpg';
import pompom from '../assets/pompom.jpg';
import rawCones from '../assets/rawCones.jpg';
import show from '../assets/show.jpg';
import torches from '../assets/torches.jpg';
import zigzag from '../assets/zigzag.jpg';
import zyn from '../assets/zyn.jpg';

const products = [
  { image: scary, title: "Bongs", category: "Bongs", description: "High quality cool looking bongs." },
  { image: bangers, title: "Glass Bowl", category: "Glass Bowl", description: " colorful, artistic glass accessories" },
  { image: vape, title: "Vapes", category: "Vapes", description: "Latest vaping products." },
  { image: backwoods, title: "Backwoods", category: "Tobacco", description: "Premium Hemparillo cigars." },
  { image: bongg, title: "Bong", category: "Glassware", description: "Stylish and functional glass pipes" },
  { image: cig, title: "Cigarettes", category: "Tobacco", description: "Top-quality cigarettes." },
  { image: clearEyes, title: "Clear Eyes", category: "Accessories", description: "Relieve redness and dryness." },
  { image: kratom, title: "Kratom", category: "Herbal Products", description: "Natural Kratom products." },
  { image: pineapple, title: "Bongs", category: "Bongs", description: "bong with design" },
  { image: pipp, title: "Pipes", category: "Accessories", description: "Various styles of smoking pipes." },
  { image: pods, title: "Pods", category: "Vapes", description: "Different flavors of vape pods." },
  { image: polkadot, title: "Polkadot", category: "Edibles", description: "Delicious polkadot, koi edibles." },
  { image: pompom, title: "Pom Pom", category: "Accessories", description: "Colorful pom poms." },
  { image: rawCones, title: "Raw Cones", category: "Accessories", description: "Natural raw cones for rolling." },
  { image: show, title: "Show", category: "Blunts", description: "Premium blunt wraps." },
  { image: torches, title: "Torches", category: "Accessories", description: "High-quality torches." },
  { image: zigzag, title: "Zig Zag", category: "Rolling Papers", description: "Classic rolling papers." },
  { image: zyn, title: "Zyn", category: "Nicotine Pouches", description: "Nicotine pouches in various flavors." }
];

const cardStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: 'white',
  fontFamily: 'Kaushan Script',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(255, 255, 255, 0.3)',
  },
  borderRadius: '15px',
  overflow: 'hidden',
};

const cardMediaStyles = {
  height: '200px',
  objectFit: 'cover',
  borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
};

const cardContentStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  padding: '16px',
  borderRadius: '0 0 15px 15px',
};

const titleStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0 )',
  backdropFilter: 'blur(5px)',
  padding: '8px',
  borderRadius: '10px',
  marginBottom: '8px',
};

function Home() {
  return (
    <Container>
      <CarouselComponent />
      <Typography variant="h4" gutterBottom className="mt-5" id="products">
        Product Categories
      </Typography>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={cardStyles}>
              <CardMedia
                component="img"
                sx={cardMediaStyles}
                image={product.image}
                title={product.title}
              />
              <CardContent sx={cardContentStyles}>
                <Typography gutterBottom variant="h5" component="div" sx={titleStyles}>
                  {product.category}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{ color: 'white' }}>
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
