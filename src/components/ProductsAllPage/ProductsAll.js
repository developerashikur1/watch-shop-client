import { Box, Button, Container, Grid, Tab, Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsAllPage.css';


const services = [
    {   
        id:1,
        categories:'Featured',
        name: 'Watch',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:2,
        categories:'Featured',
        name: 'Watch',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:3,
        categories:'Featured',
        name: 'Watch',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:4,
        categories:'Featured',
        name: 'Watch',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:5,
        categories:'Featured',
        name: 'Watch',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:6,
        categories:'Featured',
        name: 'Watch',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:7,
        categories:'Featured',
        name: 'Watch',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:8,
        categories:'Featured',
        name: 'Watch',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    
    {   
        id:9,
        categories:'Recent',
        name: 'WatchR',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:10,
        categories:'Recent',
        name: 'WatchR',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:11,
        categories:'Recent',
        name: 'WatchR',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:12,
        categories:'Recent',
        name: 'WatchR',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:13,
        categories:'Recent',
        name: 'WatchR',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:14,
        categories:'Recent',
        name: 'WatchR',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:15,
        categories:'Recent',
        name: 'WatchR',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:16,
        categories:'Recent',
        name: 'WatchR',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },

    {   
        id:17,
        categories:'Best Seller',
        name: 'WatchB',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:18,
        categories:'Best Seller',
        name: 'WatchB',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:19,
        categories:'Best Seller',
        name: 'WatchB',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:20,
        categories:'Best Seller',
        name: 'WatchB',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:21,
        categories:'Best Seller',
        name: 'WatchB',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:22,
        categories:'Best Seller',
        name: 'WatchB',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:23,
        categories:'Best Seller',
        name: 'WatchB',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
    {   
        id:24,
        categories:'Best Seller',
        name: 'WatchB',
        img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
        price: 80,
        description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
    },
];

const ProductsAll = () => {
    
    return (
        <Box sx={{bgcolor:'#262626'}} className="portfolio-section"id="projects">
            <Container sx={{py:8}}>
            <Typography fontWeight={600} sx={{textAlign:'center', fontSize :{md:18, xs:16 },
                    color:'whitesmoke'}} variant="h2"  gutterBottom component="div">
                    All Timeless
                    </Typography> 
                    <Typography fontWeight={900} sx={{textAlign:'center', mb:6, fontSize :{md:46, xs:26 },
                    color:'#ffc400'}} variant="h2"  gutterBottom component="div">
                    All Watches
                    </Typography> 
                    <Typography fontWeight={600} sx={{textAlign:'center',mb:12, fontSize :{md:18, xs:16 },
                    color:'whitesmoke'}} variant="h2"  gutterBottom component="div">
                    Unparalleled Portfolio
                    Of Timepieces
                    </Typography>  
                <br />

                {/* link section (dynamic route) */}
                <Box className='link-container'>
                </Box>
                <br /> <br />
                <Box>
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center"
                        rowSpacing={3}
                        spacing={2}>
                        {/* spacing={{md:2, lg:4}} */}
                        {
                            services.map((service, index) => <Grid key={index} item xs={12} sm={6} md={4}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Box className="box-items">
                                        <>
                                            <Box className="content">
                                                <Box className="content-overlay"></Box>
                                                <img className="content-image" src={service.img} alt="" />
                                                <Box className="content-details fadeIn-bottom">
                                                    <Typography style={{ color: 'white' }} variant='p'>{service.description}</Typography>
                                                    <br/>
                                                    <Link to={`/purchase/${service?.id}`} style={{textDecoration:'none'}}>
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
                </Box>
            </Container>

        </Box>
    );
};

export default ProductsAll;
