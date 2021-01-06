import { Grid } from "@material-ui/core";

import Product from './Product/Product';

import useStyles from './styles'

const products = [
    {id:1,name:"keyboard",description:"nothing",price:"$5",image:'https://images-na.ssl-images-amazon.com/images/I/81wRXdAOmkL._SL1500_.jpg'},
    {id:2,name:"macbook",description:"nothing much",price:"$10",image:'https://9to5mac.com/wp-content/uploads/sites/6/2019/12/Buying-the-16-inch-MacBook-Pro-%E2%80%93-main-image.jpg?quality=82&strip=all'}
]


const Products = () => {
    const classes = useStyles()
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
            <Grid container justify="center" spacing={4}>
                {products.map((product)=> (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products