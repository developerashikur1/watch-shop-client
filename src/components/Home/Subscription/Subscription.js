import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Subscription.module.css';

const Subscription = () => {
        // react hook form
        const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
            console.log(data)
            // signInUsingUserPassword(data.userEmail, data.userPassword)
            reset();
        };
         
        const handleGoogleButton = (e) =>{
            e.preventDefault();
            // googleSignInMethod();
        }
    return (
        <>
         <Box sx={{bgcolor:'black'}}>
             <Container sx={{py:8}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                            <Typography fontWeight={300} sx={{color:'whiteSmoke',mb:4, fontSize:{md:32, xs:24}, textAlign:{ md:'left', xs:'center' }}} variant="h5" gutterBottom component="div">
                            Get in touch!
                            </Typography>  
                            <Typography fontWeight={300} sx={{color:'whiteSmoke', fontSize:{md:18, xs:16}, textAlign:{ md:'left', xs:'center' }}} variant="body1" gutterBottom component="div">
                            Synonym of Trust and Love for Timekeeping and Making of timepieces Since 1950.
                            </Typography> 
                            <Box sx={{mt:8}}>
                            <form className={styles.reviewControlForm} onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder='Your Email'{...register("userEmail",{required: "Required",pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address"}})}/>
                            <button className={styles.addReviewButton} type="submit">Subscribe</button>
                            </form>

                            </Box>
                               
                    </Grid>
                    <Grid item xs={0} md={2}>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width:'100%'}} src="https://i.ibb.co/LYnY1XJ/720p-00-00-06-17-Still001.jpg" alt=""/>
                    </Grid>
                </Grid>
             </Container>
         </Box>   
        </>
    );
};

export default Subscription;