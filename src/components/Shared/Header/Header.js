import React, { useState } from 'react';
import styles from './Header.module.css'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Avatar, Button, Divider, Drawer, Fab, List, Menu, MenuItem, Tooltip, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { deepOrange, grey, indigo, yellow } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from '../../contexts/useAuth';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(0),
//   Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 50,
  },
}));


const Header = () => {
  const theme = useTheme();

  // const {user, logOut} = useFirebase();
  const {user, logOut} = useAuth();

  const useStyles = makeStyles({
    menuIconBreak:{
      [theme.breakpoints.up('sm')]: {
        display:"none !important"
      },
    },
    navsLinkDesktop: {
      [theme.breakpoints.down('md')]: {
        display:"none !important"
      },
    },
    drawerBackground:{
      // backgroundColor:'#0a192f4d !important'
      // background:'rgb(17, 34, 64)'
    },
    drawerFirstBackground:{
      // backgroundColor:'#0a192f4d !important'
     backdropFilter:'blur(5px)'
    }
  });
  const {menuIconBreak, navsLinkDesktop, drawerBackground, drawerFirstBackground} = useStyles();


  // const resumeDownloadLink = () =>{
  //   window.location.replace('https://drive.google.com/u/0/uc?id=1Ktl1sVeRSU6pg90K5yAPRlFfpAZ_lf8o&export=download')
  // }



  // Drawer
  const [state, setState] = React.useState({right: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    className={drawerBackground}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280, height:1  }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <IconButton
      style={{color:'navyblue',position:'absolute', right:'1.5rem', top:'1.5rem', backgroundColor:'lightblue'}}
      >
      <CloseIcon/>
      </IconButton>
      <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ flexGrow: 1 }}
          style={{marginLeft:'1.5rem', marginTop:'1.5rem'}}
      >
          <img style={{width:'4rem'}} src='https://i.ibb.co/HrRjh9w/gold1.png' alt='' />
      </Typography>
        <List className={styles.responsiveNavs}>
              <Link  className={`${styles.texts1}`} to="/home">Home</Link>  
              <Link  className={`${styles.texts1}`} to="/about">About</Link>  
              <Link  className={`${styles.texts1}`} to="/productsAll">All Watches</Link>  
              {/* <Link  className={`${styles.texts1}`} to="/blogs">Blogs</Link>   */}
              <Link  className={`${styles.texts1}`} to="/contacts">Contacts</Link>  
              <Link  className={`${styles.texts}`} to="/dashboard">Dashboard</Link>    
              {!user?.email && <Link style={{textDecoration:'none'}} to="/login"><Button sx={{bgcolor:'#F8B71D', color:'whitesmoke'}}>Login</Button></Link>}
        {/* <IconButton> */}
        
        {/* </IconButton> */}
        </List>
    </Box>
  );


  const handleLogOutUser = (e) =>{
    e.preventDefault();
    logOut();
  }
  // extra end
  // className={styles.appBar}
    return (
        <div>
            <Box sx={{ flexGrow: 1}}>
              <AppBar sx={{bgcolor:'#262626'}} position="static">
                <StyledToolbar>
                  <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    <img style={{width:'4rem'}} src='https://i.ibb.co/HrRjh9w/gold1.png' alt='' />
                  </Typography>

                  <Box className={navsLinkDesktop} style={{marginTop:'1.2rem'}}>
                      <Link  className={`${styles.texts}`} to="/home">Home</Link>  
                      <Link  className={`${styles.texts}`} to="/about">About</Link>  
                      <Link  className={`${styles.texts}`} to="/productsAll">All Watches</Link> 
                      {/* <Link  className={`${styles.texts}`} to="/blogs">Blogs</Link>   */}
                      <Link  className={`${styles.texts}`} to="/contacts">Contacts</Link>  
                      <Link  className={`${styles.texts}`} to="/dashboard">Dashboard</Link>  
                      {!user?.email && <Link style={{textDecoration:'none'}} to="/login"><Button sx={{bgcolor:'#F8B71D', color:'whitesmoke'}}>Login</Button></Link>}
                  </Box>

                  {/* Logout and Profile button */}

                  {user?.email &&
                    <Box className={navsLinkDesktop} style={{display:'flex', justifyContent:'center', marginTop:'13px', alignItems:'center'}}>
                    <Tooltip title={user?.displayName}>
                      <IconButton sx={{ p: 0 }}>
                        {user?.photoURL ?
                        <Avatar alt="Remy Sharp" src={user?.photoURL} />
                        :
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>{user?.displayName?.slice(0,1).toUpperCase()}</Avatar>
                        }
                      </IconButton>
                    </Tooltip>
                      <Typography fontWeight={900} sx={{ flexGrow: 1, ml:1, color: deepOrange[500]}} textAlign="center">{user?.displayName}</Typography>
                      <MenuItem onClick={handleLogOutUser}>
                              <Fab title="Logout" sx={{bgcolor:yellow[700], width:36,height:30, display:'flex', flexDirection:'column'}} aria-label="add">
                              <LogoutIcon sx={{color:grey[900], fontSize:22, fontWeight:900}}/>
                              </Fab>
                      </MenuItem> 
                  </Box>
                  }

                  <IconButton
                    size="large"
                    aria-label="display more actions"
                    edge="end"
                    color="primary"
                    className={menuIconBreak}
                    onClick={toggleDrawer('right', true)}
                  >
                  <MenuIcon sx={{color:indigo[600], fontSize:42, fontWeight:900}}/>
                  </IconButton>
                  
                </StyledToolbar>
              </AppBar>
            </Box>
            <div>
      
        <React.Fragment>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            className={drawerFirstBackground}
            
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      
        </div>
      </div>
    );
};

export default Header;