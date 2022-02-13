import { Box, Container, Grid, Typography } from '@mui/material';
import { grey, indigo, lime } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
         <Box sx={{bgcolor:'#1E1E1E'}}>
             <Container sx={{py:8}}>
             <Box sx={{mt:6}}>
                 <Grid sx={{textAlign:{md:'left', xs:'center'}}} container spacing={2}>
                     <Grid sx={{p:3}} item xs={12} md={4}>
                        <img style={{width:'20%',}} src="https://i.ibb.co/HrRjh9w/gold1.png" alt="" />
                        <Typography fontWeight={300} sx={{fontSize :{md:18, xs:16 },my:4, p:{md:0, xs:3}, color:'whiteSmoke'}} variant="h4"  gutterBottom component="div">
                        kitestudio team has consisted of young passionate developer and designers who are interested in creating state of the art themes.
                        </Typography> 
                        <img style={{width:'75%'}} src="https://i.ibb.co/FmWhYr5/payment-method2.png" alt="" />
                         
                     </Grid>
                     <Grid item xs={0} md={2}>

                     </Grid>
                     <Grid className={styles.menuLink} sx={{px:3}} item xs={12} md={3}>
                        <Link to="/">Terms & Condition</Link>
                        <Link to="/">Terms & conditions</Link>
                        <Link to="/">Contact Us</Link>
                        <Link to="/">About Us</Link>
                        <Link to="/">Our Mission</Link>
                     </Grid>
                     <Grid className={styles.menuLink} sx={{px:3}} item xs={12} md={3}>
                        <Link to="/">Your Account</Link>
                        <Link to="/">Send feedback</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Help</Link>
                     </Grid>
                 </Grid>
             </Box>
             <Box>
                <Grid container sx={{textAlign:'center', mt:{md:6, xs:3}}} spacing={0}>
                    <Grid item xs={0} md={3}>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                        <Typography fontWeight={400} sx={{fontSize :{md:16,  xs:14 },mb:3,p:3, color:'whiteSmoke'}} variant="h4"  gutterBottom component="div">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus tristique ligula quis orci malesuada tincidunt.
                        </Typography> 

                        <Box>
                            <Link to="/"><TwitterIcon className={styles.icons} sx={{fontSize:30, bgcolor:'rgb(255, 175, 27)', p:1.5, borderRadius: '50%', color:'whiteSmoke', mr:2}}/></Link>
                            <Link to="/"><FacebookRoundedIcon  className={styles.icons} sx={{fontSize:30, bgcolor:'rgb(255, 175, 27)', p:1.5, borderRadius: '50%', color:'whitesmoke', mr:2}}/></Link>
                            <Link to="/"><InstagramIcon  className={styles.icons} sx={{fontSize:30, bgcolor:'rgb(255, 175, 27)', p:1.5, borderRadius: '50%', color:'whiteSmoke', mr:2}}/></Link>
                            <Link to="/"><GoogleIcon  className={styles.icons} sx={{fontSize:30, bgcolor:'rgb(255, 175, 27)', p:1.5, borderRadius: '50%', color:'whiteSmoke', mr:2}}/></Link>
                        </Box>
                    </Grid>

                    <Grid item xs={0} md={3}>
                    </Grid>
                </Grid>
                </Box>  
             </Container>
         </Box>  
          <Box sx={{bgcolor:grey[900], py:4}}>
                <Typography fontWeight={400} sx={{textAlign:'center' , fontSize :{md:16, xs:14 }, color:'rgb(255, 175, 27)'}} variant="h4"  gutterBottom component="div">
                        © All Rights Reserved - 2022 - Ashikur Rahman
                </Typography> 
          </Box>
        </>
    );
};

export default Footer;