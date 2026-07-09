import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { fetchProducts } from "../../store/product";
import { useEffect } from "react";

// const PRODUCTS = [
//   {
//     id: "p01",
//     title: "Loaf of bread",
//     price: 8,
//     description: "Tasy loaf of bread, baked fresh everyday!",
//   },
//   {
//     id: "p02",
//     title: "Sparky phone",
//     price: 252,
//     description: "Top of the line smartphone with latest AI technologies",
//   },
// ];

const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    console.log("useEffect about to dispatch()");
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((prod) => {
          return <ProductItem key={prod.id} {...prod} />;
        })}
      </ul>
    </section>
  );
};

export default Products;
