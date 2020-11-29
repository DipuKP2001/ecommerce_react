import { Grid } from "@material-ui/core";
import Product from './Product/Product';

const products = [
    {id:1,name:"keyboard",description:"nothing",price:"$5",image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JX7FKoWiyP32PT-3xjc9L8uPaQUwLY7zMQ&usqp=CAU'},
    {id:2,name:"macbook",description:"nothing much",price:"$10",image:'https://9to5mac.com/wp-content/uploads/sites/6/2019/12/Buying-the-16-inch-MacBook-Pro-%E2%80%93-main-image.jpg?quality=82&strip=all'}
]


const Products = () => {
    return (
        <main>
            <Grid>
                {products.map((product)=> (
                    <Product product={product} />
                ))}
            </Grid>
        </main>
    )
}

export default Products