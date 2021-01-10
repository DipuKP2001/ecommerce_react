import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product,onAddToCart }) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h4">{product.name}</Typography>
                    <Typography variant="h4">{product.price.formatted_with_symbol}</Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html:product.description }} variant="h5" color="textSecondary"/>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add To Cart" onClick={()=>onAddToCart(product.id,1)}>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
