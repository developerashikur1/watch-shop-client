import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { yellow } from '@mui/material/colors';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Login.module.css';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../contexts/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {googleSignInMethod, signInUsingUserPassword} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    
    // react hook form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        signInUsingUserPassword(data.userEmail, data.userPassword, location, navigate);
        reset();
    };
    
    const handleGoogleButton = (e) =>{
        e.preventDefault();
        googleSignInMethod(location, navigate);
    }

    return (
        <>
            <Box sx={{my:16}}>
                <Container>
                    <Typography fontWeight={900} sx={{textAlign:'center', mb:6, fontSize :{md:45, xs:32 }, color:yellow[800]}} variant="h2"  gutterBottom component="div">
                    Login
                    </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={0} md={4}>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <form className={styles.reviewControlForm} onSubmit={handleSubmit(onSubmit)}>
                                    <input placeholder='Your Email'{...register("userEmail")} />
                                    <input placeholder="Password" type="password" {...register("userPassword")} />
                                    <button className={styles.addReviewButton} type="submit">Login</button>
                                </form>
                                <Box style={{borderBottom:'1px solid grey',position:'relative', margin:'3rem 0rem'}}><span style={{position:'absolute', bottom:'-10px', padding:'1px 5px', backgroundColor:'white', left:'49%'}}>or</span></Box>
                                <Button className={styles.addReviewButton} sx={{width:'100%'}} onClick={handleGoogleButton}><GoogleIcon sx={{color:'green', fontSize:32}}/> &nbsp; Sign in with Google</Button>
                                <br/><br/><br/>
                                <Link to="/register" style={{fontWeight:'800', textDecoration:'none'}}>Not Registered? <span style={{color:'green'}}>REGISTER NOW</span></Link>
                            </Grid>

                            <Grid item xs={0} md={4}>
                            </Grid>
                        </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Login;