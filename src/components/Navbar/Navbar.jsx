import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from '../../assets/logo.png'
import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes = useStyles()
    const location = useLocation()
    return (
        <>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" color="inherit" className={classes.title}>
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
                        Commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" aria-label="show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar