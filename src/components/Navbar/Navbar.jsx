import React from 'react'
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from '../../assets/logo.png'
import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.title}>
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
                        Commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar