import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import LocationOn from "@material-ui/icons/LocationOn";
import Phone from "@material-ui/icons/Phone";
import Email  from "@material-ui/icons/Email";
import {makeStyles}
from '@material-ui/core/styles';

const useStyles=makeStyles({
  root:{
    backgroundColor:'black',
    color:'white',
  
    
    
  }
  
})

function GridStyled(){
  const classes=useStyles()
  return <Grid className={classes.root}></Grid>
}

export default function App() {
  const classes=useStyles()
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Container width="xs" style={{ backgroundColor: 'orange' }}>
            <h1>KARABO MALEHU MOLEPO</h1>
            <p>front-end developer</p>
            <div style={{paddingTop:'20px',
          margin:"10px",
          width:"60px",
          height:"60px"}}>
            <Avatar alt="src" src="https://www.facebook.com/photo.php?fbid=1136973793451071&set=pb.100014153838877.-2207520000..&type=3"/>
            </div>
          </Container>
        </Grid>

        <Grid item xs={8} container>
          <Container width="xs" style={{ backgroundColor: 'orange' }}>
           <h2> EDUCATION</h2>
            
          </Container>
          <Grid item xs={6}>
            
            <div>
              <List>
                <ListItem>
              <Box bgcolor="orange" width={20} height={20} />
           
              <ListItemText>
                2010-2014<br/>
               MAKGOKA HIGH SCHOOL
               </ListItemText>
               </ListItem>
               </List>
            </div>
            {/*<div> <Rating name="size-small" defaultValue={2} size="small" />
<Rating name="size-medium" defaultValue={2} />
  <Rating name="size-large" defaultValue={2} size="large" /></div>*/}
          </Grid>
          <Grid item xs={6}>
            
            <Typography>NATION SENIOR CERTIFICATE</Typography>
          </Grid>
          <Grid item xs={6}>
            
            <div>
              <List>
                <ListItem>
              <Box bgcolor="orange" width={20} height={20} />
              <ListItemText>2015-2018<br/> EKURHULENI WEST TVET COLLGE </ListItemText>
              </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={6}>
            
            <Typography>
              NATIONAL CERTIFICATE (VOCATION IN INFORMATION TECHNOLOGY AND
              COMPUTER SCIENCE NQF LEVEL 4
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={4} container   justifyContent="center"
  alignItems="center" className={classes.root} style={{textAlign:"center"}}
 >
   <Grid item={12} >
     
     <h2 alignItems>PROFILE</h2>
     <Typography>
       A self-motivated,creative ,ambitious and hardworking individual as well as having a strong ability to communuicate and work in a team effectively seek to apply for the position of intern front-end developer to enhance my technical skills to contribute to the company growth.
     </Typography>

   </Grid>
          
          <Box display="flex" border={3} borderColor ="orange"width={1} height={25} alignItems="center"  justifyContent="center" > 
          CONTACT ME
         </Box>
         <Grid item xs={12}>
         <LocationOn style={{color:"orange"}}/ ><lebel>  ADDRESS
             <p >11841 Middle Street 
              Mamelodi East
              Pretoria</p>
              0122</lebel>

          </Grid>
      {/*<Grid item xs={6}>
            
            <Typography>
              ADDRESS
              11841 Middle Street 
              Mamelodi
              Pretoria
              0122
              
              

            </Typography>
              </Grid>*/}
          <Grid item xs={12}>
          <Email style={{color:"orange"}}/ >
            <lebel>
            
              EMAIL
             <p> karabomolepo29@gmail.com</p>
              
            </lebel>
                        </Grid>
         {/* <Grid item xs={6}>
          
            <Typography>
              EMAIL
              karabomolepo29@gmail.com
              </Typography>
            </Grid>*/}
          <Grid item xs={12}>
          <Phone style={{color:"orange"}}/ >
       <lebel>
       
              PHONE
             <p> 0682072272</p> <p>0636788998</p>
              <p>13852401653</p>
            
        </lebel>
          </Grid>
          {/*<Grid item xs={6}>
          
            <Typography>
              PHONE
              0682072272/  0636788998
              13852401653
            </Typography>
          </Grid>*/}
          
        </Grid>

        <Grid item xs={8} container>
          <Container width="xs" style={{ backgroundColor: 'orange' }}>
            <h2>EXPERINCE</h2>
          </Container>
          <Grid item xs={6}>
            
            <div>
              <List>
                <ListItem>
              <Box bgcolor="orange" width={20} height={20} />
              <ListItemText>SEP 2018-MAR 2019 <br/>DETAIL CHECKER
              </ListItemText>
              </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={6}>
            
            <Typography>BHEKA MANAGEMENT SERVICE</Typography>
          </Grid>
          <Grid item xs={6}>
            
            <div>
              <List>
                <ListItem>
              <Box bgcolor="orange" width={20} height={20} />
              <ListItemText>
                2019-2020<br/>
               COMPUTER SCIENCE INTERN</ListItemText>
              </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={6}>
          
            <Typography>YANGZHOU POLYTECNIC COLLEGE</Typography>
          </Grid>
          <Grid item xs={6}>
            
            <div>
              <List>
                <ListItem>
              <Box bgcolor="orange" width={20} height={20} />
              <ListItemText>
                JUN 2020-JULY 2020 <br/>
                JAVA BACK-END DEVELOPMENT AND MAINTANACE
                INTERN
              </ListItemText>
              </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={6}>
            
            <Typography>
              YANGZHOU GUAMAI COMMUNICATION AND DEVELOPMENT
            </Typography>
          </Grid>
          <Grid item xs={6}>
            
            <div>
              <List>
                <ListItem>
              <Box bgcolor="orange" width={20} height={20} />
              <ListItemText>
                AUG 2020-SEP 2020 <br/>
                WEB FRONT-END PRODUCTION MAINTANANCE INTERN
              </ListItemText>
              </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={6}>
            
            <Typography>YANGZHOU INNOVATIVE ENTERPRISES MANAGEMENT</Typography>
          </Grid>
          <Grid item xs={6}>
            
            <div>
              <List>
                <ListItem>
              <Box bgcolor="orange" width={20} height={20} />
              <ListItemText>
                AUG 2020-SEP 2020<br/>
                 ONLINE MARKETING AND INTERNATIONAL COMMERCE
                INTERN
              </ListItemText>
              </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={6}>
            
            <Typography>NENOBLE GROUP</Typography>
          </Grid>
        </Grid>

        <Grid item xs={4} className={classes.root} style={{textAlign:"center"}}>
          
          <Box display="flex" border={3} borderColor ="orange"width={1} height={25} alignItems="center"  justifyContent="center" > 
          SKILLS
         </Box>
       <list >
         <ListItemText >
           HTML5
         </ListItemText>
         <ListItemText>
           CSS
         </ListItemText>
         <ListItemText>
           JAVASCRIPT
         </ListItemText>
         <ListItemText>
           JAVA
         </ListItemText>
         <ListItemText>
           MYSQL DATABASE
         </ListItemText>
         <ListItemText>
           PHYTHON
         </ListItemText>
         <ListItemText>
           VISUAL BASIC.NET(VB.NET)
         </ListItemText>
         <ListItemText>
           ADOBE PHOTOSHOP
         </ListItemText>
         <ListItemText>
           NETWOKING
         </ListItemText>
       </list>

       

        </Grid>
        

          
          <Grid item xs={12} >
            
          <Box bgcolor="orange" width={1} height={20} />
         

          
          </Grid>
         
      </Grid>
    </div>
  );
}
