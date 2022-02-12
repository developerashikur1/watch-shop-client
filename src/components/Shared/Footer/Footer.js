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
             <Box>
                 <Grid container spacing={2}>
                     <Grid item xs={12} md={4}>
                         
                     </Grid>
                     <Grid item xs={6} md={4}>

                     </Grid>
                     <Grid item xs={6} md={4}>

                     </Grid>
                 </Grid>
             </Box>
             <Box>
                <Grid container sx={{textAlign:'center'}} spacing={2}>
                    <Grid item xs={0} md={3}>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                        <img style={{width:'100px'}} src="https://i.ibb.co/NtFcKD4/label-free.png" alt="" />
                        <Typography fontWeight={400} sx={{fontSize :{md:16, xs:14 },mb:3, color:'whiteSmoke'}} variant="h4"  gutterBottom component="div">
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