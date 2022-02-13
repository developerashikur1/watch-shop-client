import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import styles from './PurchasePage.module.css';

// const allServices = [
//     {   
//         id:1,
//         categories:'Featured',
//         name: 'Watch',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:2,
//         categories:'Featured',
//         name: 'Watch',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:3,
//         categories:'Featured',
//         name: 'Watch',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:4,
//         categories:'Featured',
//         name: 'Watch',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:5,
//         categories:'Featured',
//         name: 'Watch',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:6,
//         categories:'Featured',
//         name: 'Watch',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:7,
//         categories:'Featured',
//         name: 'Watch',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:8,
//         categories:'Featured',
//         name: 'Watch',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
    
//     {   
//         id:9,
//         categories:'Recent',
//         name: 'WatchR',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:10,
//         categories:'Recent',
//         name: 'WatchR',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:11,
//         categories:'Recent',
//         name: 'WatchR',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:12,
//         categories:'Recent',
//         name: 'WatchR',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:13,
//         categories:'Recent',
//         name: 'WatchR',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:14,
//         categories:'Recent',
//         name: 'WatchR',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:15,
//         categories:'Recent',
//         name: 'WatchR',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:16,
//         categories:'Recent',
//         name: 'WatchR',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },

//     {   
//         id:17,
//         categories:'Best Seller',
//         name: 'WatchB',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:18,
//         categories:'Best Seller',
//         name: 'WatchB',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:19,
//         categories:'Best Seller',
//         name: 'WatchB',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:20,
//         categories:'Best Seller',
//         name: 'WatchB',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:21,
//         categories:'Best Seller',
//         name: 'WatchB',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:22,
//         categories:'Best Seller',
//         name: 'WatchB',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:23,
//         categories:'Best Seller',
//         name: 'WatchB',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
//     {   
//         id:24,
//         categories:'Best Seller',
//         name: 'WatchB',
//         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
//         price: 80,
//         description: 'We are very passionate about our work. You can say we love the watches that we offer to our customers. And, every time we sell one – we are actually giving a piece of our heart to them.'
//     },
// ];

const PurchasePase = () => {
    const [allServices, setAllServices] = useState([]);
    const [services, setServices] = useState([]);
    const {user} = useFirebase();
    const {purchaseId} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const uri = 'https://glacial-escarpment-72720.herokuapp.com/watchAll';
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setAllServices(data))
    },[])

    useEffect(()=>{
        if(purchaseId){
            const service = allServices.filter(one=>one?._id===purchaseId);
            setServices(service)
        }
        else{
            navigate('/')
        }
    },[purchaseId, navigate, allServices])
    

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        reset();
    };

    
    return (
        <>
         <Box sx={{ bgcolor:'#262626' }}>
             <Container sx={{py:8}}>
             <Typography fontWeight={900} sx={{textAlign:'center', mb:6, fontSize :{md:46, xs:26 },
                    color:'#ffc400'}} variant="h2"  gutterBottom component="div">
                    Purchase Product
                    </Typography> 
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                         <Card sx={{ maxWidth: 345, bgcolor:'#eeeeee10' }}>
                            <CardMedia
                                component="img"
                                // height="140"
                                sx={{height:'100%'}}
                                image={services[0]?.img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography sx={{color:'whiteSmoke'}} gutterBottom variant="h5" component="div">
                                {services[0]?.name}
                                </Typography>
                                <Typography sx={{color:'whiteSmoke'}} variant="body2" color="text.secondary">
                                {services[0]?.name} {services[0]?.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button sx={{color:'whiteSmoke', bgcolor:'#eeeeee10'}} size="small">Price ${services[0]?.price}</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    {/* user details and place order form */}
                    <Grid item xs={12} md={6}>
                                <form className={styles.reviewControlForm} onSubmit={handleSubmit(onSubmit)}>
                                    <input required placeholder='Your Name'{...register("name")} />
                                    <input required type='number' placeholder='Your Phone'{...register("phone")} />
                                    <input required placeholder='Your Address'{...register("address")}/>
                                    {/* <input placeholder='Your Email'{...register("email")} />
                                    <input placeholder='Your Email'{...register("email")} /> */}
                                    
                                    <button className={styles.addReviewButton} type="submit">Place Order</button>
                                </form>
                    </Grid>
                </Grid>
             </Container>
         </Box>   
        </>
    );
};

export default PurchasePase;