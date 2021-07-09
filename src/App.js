import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from  '@material-ui/core/Grid';




export default function App() {
  return (
    <div>

      <div>
        <Container maxWidth="xs" style={{ backgroundColor: 'Orange' }}>
          <h1>KARABO MALEHU MOLEPO</h1>
        </Container>
      </div>
      <div>
        <Grid container
        direction="row-reverse"
  justifyContent="flex-end"
  alignItems="stretch">
   
  <div>
      <Container maxWidth="xs" style={{ backgroundColor: 'Orange' }}>
        <h1>EDUCATION</h1>
      
      </Container>
      </div>

      <div>
        <div>
          <Container maxWidth="xs" style={{ backgroundColor: 'Orange' }}>
            <h1>EXPERINCE</h1>
          </Container>
        </div>
      </div>
        </Grid>
      </div>
  <div>
        <Grid container
        direction="row-reverse"
  justifyContent="flex-start"
  alignItems="stretch">
    </Grid>
  </div>

    </div>
      

      <div>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons" color="primary">
          Link
        </Button>
      </div>
    </div>
  );
}
