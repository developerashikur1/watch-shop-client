import { Container, Grid } from '@mui/material';
import React from 'react';
import styles from './Clients.module.css';

const clientsAll = [
    {id:0, img:'https://i.ibb.co/cXfhghk/001.png'},
    {id:1,img:'https://i.ibb.co/Tc7tP2x/002.png'},
    {id:2,img:'https://i.ibb.co/LS0S1r1/003.png'},
    {id:3,img:'https://i.ibb.co/WPW9vjf/004.png'},
    {id:4,img:'https://i.ibb.co/VC87gDf/005.png'},
    {id:5,img:'https://i.ibb.co/BnY8nsH/006.png'},
    {id:6,img:'https://i.ibb.co/pPTCG5j/007.png'},
    {id:7,img:'https://i.ibb.co/1KNGvHS/008.png'},
    {id:8,img:'https://i.ibb.co/27gCWRk/009.png'},
    {id:9,img:'https://i.ibb.co/3d8TwdD/010.png'},
    {id:10,img:'https://i.ibb.co/Tc7tP2x/002.png'},
    {id:11,img:'https://i.ibb.co/pPTCG5j/007.png'},
];

const Clients = () => {
    return (
        <>
         <Container sx={{py:8}}>
             <Grid container spacing={2}>
                 {clientsAll.map(one=><Grid className={styles.client} key={one?.id} item xs={6} md={2}>
                    <img src={one?.img} alt="" />
                 </Grid>)}
             </Grid>
         </Container>   
        </>
    );
};

export default Clients;