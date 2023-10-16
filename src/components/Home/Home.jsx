import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cart/cartSlice";
import { useGetAllProductsQuery } from "../../store/productsApi";
import { styles } from "./HomeStyle";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatchFunc = useDispatch();

  const handleAddToCart = (product) => {
    dispatchFunc(addItem(product));
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error</p>
      ) : (
        <>
          <Typography variant="h5" component="h1" align="center" sx={{fontWeight:'600'}}>
            New arriwals
          </Typography>

          <Box component="section"  sx={styles.wrap}>
            {data?.map((product) => (
              <Card sx={styles.card} key={product.id}>
                <Typography variant="h5" component="h2" sx={styles.title}>
                  {product.name}
                </Typography>
                <CardMedia
                  component="img"
                  sx={styles.img}
                  src={product.image}
                  alt={product.name}
                />
                <CardContent sx={styles.cardContent}>
                  <span>{product.desc}</span>
                  <Typography component="div" sx={styles.price}>
                    ${product.price}
                  </Typography>
                </CardContent>
                <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
              </Card>
            ))}
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
