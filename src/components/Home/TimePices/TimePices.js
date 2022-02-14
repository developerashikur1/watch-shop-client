import { Box, Button, Container, Grid, LinearProgress, Tab, Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TimePices.css';

const TimePices = () => {
    const [allServices, setAllServices] = useState([]);
    const [services, setServices] = useState([]);
    const [value, setValue] = useState(0);
    
    useEffect(()=>{
        const uri = 'https://glacial-escarpment-72720.herokuapp.com/watchAll';
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setAllServices(data))
    },[])
    
    useEffect(()=>{

        switch (value) {
            case 0:{
                const service = allServices.filter(targeted=>targeted?.categories.toLowerCase().includes('best seller'));
                setServices(service)
                break;
              }
              case 1:{
                  const service = allServices.filter(targeted=>targeted?.categories.toLowerCase().includes('recent'));
                  setServices(service)
                  
                  break
              }
              case 2:{
                  const service = allServices.filter(targeted=>targeted?.categories.toLowerCase().includes('featured'));
                  setServices(service)
                  
            }
            break;
            default:
            }
        
    },[value, allServices])

    const handleChange = (event, newValue) => {
      setValue(newValue);
      
    };

    
    return (
        <Box className="portfolio-section"id="projects">
            <Container sx={{py:8}}>
            <Typography fontWeight={600} sx={{textAlign:'center', fontSize :{md:18, xs:16 },
                    color:'whiteSmoke'}} variant="h2"  gutterBottom component="div">
                    Our Timeless
                    </Typography> 
                    <Typography fontWeight={900} sx={{textAlign:'center', mb:6, fontSize :{md:46, xs:26 },
                    color:'#ffc400'}} variant="h2"  gutterBottom component="div">
                    Timepieces
                    </Typography> 
                    <Typography fontWeight={600} sx={{textAlign:'center',mb:12, fontSize :{md:18, xs:16 },
                    color:'whiteSmoke'}} variant="h2"  gutterBottom component="div">
                    Unparalleled Portfolio
                    Of Timepieces
                    </Typography>  
                
                <br />
                <Box>
                    <Box sx={{ width: '100%' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab selected sx={{color:'whiteSmoke', '.Mui-selected':{color:'green'}}} label="Best Seller" />
                        <Tab sx={{color:'whiteSmoke'}} label="Recent" />
                        <Tab sx={{color:'whiteSmoke'}} label="Featured" />
                    </Tabs>
                    </Box>
                </Box>

                {/* link section (dynamic route) */}
                <Box className='link-container'>
                </Box>
                <br /> <br />
                {allServices.length === 0 ? <LinearProgress color="secondary" /> :
                    <Box>
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center"
                        rowSpacing={3}
                        spacing={2}>
                        {/* spacing={{md:2, lg:4}} */}
                        {
                            services.map((service) => <Grid key={service?._id} item xs={12} sm={6} md={3}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Box className="box-items">
                                        <>
                                            <Box className="content">
                                                <Box className="content-overlay"></Box>
                                                <img className="content-image" src={service.img} alt="" />
                                                <Box className="content-details fadeIn-bottom">
                                                    <Typography style={{ color: 'white' }} variant='p'>{service.description}</Typography>
                                                    <br/>
                                                    <Link to={`/purchase/${service?._id}`} style={{textDecoration:'none'}}>
                                                    <Button variant='contained' size="small" sx={{ backgroundColor: 'white', color: '#ffc400', display: 'flex', margin: 'auto', borderRadius: '1rem', pt:.8 }}>Buy Now</Button>
                                                    </Link>
                                                </Box>
                                                <Box className="text-div">
                                                </Box>
                                                <Box className="text-content">
                                                    <Typography variant='h6'>{service.name}</Typography>
                                                    <Typography style={{color:'black'}} fontSize={16} fontWeight={700} variant='primary'>Price ${service.price}</Typography>
                                                </Box>
                                            </Box>
                                        </>
                                    </Box>
                                </Box>
                            </Grid>)
                        }
                    </Grid>
                </Box>}
                <br /> <br />
                <Link style={{textDecoration:'none'}} to="/productsAll"><Button variant='contained' sx={{ backgroundColor: '#ffc400', color: 'white', padding: '10px 20px', display: 'flex', margin: 'auto', borderRadius: '0' }}>Load More</Button></Link>
                <br /> <br />
            </Container>

        </Box>
    );
};

export default TimePices;
