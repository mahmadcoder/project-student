import React, { useState } from 'react';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, MenuList, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';


const NavBar = () => {
    const [navMenu, setNavMenu] = useState(null);   

    const openMenu = (event) => {
        setNavMenu(event.currentTarget);
    };

    const closeMenu = () => {
        setNavMenu(null);
    };

    return (
        <AppBar position="static" sx={{ background: "#8FBC8F", boxShadow: "none", borderRadius: 2 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Scholar Sync
                    </Typography>
                    <Box sx={{ textDecoration: "none", fontWeight: 600, display: { xs: "none", md: "flex" } }}>
                        <Button color="inherit" sx={{ fontSize: '18px' }} href="/">Home</Button>
                        <Button href='/contactus' color="inherit" sx={{ fontSize: '18px' }} >Contact Us</Button>
                        <Button  href="/aboutus" color="inherit" sx={{ fontSize: '18px' }}>About Us</Button>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            Scholar Sync
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton size="large" edge="start" color="inherit" onClick={openMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={navMenu}
                            open={Boolean(navMenu)}
                            onClose={closeMenu}
                            sx={{ display: { xs: "flex", md: "none" } }}
                        >
                            <MenuList>
                                <MenuItem onClick={closeMenu} component="a" href="/">Home</MenuItem>
                                <MenuItem onClick={closeMenu} component="a" href="/contactus">Contact Us</MenuItem>
                                <MenuItem onClick={closeMenu} component="a" href="/aboutus">About Us</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
