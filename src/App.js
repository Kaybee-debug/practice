import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LocationOn from "@material-ui/icons/LocationOn";
import Phone from "@material-ui/icons/Phone";
import Email  from "@material-ui/icons/Email";



export default function App() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Container width="xs" style={{ backgroundColor: 'orange' }}>
            <h1>KARABO MALEHU MOLEPO</h1>
          </Container>
        </Grid>

        <Grid item xs={8} container>
          <Container width="xs" style={{ backgroundColor: 'orange' }}>
            <h2>EDUCATION</h2>
          </Container>
          <Grid item xs={6}>
            hell1
            <div>
              <Box bgcolor="orange" width={20} height={20} />
              <Typography>2010-2014 MAKGOKA HIGH SCHOOL</Typography>
            </div>
            {/*<div> <Rating name="size-small" defaultValue={2} size="small" />
<Rating name="size-medium" defaultValue={2} />
  <Rating name="size-large" defaultValue={2} size="large" /></div>*/}
          </Grid>
          <Grid item xs={6}>
            hello 1.1
            <Typography>NATION SENIOR CERTIFICATE</Typography>
          </Grid>
          <Grid item xs={6}>
            hello 2
            <div>
              <Box bgcolor="orange" width={20} height={20} />
              <Typography>2015-2018 EKURHULENI WEST COLLGE </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            hello 2.1
            <Typography>
              NATIONAL CERTIFICATE (VOCATION IN INFORMATION TECHNOLOGY AND
              COMPUTER SCIENCE
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={4} container   justifyContent="center"
  alignItems="center"
 >
          experience1111
          <Box display="flex" border={3} borderColor ="orange"width={1} height={25} alignItems="center"  justifyContent="center" > 
          CONTACT ME
         </Box>
         <Grid item xs={6}>
         <LocationOn style={{color:"orange"}}/ >

          </Grid>
          <Grid item xs={6}>
            ga molepo 2
            <Typography>
              ADDRES
              5668 Rachaka Street Section Q
              Mamelodi west ,Pretoria
              
              

            </Typography>
          </Grid>
          <Grid item xs={6}>
          <Email style={{color:"orange"}}/ >
            
          </Grid>
          <Grid item xs={6}>
          
            <Typography>
              EMAIL
              karabomolepo29@gmail.com
              </Typography>
          </Grid>
          <Grid item xs={6}>
          <Phone style={{color:"orange"}}/ >
           
          </Grid>
          <Grid item xs={6}>
            ga molepo 6
            <Typography>
              PHONE
              0682072272
              0636788998
              13852401653
            </Typography>
          </Grid>
          
        </Grid>

        <Grid item xs={8} container>
          <Container width="xs" style={{ backgroundColor: 'orange' }}>
            <h2>EXPERINCE</h2>
          </Container>
          <Grid item xs={6}>
            experinceR
            <div>
              <Box bgcolor="orange" width={20} height={20} />
              <Typography>SEP 2018-MAR 2019 DETAIL CHECKER</Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            hello 1.1
            <Typography>BHEKA MANAGEMENT SERVICE</Typography>
          </Grid>
          <Grid item xs={6}>
            experinceRR
            <div>
              <Box bgcolor="orange" width={20} height={20} />
              <Typography>2019-2020 COMPUTER SCIENCE INTERN</Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            hello 1.111111
            <Typography>YANGZHOU POLYTECNIC COLLEGE</Typography>
          </Grid>
          <Grid item xs={6}>
            experince MG
            <div>
              <Box bgcolor="orange" width={20} height={20} />
              <Typography>
                JUN 2020-JULY 2020 JAVA BACK-END DEVELOPMENT AND MAINTANACE
                INTERN
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            hello FF
            <Typography>
              YANGZHOU GUAMAI COMMUNICATION AND DEVELOPMENT
            </Typography>
          </Grid>
          <Grid item xs={6}>
            experinceSS
            <div>
              <Box bgcolor="orange" width={20} height={20} />
              <Typography>
                AUG 2020-SEP 2020 WEB FRONT-END PRODUCTION MAINTANANCE INTERN
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            hello SS
            <Typography>YANGZHOU INNOVATIVE ENTERPRISES MANAGEMENT</Typography>
          </Grid>
          <Grid item xs={6}>
            experinceEMS
            <div>
              <Box bgcolor="orange" width={20} height={20} />
              <Typography>
                AUG 2020-SEP 2020 ONLINE MARKETING AND INTERNATIONAL COMMERCE
                INTERN
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            hello EMS
            <Typography>NENOBLE GROUP</Typography>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          experience3
          <Box display="flex" border={3} borderColor ="orange"width={1} height={25} alignItems="center"  justifyContent="center" > 
          SKILLS
         </Box>
        
       

        </Grid>
      </Grid>
    </div>
  );
}
