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
          <Typography variant="h3" component="h1" align="center">
            New arriwals
          </Typography>

          <Box sx={styles.wrap}>
            {data?.map((product) => (
              <Card sx={styles.card} key={product.id}>
                <Typography variant="h6" component="h2" align="center">
                  {product.name}
                </Typography>
                <CardMedia
                  component="img"
                  sx={styles.img}
                  src={product.image}
                  alt={product.name}
                />
                <CardContent>
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
