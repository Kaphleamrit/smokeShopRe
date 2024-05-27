import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const WhiteTypography = styled(Typography)({
  color: 'white',
});

function Products() {
  return (
    <Container>
      <WhiteTypography variant="h4" gutterBottom>
        Products Page
      </WhiteTypography>
      <WhiteTypography variant="body1">
        List of products will be displayed here.
      </WhiteTypography>
    </Container>
  );
}

export default Products;
