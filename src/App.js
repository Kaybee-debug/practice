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
    <Container>
      <Grid container spacing={1} >
<Grid  container    >
<Container style={{ backgroundColor: 'orange', alignItems:'center' ,justifyContent:'center' ,display:'flex'}} >
<Grid item xs={5}  >

        <Avatar  alt ="kaybee"   style={{height:300, width:300}}
        src="https://scontent.fpry1-1.fna.fbcdn.net/v/t39.30808-6/210610593_1136973800117737_3255232654783952712_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeF7wyf629T7fVgwKmR7tjUABIJvmlnjCdIEgm-aWeMJ0gNj2tFr3EZ_Dg6JLkzrnIWo8LKLBOX__WOAMF1Ya2Oc&_nc_ohc=qwPD5LVmFDcAX8OfHjv&_nc_pt=5&_nc_ht=scontent.fpry1-1.fna&oh=6e0b1a284217db651ceccc69157fd1f5&oe=60F0E853"  >
            </Avatar>
          
          </Grid>
        <Grid  item xs={7} justifyContent="flex-start" style={{textAlign:"center"}} width='xs' >
       
        <h1>MOLEPO KARABO MALEHU<br/>
            Front-End Developer
            </h1>
          
            </Grid>
            </Container>
          </Grid>
          <Grid item xs={12}  style={{}}display="flex" alignItems="center"  justifyContent="center" > 
          <h2  >PROFILE</h2>
     <p>
       A self-motivated,creative ,ambitious and hardworking individual as well as having a strong ability to communuicate and work in a team effectively seek to apply for the position of intern front-end developer to enhance my technical skills to contribute to the company growth.
     </p>
          
          </Grid>
      

        <Grid  item xs={8}direction="row" >
          
          <div width="xs" style={{ backgroundColor: 'orange' }}>
           <h2> EDUCATION</h2>
          </div>
          </Grid>
          
          <Grid item xs={4}  className={classes.root} style={{}}>
            <div></div>
             </Grid>
          <Grid item xs={4} direction="row"style={{display:"flex",justifyContent:"flex-start" }} >
            
            
              <List>
                <ListItem>
              <Box bgcolor="orange" width={20} height={20} />
           
              <ListItemText>
                2010-2014<br/>
               MAKGOKA HIGH SCHOOL
               </ListItemText>
               </ListItem>
               </List>
            
            
           
          </Grid>
          <Grid item xs={4} direction="row"style={{display:"flex",justifyContent:"flex-start" }}>
            
            NATIONAL SENIOR CERTIFICATE
          </Grid>
          <Grid item xs={4}  className={classes.root} style={{}}>
            </Grid>
          

          <Grid item xs={4}direction="row"style={{display:"flex",justifyContent:"flex-start" }}>
            
            
              <List>
                <ListItem>
              <Box bgcolor="orange" width={20} height={20} />
              <ListItemText>2015-2018<br/> EKURHULENI WEST TVET COLLGE </ListItemText>
              </ListItem>
              </List>
            
          </Grid>
          <Grid item xs={4} direction="row"style={{display:"flex",justifyContent:"flex-start" }}>
            
            
              NATIONAL CERTIFICATE (VOCATION IN INFORMATION TECHNOLOGY AND
              COMPUTER SCIENCE NQF LEVEL 4
          
          
        </Grid>
        

        <Grid item xs={4} className={classes.root} style={{}} > 
        <Box display="flex" border={3} borderColor ="orange"width={1} height={25} alignItems="center"  justifyContent="center"  > 
          CONTACT ME
         </Box>
        </Grid>
        <Grid  item xs={8} direction="row" >
          <div width="xs" style={{ backgroundColor: 'orange' }}>
            <h2>EXPERINCE</h2>
          </div>
          </Grid>
          

        <Grid item xs={4} className={classes.root} style={{textAlign:'center'}}>
        <LocationOn style={{color:"orange"}}/ >
          <lebel> 
             ADDRESS<br/>
             11841 Middle Street 
              Mamelodi East
              Pretoria<br/>
              0122
          </lebel>
           </Grid>

        <Grid item xs={4}direction="row"style={{display:"flex",justifyContent:"flex-start" }}>
            
            
              <List>
                <ListItem>
              <Box bgcolor="orange" width={20} height={20} />
              <ListItemText>SEP 2018-MAR 2019 <br/>DETAIL CHECKER
              </ListItemText>
              </ListItem>
              </List>
          
          </Grid>
          <Grid item xs={4}direction="row"style={{display:"flex",justifyContent:"flex-start" }}>
            
            BHEKA MANAGEMENT SERVICE
          </Grid>

          <Grid item xs={4} className={classes.root} style={{textAlign:"center"}} >
          <Email style={{color:"orange"}}/ >
            <lebel>
            
              EMAIL <br/>
              karabomolepo29@gmail.com
              
            </lebel>
             </Grid>

          <Grid item xs={4} direction="row"style={{display:"flex",justifyContent:"flex-start" }}>
            
            
              <List>
                <ListItem>
              <Box bgcolor="orange" width={20} height={20} />
              <ListItemText>
                2019-2020<br/>
               COMPUTER SCIENCE INTERN</ListItemText>
              </ListItem>
              </List>
            
          </Grid>
          <Grid item xs={4}direction="row"style={{display:"flex",justifyContent:"flex-start" }}>
          
            YANGZHOU POLYTECNIC COLLEGE
          </Grid>

          <Grid item xs={4} className={classes.root} style={{textAlign:"center"}} >
          <Phone style={{color:"orange"}}/ >
       <lebel>
       
              PHONE
              0682072272<br/>
              0636788998<br/>
              13852401653
            
        </lebel>
             </Grid>

          <Grid item xs={4} direction="row"style={{display:"flex",justifyContent:"flex-start" }}>
            
            
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
            
          </Grid>
          <Grid item xs={4}direction="row"style={{display:"flex",justifyContent:"flex-start" }}>
            
            
              YANGZHOU GUAMAI COMMUNICATION AND DEVELOPMENT
            
          </Grid>

          <Grid item xs={4} className={classes.root} style={{textAlign:"center"}}> </Grid>
          <Grid item xs={4} direction="row"style={{display:"flex",justifyContent:"flex-start" }}>
            
              <List>
                <ListItem>
              <Box bgcolor="orange" width={20} height={20} />
              <ListItemText>
                AUG 2020-SEP 2020 <br/>
                WEB FRONT-END PRODUCTION MAINTANANCE INTERN
              </ListItemText>
              </ListItem>
              </List>
          </Grid>
          <Grid item xs={4}direction="row"style={{display:"flex",justifyContent:"flex-start" }}>
            
            YANGZHOU INNOVATIVE ENTERPRISES MANAGEMENT
          </Grid>
          <Grid item xs={4} className={classes.root} style={{textAlign:"center"}}> 
          <Box display="flex" border={3} borderColor ="orange"width={1} height={25} alignItems="center"  justifyContent="center" > 
          SKILLS
         </Box>
          </Grid>

          <Grid item xs={4} direction="row"style={{display:"flex",justifyContent:"flex-start" }}>
            
            
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
            
          </Grid>
          <Grid item xs={4} direction="row"style={{display:"flex",justifyContent:"flex-start" }}>
            
            NENOBLE GROUP
          </Grid>

          

<Grid item xs={4} className={classes.root} style={{textAlign:"center"}}>
          
         
       <list >
         <ListItemText >
           HTML5
           <br></br>

         </ListItemText>
         <ListItemText>
           CSS
           <br></br>
         </ListItemText>
         <ListItemText>
           JAVASCRIPT
           <br></br>
         </ListItemText>
         <ListItemText>
           JAVA
           <br></br>
         </ListItemText>
         <ListItemText>
           MYSQL DATABASE
           <br></br>
         </ListItemText>
         <ListItemText>
           PHYTHON
           <br></br>
         </ListItemText>
         <ListItemText>
           VISUAL BASIC.NET(VB.NET)
           <br></br>
         </ListItemText>
         <ListItemText>
           ADOBE PHOTOSHOP
           <br></br>
         </ListItemText>
         <ListItemText>
           NETWOKING
         </ListItemText>
       </list>
       </Grid>

       <Grid item xs={12} style={{backgroundColor:'orange'}} >
         </Grid>   
         
      </Grid>
    </Container>
  );
}
