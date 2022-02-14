import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ListItemText from '@mui/material/ListItemText';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import './AdminDashboard.css';
import { Button, Card, CardContent, Grid } from '@mui/material';
import useAuth from '../contexts/useAuth';


const drawerWidth = 240;

const AdminDashboard = (props) => {
    const { window } = props;
    const [subName, setSubName] = useState('')
    const [mobileOpen, setMobileOpen] = useState(false);
    const {admin} = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
const drawer = (
    <Box>
        <Box style={{display:'flex', justifyContent:'center', padding:'1rem 0'}}>
        <Link to='/' style={{textDecoration:'none'}}><Button sx={{color:'#ffaf1b', fontWeight:800,fontSize:22, bgcolor:'grey', textAlign:'center'}}>Home</Button></Link>
        </Box>
      {/* <Toolbar /> */}
      <Divider />
    
        <List className='dashboardLink'>
            <Link onClick={() => setSubName('')} to="">
                <ListItem button>
                    <ListItemText style={{color:'orange'}}>Dashboard</ListItemText>
                </ListItem>
            </Link>
        
            {admin===1 ?
            <Box>
            <Link onClick={() => setSubName('Banner Control')} to="bannercontroladmin">
                <ListItem button>
                    <ListItemText style={{color:'orange'}}>Banner Control</ListItemText>
                </ListItem>
            </Link>
            <Link onClick={() => setSubName('Review Control')} to="reviewcontroladmin">
                <ListItem button>
                    <ListItemText style={{color:'orange'}}>Review Control</ListItemText>
                </ListItem>
            </Link>
            </Box>
            
           :
            <Box>
            <Link onClick={() => setSubName('Payment')} to="payment">
                <ListItem button>
                    <ListItemText style={{color:'orange'}}>Order Payment</ListItemText>
                </ListItem>
            </Link>
            </Box>
            }

            <Link onClick={() => setSubName('Ordered Products')} to="orderedProducts">
                <ListItem button>
                    <ListItemText style={{color:'orange'}}>Control Ordered Products</ListItemText>
                </ListItem>
            </Link>


        </List>
               
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex',  bgcolor:'#262626', }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor:'#ffaf1b'
                    }}
                >
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {!admin ? 'Admin Dashboard' : 'User Dashboard'} {`${subName && '/'} ${subName}`}
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    >
                    {drawer}
                    </Drawer>
                    <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                    >
                    {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ bgcolor:'#262626',height: '100vw',  flexGrow: 1, pt:12, pb:4, pl:4, pr:4, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Outlet/>
                </Box>
            </Box>
        </>
    );
};

export default AdminDashboard;