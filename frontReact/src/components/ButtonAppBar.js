import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import AirlinesIcon from '@mui/icons-material/Airlines';
import { useNavigate } from 'react-router-dom'
export default function ButtonAppBar({userInfo}) {
  const navigate = useNavigate()
  
  const logoutUser = () => {
    localStorage.removeItem('tokens');
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="relative" style={{ backgroundColor:'darkgrey'}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <ConnectingAirportsIcon  style={{ paddingRight: '2px' }}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            İHA
          </Typography>  
          {userInfo &&<Link  style={{ marginRight:'10px', border:'2'}} to="/admin">Dashboard</Link> }      
          {userInfo && <Typography color="inherit" variant="h7" component="div" sx={{ flexGrow: 0 }}>
            {userInfo.username}
          </Typography>}<AirlinesIcon/>
          {userInfo &&<Button onClick={logoutUser}  color="inherit">Logout</Button> }
          {!userInfo &&<Button color="inherit"><Link style={{ textDecoration: 'none' }} to="/login">Login</Link></Button> }
          {!userInfo && <Button color="inherit"><Link style={{ textDecoration: 'none' }} to="/signin">Signin</Link></Button>}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}