import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
// import styles from './Slider.module.css';
import styles from './DesignWatch.module.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";






const swiperSlider = [
    {id:1, img:"https://i.ibb.co/hVbZPP9/banner-3.jpg"},
    {id:2, img:"https://i.ibb.co/Z8F2B6k/banner-4.jpg"},
    {id:3, img:"https://i.ibb.co/dGx0FgK/banner-5.jpg"},
];


const DesignWatch = () => {
    return (
        <>
         <Container sx={{py: 8}}>
            <Grid container spacing={0}>
                <Grid sx={{bgcolor:'#ffc400',p:6, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:{md:'left', xs:'center'}}} item xs={12} md={6}>
                            <Typography fontWeight={300} sx={{color:'whiteSmoke', mb:-0.5, fontSize:{md:22, xs:18}, textAlign:{ md:'left' }}} variant="body1" gutterBottom component="div">
                            This is
                            </Typography>   
                            <Typography fontWeight={300} sx={{color:'whiteSmoke',mb:8, fontSize:{md:32, xs:24}, textAlign:{ md:'left', xs:'center' }}} variant="h5" gutterBottom component="div">
                            Danish Design Watches
                            </Typography>  
                            <Typography fontWeight={300} sx={{color:'whiteSmoke', fontSize:{md:18, xs:16}, textAlign:{ md:'left', xs:'center' }}} variant="subtitle1" gutterBottom component="div">
                            We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.                            
                            </Typography>  
                </Grid>

                {/* design slider */}
                <Grid item xs={12} md={6}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className={`${styles.mySwiper} ${styles.swiper}`}
                    >
                        {swiperSlider.map(one=><SwiperSlide 
                        sx={{position: 'relative',}}
                        key={one.id}
                        className={styles.swiper_slide}
                        >
                        <img src={one.img} alt="" />
                        </SwiperSlide>)}
                    </Swiper>
                </Grid>
            </Grid>
         </Container>   
        </>
    );
};

export default DesignWatch;