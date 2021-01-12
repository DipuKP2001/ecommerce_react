import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";

const CartItem = ({item}) => {
    return (
        <Card>
            <CardMedia image={item.media.source}></CardMedia>
            <CardContent>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions>
                <div>
                    <Button type="button" size="small">-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small">+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary">Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem