import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, LinearProgress, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../contexts/useAuth';
import styles from './PurchasePage.module.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const PurchasePase = () => {
    const [allServices, setAllServices] = useState([]);
    const [services, setServices] = useState([]);
    const {user} = useAuth();
    const {purchaseId} = useParams();
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)

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
    

    // categories:'Best Seller',
    // //         name: 'WatchB',
    // //         img: 'https://i.ibb.co/fp1BrHN/1-1-300x300.jpg',
    // //         price: 80,
    // //         description:

    const { register, handleSubmit, reset } = useForm();
    // useEffect(()=>{
    //     setValue(name:services[0]?.name)
    // },[])

    const onSubmit = data => {
        const totalData = {...data, name:services[0]?.name, price:services[0]?.price,img:services[0]?.img, status:'Processing', bgColor:'red' };
        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(totalData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.acknowledged){
                    let timerInterval
                    MySwal.fire({
                    title: 'Product Purchase Successfully !',
                    icon: 'success',
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: () => {
                        MySwal.showLoading()
                        const b = MySwal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                        b.textContent = MySwal.getTimerLeft()
                        }, 3000)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                    }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === MySwal.DismissReason.timer) {
                        console.log('Product added to the Dashboard & I was closed by the timer')
                    }
                    })
            }
        })
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
                         {
                            allServices.length !== 0 ?
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
                        :
                        <LinearProgress color="secondary" />}
                    </Grid>

                    {/* user details and place order form */}
                    <Grid item xs={12} md={6}>
                                <form className={styles.reviewControlForm} onSubmit={handleSubmit(onSubmit)}>
                                    <input required placeholder='Your Name'{...register("displayName")} defaultValue={user?.displayName}/>
                                    <input title="Please Don't edit email" required placeholder='Your Email'{...register("email")} defaultValue={user?.email}/>
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