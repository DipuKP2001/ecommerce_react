import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product }) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h4">{product.name}</Typography>
                    <Typography variant="h4">{product.price}</Typography>
                </div>
                <Typography variant="h5" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add To Cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
