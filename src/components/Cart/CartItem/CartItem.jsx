import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";

import useStyles from './styles'

const CartItem = ({item}) => {
    const classes = useStyles()
    return (
        <Card>
            <CardMedia image={item.media.source} className={classes.media}></CardMedia>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="medium">-</Button>
                    <Typography variant="h6">{item.quantity}</Typography>
                    <Button type="button" size="medium">+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary">Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem