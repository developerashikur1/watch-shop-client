import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../contexts/useAuth';


const extraBoss = {
    height:"100px",
    width:"100px",
     borderRadius:'100%', 
     boxShadow:'1px 1px 6px grey',
     border:'3px solid gold',
}


const DashboardHome = () => {
    const {user, logOut} = useAuth();

    const handleLogout = () =>{
        logOut();
    }
    return (
        <>
        <Box>
                    <Typography fontWeight={900} sx={{textAlign:'center', mb:6, fontSize :{md:46, xs:26 },
                    color:'#ffc400'}} variant="h2"  gutterBottom component="div">
                    Profile
                    </Typography> 
                    <Grid container spacing={2}>
                        <Grid item xs={0} md={3}>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ minWidth: 275, boxShadow: 3, p:6, textAlign:'center' }}>
                            <CardContent>
                            <img style={extraBoss} src={user?.photoURL || 'https://i.ibb.co/ZSMBFC1/images.png'} alt=""/>
                                <Typography variant="h5" component="div"  sx={{pt:2}}>
                                {user?.displayName}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {user?.email}
                                </Typography>
                                <Typography variant="body2">
                                If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey
                                
                                {'"a benevolent smile"'}
                                </Typography>
                                <br/><br/>
                                <Button onClick={handleLogout} sx={{bgcolor:'orange', color:'grey'}}>Logout</Button>
                            </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={0} md={3}>

                        </Grid>
                    </Grid>
                    </Box>
        </>
    );
};

export default DashboardHome;