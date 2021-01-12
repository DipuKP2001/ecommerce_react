import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    toolbar: theme.mixins.toolbar,
    title:{
        marginTop:'5%'
    },
    link:{
        textDecoration:'none'
    },
    cardDetails:{
        display:'flex',
        marginTop:'10%',
        width:'100%',
        justifyContent:'space-between'
    },
    emptyButton:{
        minWidth:'150px',
        [theme.breakpoints.down('xs')]:{
            marginBottom:'5px'
        },
        [theme.breakpoints.up('xs')]:{
            marginRight:'20px'
        }
    },
    checkoutButton:{
        minWidth:'150px'
    }
}))