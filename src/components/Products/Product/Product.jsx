import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product }) => {
    const classes = useStyles()
    return (
        <Card>
            <CardMedia image={product.image} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5">{product.name}</Typography>
                    <Typography variant="h5">{product.price}</Typography>
                </div>
                <Typography variant="h2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
