import React from 'react'
// import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router';
const Sidebar = () => {
  const icons = [<DashboardIcon />, <ShoppingCartIcon />, <PermIdentityIcon />, <MenuOpenIcon />, <SettingsIcon />]
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState('Dashboard');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  

  return (
    <div>
      <Box sx={{ width: "33vh", height: "100vh", display: "flex", alignItems:"center",justifyContent:"center",flexDirection: "column", backgroundColor: "#white" }} role="presentation" onClick={toggleDrawer(false)}>

        {/* include AVATAR */}
        <Box sx={{ width: "100%", height: "26%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 100, height: 100 }}
          />
        </Box>
        <Divider />
        
        <Box sx={{fontSize:20, height: "68%",display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center"
        }}>
          {/* <BottomNavigation sx={{display:"flex",flexDirection:'column'}} 
          showLabels
          value={value}
          onChange={handleChange} > */}
            {['Dashboard', 'Orders', 'Customers', 'Menu', 'Settings'].map((text, index) => (
              <Box key={index} sx={{cursor:"pointer", width: "100%",height: "auto+",display:"flex",flexDirection:"row",gap:"1rem",alignItems:"center", justifyContent:""}} >
                  <Box>
                     {icons[index]}

                  </Box>
                  <Box sx={{color: 'text.secondary'}}>{text}</Box>  
              </Box>
            ))}
            {/* </BottomNavigation> */}
          </Box>
        
        <Box sx={{width: "100%",display: "flex", alignItems: "center",justifyContent:"center"}}>
          
         <LogoutIcon/> 
         <div>LogOut</div> 
        </Box>
      </Box>

      {/*       
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation> */}
    </div>
  )
}

export default Sidebar
