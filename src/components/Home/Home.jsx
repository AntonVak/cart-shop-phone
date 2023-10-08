import { Box, Button } from "@mui/material";
import {  useGetAllProductsQuery } from "../../store/productsApi";


const Home = () => {
    const {data, error, isLoading} = useGetAllProductsQuery()
    return ( 
        <>
            {isLoading ? (<p>Loading...</p>) : error ? (<p>An error</p>): (
                <>
                    <h2>New arriwals</h2>
                    <Box>
                        {data?.map((product) => <div key={product.id}><h3>{product.name}</h3>
                        <img src={product.image} alt={product.name} />
                        <div>
                            <span>{product.desc}</span>
                            <span>${product.price}</span>
                        </div>
                        <Button>Add to cart</Button>
                        </div> )}
                    </Box>
                </>
            )

            }
        </>
     );
}
 
export default Home;