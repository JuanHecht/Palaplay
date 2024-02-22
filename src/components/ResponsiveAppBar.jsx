/* import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = ['Games','My Games', 'My friends'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#9CAF88', borderRadius: '20px', border: '5px solid #819171'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'white', display: { xs: 'none', md: 'block' } }}
          >
            <Link to="/">
              <img src={"logo.png"} alt="Logo" height="40" />
              PALAPADEL
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Link to={page} key={index}>
                <Button color="inherit">{page}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar; */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
const pages = ['Home', 'Games', 'My Games', 'My friends'];
function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem>
          <Link to="/" style={{ textDecoration: 'none', color: '#DFE6DA' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: 'center', marginBottom: '20px' }}
            >
              <img src={"logo.png"} alt="Logo" height="40" />
              PALAPADEL
            </Typography>
          </Link>
        </ListItem>
        {pages.map((page, index) => (
          <ListItem button key={index}>
            <Link to={page} style={{ textDecoration: 'none', color: '#DFE6DA' }}>
              <Button color="inherit">{page}</Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <AppBar position="static" sx={{ backgroundColor: '#9CAF88', borderRadius: '20px', border: '5px solid #819171'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }} // Adjusted the display based on screen width
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'white', display: { xs: 'none', sm: 'block' } }} // Adjusted the display based on screen width
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <img src={"logo.png"} alt="Logo" height="40" />
              PALAPADEL
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            {pages.map((page, index) => (
              <Link to={page} key={index} style={{ textDecoration: 'none', color: 'white' }}>
                <Button color="inherit">{page}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#819171',
            color: 'white',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
export default ResponsiveAppBar;