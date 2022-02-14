import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import styles from './Slider.module.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Grid, Typography } from "@mui/material";




const swiperSlider = [
    {id:1, img:"https://i.ibb.co/WkyfH58/Slider01.jpg", heading:"Winner of WatchPro Awards", description:"At WatchShop, you can guarantee you will find more watch brands than anywhere else. From the biggest designer brands, to the best of luxury and some hidden gems, along with outstanding service and next day delivery, WatchShop is the hottest place to buy your next watch."},
    {id:2, img:"https://i.ibb.co/F55Bv8q/Slider02.jpg", heading:"Winner of WatchPro Awards", description:"At WatchShop, you can guarantee you will find more watch brands than anywhere else. From the biggest designer brands, to the best of luxury and some hidden gems, along with outstanding service and next day delivery, WatchShop is the hottest place to buy your next watch."},
];


export default function SliderBanner() {
  return (
    <>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`${styles.mySwiper} ${styles.swiper}`}
      >
        {swiperSlider.map(one=><SwiperSlide 
        sx={{position: 'relative',}}
        key={one.id}
        className={styles.swiper_slide}
        >
        <img src={one.img} alt="" />
        <Box sx={{position:'absolute', left:5}}>
            <Grid container spacing={2}>
                <Grid item xs={1} md={0}>
                </Grid>
                <Grid item xs={10} md={6}>
                <Typography fontWeight={900} sx={{color:'white', fontSize:{md:56, xs:24}, textAlign:{xs:'center', md:'left' }}} variant="h3" gutterBottom component="div">
            {one.heading}
            </Typography>
            <Typography fontWeight={700} sx={{color:'white', fontSize:{md:18, xs:12}, textAlign:{xs:'center', md:'left' }}} variant="h5" gutterBottom component="div">
            {one.description}
            </Typography>
                </Grid>
                <Grid item xs={1} md={6}>
                </Grid>
                    
            </Grid>
        </Box>
        </SwiperSlide>)}
      </Swiper>
    </>    
  );
}  


