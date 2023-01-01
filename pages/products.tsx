import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { getProducts } from "../slices/catalogue.slice";
import ProductCard from "./components/ProductCard";
import styles from "../styles/Products.module.css";
import SearchBar from "./components/SearchBar";
import FilterCard from "./components/FilterCard";
export default function products() {
  const { loading, products } = useAppSelector((state) => state.catalogue);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  if (loading) return <p>Loading....</p>;
  return (
    <div style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
      <div className="flex align-center justify-center">
        <SearchBar />
      </div>
      <div className="flex justify-bw" style={{ marginTop: "3rem" }}>
        <FilterCard />
        <div className="flex wrap" style={{ marginLeft: "8rem" }}>
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
