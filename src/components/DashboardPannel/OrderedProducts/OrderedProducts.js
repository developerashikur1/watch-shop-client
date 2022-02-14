import { Box, Button, Container, Grid, LinearProgress, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';
import './OrderedProducts.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const OrderedProducts = () => {
    const {user, admin} = useAuth();
    const [orderedProducts, setOrderedProducts] = useState([]);
    const MySwal = withReactContent(Swal)

    useEffect(()=>{
        if(!admin){
            fetch('https://glacial-escarpment-72720.herokuapp.com/orders')
            .then(res=>res.json())
            .then(data=>setOrderedProducts(data))
        }
        else{
            fetch(`https://glacial-escarpment-72720.herokuapp.com/orders?email=${user?.email}`)
            .then(res=>res.json())
            .then(data=>setOrderedProducts(data));
        }
    },[admin, user?.email]);


    const handleCancelOrder = (id) =>{
        const swalWithBootstrapButtons = MySwal.mixin({
            customClass: {
              confirmButton: '#8CD4F5',
              cancelButton: '#ff3333'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://glacial-escarpment-72720.herokuapp.com/orders/${id}`,{
                    method:'DELETE',
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount > 0){
                        const saved = orderedProducts.filter(one=>one?._id!==id);
                        setOrderedProducts(saved)
                    }
                })

              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === MySwal.DismissReason.cancel
             
            ) {
                swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
                
              )
            }
          })



    }
    return (
        <>
        <Box className="portfolio-section"id="projects">
            <Container sx={{py:8}}>
            <Typography fontWeight={600} sx={{textAlign:'center', fontSize :{md:18, xs:16 },
                    color:'whiteSmoke'}} variant="h2"  gutterBottom component="div">
                    All Timeless
                    </Typography> 
                    <Typography fontWeight={900} sx={{textAlign:'center', mb:6, fontSize :{md:46, xs:26 },
                    color:'#ffc400'}} variant="h2"  gutterBottom component="div">
                    All Watches
                    </Typography> 
                    <Typography fontWeight={600} sx={{textAlign:'center',mb:12, fontSize :{md:18, xs:16 },
                    color:'whiteSmoke'}} variant="h2"  gutterBottom component="div">
                    Unparalleled Portfolio
                    Of Timepieces
                    </Typography>  
                <br />

        <Box className='link-container'>
                </Box>
                <br /> <br />
            { orderedProducts.length === 0 ?
                <LinearProgress color="secondary" />
                :
                <Box>
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center"
                        rowSpacing={3}
                        spacing={2}>
                        {/* spacing={{md:2, lg:4}} */}
                        {
                            orderedProducts.map((one) => <Grid key={one?._id} item xs={12} sm={6} md={4}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Box className="box-items">
                                        <>
                                                <Box className="content">
                                                <Box className="content-overlay"></Box>
                                                <img className="content-image" src={one?.img} alt="" />
                                                <Box className="content-details fadeIn-bottom">
                                                <br/>
                                                    
                                                    {!admin && <Button variant='contained' size="small" sx={{ backgroundColor: 'white', color: '#ffc400', display: 'flex', margin: 'auto', borderRadius: '.2rem',width:'50%',  pt:.8 }}>Update</Button>}
                                                    <Button onClick={()=>handleCancelOrder(one?._id)} variant='contained' size="small" sx={{ backgroundColor: 'white', color: '#ffc400', display: 'flex', margin: 'auto', borderRadius: '.2rem',width:'50%',  pt:.8 }}>Cancel</Button>
                                                   

                                                </Box>
                                                <Box className="text-div">
                                                </Box>
                                                <Box className="text-content">
                                                    <Typography variant='h6'>{one?.name}</Typography>
                                                    <Typography style={{color:'black'}} fontSize={16} fontWeight={700} variant='primary'>Price ${one?.price}</Typography>
                                                </Box>
                                            </Box>
                                        </>
                                    </Box>
                                </Box>
                            </Grid>)
                        }
                    </Grid>
                </Box>}
                </Container>
                </Box>
        </>
    );
};

export default OrderedProducts;