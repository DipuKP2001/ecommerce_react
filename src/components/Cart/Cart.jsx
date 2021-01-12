import { Container, Typography,Grid } from '@material-ui/core'

import useStyles from './styles'

const Cart = ({cart}) => {
    
    const classes = useStyles()

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no Items in your cart,try adding some!</Typography>
    )
    const FilledCart = () => (
        <>
            <Grid>
                { cart.line_items.map((item)=> (
                    <Grid>
                        <div>{item.name}</div>
                    </Grid>
                )) }
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            </div>
        </>
    )

    if(!cart.line_items) return 'Loading...'

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">Your shopping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart  /> : <FilledCart />}
        </Container>
    )
}

export default Cart