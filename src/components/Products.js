import React from 'react';
import { Container, Typography } from '@mui/material';

function Products() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Products Page
      </Typography>
      <Typography variant="body1">
        List of products will be displayed here.
      </Typography>
    </Container>
  );
}

export default Products;
