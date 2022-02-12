import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { blue, indigo, lightBlue } from '@mui/material/colors';

const mineralDetaills = [
    {id:1, title:'left', name:'Royal Look', description:'if a buyer is not satisfied products or service'},
    {id:2, title:'left', name:'Swiss Engineering', subName:'2-5 mg/dm3', description:'if a buyer is not satisfied products or service'},
    {id:4, title:'right', name:'Premium Sapphire', description:'if a buyer is not satisfied products or service'},
    {id:5, title:'right', name:'Pendulum Move', description:'if a buyer is not satisfied products or service'},
]

const IntroducingWatch = () => {
    const [leftSide, setLeftSide] = useState([]);
    const [rightSide, setRightSide] = useState([]);
    useEffect(()=>{
        const left =(mineralDetaills.filter(details=>details.title.includes('left')));
        setLeftSide(left);
        const right =(mineralDetaills.filter(details=>details.title.includes('right')));
        setRightSide(right);
    },[]);
    return (
        <>
                <Container sx={{py:12}}>
                    <Typography fontWeight={600} sx={{textAlign:'center', fontSize :{md:18, xs:16 },
                    color:'whitesmoke'}} variant="h2"  gutterBottom component="div">
                    Introducing
                    </Typography> 
                    <Typography fontWeight={900} sx={{textAlign:'center', mb:6, fontSize :{md:46, xs:26 },
                    color:'#ffc400'}} variant="h2"  gutterBottom component="div">
                    Harry Winston
                    </Typography> 
                    <Typography fontWeight={600} sx={{textAlign:'center',mb:12, fontSize :{md:18, xs:16 },
                    color:'whitesmoke'}} variant="h2"  gutterBottom component="div">
                    Midnight Gothic Moon Phases
                    </Typography> 
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={3}>
                                {leftSide.map(left=><Box key={left.id} sx={{mb:6, textAlign:{xs:'center', md:'left'}}}>
                                <Typography fontWeight={500} sx={{ mb:2, fontSize :{md:20, xs:18 }, color:'whitesmoke'}} variant="h6"  gutterBottom component="div">
                                {left.name}
                                </Typography> 
                                <Typography fontWeight={400} sx={{ fontSize :{md:14, xs:12 },color:'whitesmoke'}} variant="h4"  gutterBottom component="div">
                                {left.description}
                                </Typography> 
                                </Box>
                                )}
                        </Grid>

                        <Grid item sx={{textAlign:'center',  display:{xs:'none', md:'block'}}} xs={12} md={6}>
                            <img style={{height:'100%', width:'55%',  marginLeft:0, marginRight:0}} src="https://i.ibb.co/ngD2DhD/Watch-mechanism.jpg" alt=""/>
                        </Grid>

                        <Grid item xs={12} md={3}>
                        {rightSide.map(right=><Box key={right.id} sx={{mb:6, textAlign:{md:'right', xs:'center'}}}>
                                <Typography fontWeight={500} sx={{ mb:2, fontSize :{md:20, xs:18 },color:'whitesmoke'}} variant="h6"  gutterBottom component="div">
                                {right.name}
                                </Typography> 
                                <Typography fontWeight={400} sx={{ fontSize :{md:14, xs:12 }, color:'whitesmoke'}} variant="h4"  gutterBottom component="div">
                                {right.description}
                                </Typography> 
                                </Box>
                                )}
                        </Grid>
                    </Grid>
                </Container>
        </>
    );
};

export default IntroducingWatch;