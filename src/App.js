import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Topography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Value from '@material-ui/core/Value';
import Box from  '@material-ui/core/Box';
import Button from  '@material-ui/core/Button';





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
          hell1
          <div>
          <Box  bgcolor="orange" width={20} height={20}>
          </Box>
          <Topography>
            2010-2014
            MAKGOKA HIGH SCHOOL
            </Topography>
          </div>
          
          {/*<div> <Rating name="size-small" defaultValue={2} size="small" />
<Rating name="size-medium" defaultValue={2} />
  <Rating name="size-large" defaultValue={2} size="large" /></div>*/}
           </Grid>
           < Grid item xs={6}>
            hello 1.1
            <Topography>
            NATION SENIOR CERTIFICATE
            </Topography>
           </Grid>
           < Grid item xs={6}>
            hello 2
            <div>
          <Box  bgcolor="orange" width={20} height={20}>
          </Box>
          <Topography>
            2015-2018
            EKURHULENI WEST COLLGE
            </Topography>
          </div>

           </Grid>
           < Grid item xs={6}>
            hello 2.1
            <Topography>
            NATIONAL CERTIFICATE (VOCATION IN INFORMATION TECHNOLOGY AND COMPUTER SCIENCE
            </Topography>
           </Grid>
        </Grid>

        <Grid item xs={6} >
        experience1111
       
        
        </Grid>

        <Grid item xs={6} container>
        <Container width="xs" style={{backgroundColor:"orange"}}>
          <h2>EXPERINCE</h2>
            </Container>
            < Grid item xs={6}>
          experinceR
          <div>
          <Box  bgcolor="orange" width={20} height={20}>
          </Box>
          <Topography>
            SEP 2018-MAR 2019
            DETAIL CHECKER
            </Topography>
          </div>
          </Grid>
          < Grid item xs={6}>
            hello 1.1
            <Topography>
            BHEKA MANAGEMENT SEW4RVICE
            </Topography>
           </Grid>
           < Grid item xs={6}>
          experinceRR
          <div>
          <Box  bgcolor="orange" width={20} height={20}>
          </Box>
          <Topography>
            SEP 2018-MAR 2019
            DETAIL CHECKER
            </Topography>
          </div>
          </Grid>
          < Grid item xs={6}>
            hello 1.111111
            <Topography>
            BHEKA MANAGEMENT SEW4RVICE
            </Topography>
           </Grid>
           < Grid item xs={6}>
          experince MG
          <div>
          <Box  bgcolor="orange" width={20} height={20}>
          </Box>
          <Topography>
            SEP 2018-MAR 2019
            DETAIL CHECKER
            </Topography>
          </div>
          </Grid>
          < Grid item xs={6}>
            hello FF
            <Topography>
            BHEKA MANAGEMENT SEW4RVICE
            </Topography>
           </Grid>
           < Grid item xs={6}>
          experinceSS
          <div>
          <Box  bgcolor="orange" width={20} height={20}>
          </Box>
          <Topography>
            SEP 2018-MAR 2019
            DETAIL CHECKER
            </Topography>
          </div>
          </Grid>
          < Grid item xs={6}>
            hello SS
            <Topography>
            BHEKA MANAGEMENT SEW4RVICE
            </Topography>
           </Grid>
           < Grid item xs={6}>
          experinceEMS
          <div>
          <Box  bgcolor="orange" width={20} height={20}>
          </Box>
          <Topography>
            SEP 2018-MAR 2019
            DETAIL CHECKER
            </Topography>
          </div>
          </Grid>
          < Grid item xs={6}>
            hello EMS
            <Topography>
            BHEKA MANAGEMENT SEW4RVICE
            </Topography>
           </Grid>
        </Grid>

        <Grid item xs={6}>
        experience3
        {/*<Typography id="non-linear-slider" gutterBottom>
  Temperature range
</Typography>
<Slider
  value={value}
  min={0}
  step={0.1}
  max={6}
  scale={(x) => x ** 10}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>*/}
        </Grid>

        </Grid>
    </div>
    
   
  

    
      
  );
}
