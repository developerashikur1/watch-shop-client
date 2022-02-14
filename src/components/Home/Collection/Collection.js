import { Container, Grid, Typography } from '@mui/material';
import React from 'react';


const collections = [
    {title:'Explore Collections', subTitle:'Perfect Match', img:'https://i.ibb.co/dBbtqVs/left-initial-banner2.jpg'},
    {title:'Special Prices', subTitle:'Save on Time!', img:'https://i.ibb.co/Chg5mF8/Clock-22.jpg'},
  ];

const Collection = () => {
    return (
        <>
            <Container sx={{py:8}}>
                <Grid container spacing={2}>
                    {collections.map(one=><Grid key={one?.title} item xs={12} md={6}>
                        <Grid style={{background:`url(${one?.img})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'100%', padding:'6rem 1rem'}} container spacing={0}>
                            <Grid item xs={6} md={6}>
                            <Typography fontWeight={500} sx={{color:'white', mb:-0.5, fontSize:{md:22, xs:18}, textAlign:{ md:'left' }}} variant="h5" gutterBottom component="div">
                            {one?.title}
                            </Typography>   
                            <Typography fontWeight={500} sx={{color:'white', fontSize:{md:32, xs:24}, textAlign:{ md:'left' }}} variant="h5" gutterBottom component="div">
                            {one?.subTitle}
                            </Typography>   
                            </Grid>
                            <Grid item xs={6} md={6}>
                            </Grid>
                        </Grid>
                    </Grid>)}
                </Grid>
            </Container>
        </>
    );
};

export default Collection;