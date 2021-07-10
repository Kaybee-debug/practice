import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';





export default function App() {
  return (
    <div>
      <Grid container spacing={2}> 
      <Grid item xs={12}>
      <Container width="xs" style={{backgroundColor:"orange"}} >
          <h1>KARABO MALEHU MOLEPO</h1>
            </Container>
        
          
        </Grid>

        <Grid item xs={6} container>
          <Container width="xs" style={{backgroundColor:"orange"}}>
          <h2>EDUCATION</h2>
            </Container>
           < Grid item xs={6}>
            hello 1
           </Grid>
           < Grid item xs={6}>
            hello 1.1
           </Grid>
           < Grid item xs={6}>
            hello 2
           </Grid>
           < Grid item xs={6}>
            hello 2.1
           </Grid>
        </Grid>

        <Grid item xs={6}>
        experience
        </Grid>

        <Grid item xs={6}>
        <Container width="xs" style={{backgroundColor:"orange"}}>
          <h2>EXPERINCE</h2>
            </Container>
        
          
        experience
        </Grid>

        <Grid item xs={6}>
        experience
        </Grid>

        </Grid>
    </div>
    
   
  

    
      
  );
}
