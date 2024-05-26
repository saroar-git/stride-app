import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/shoes')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h2 className="text-center text-4xl font-bold uppercase">All Products</h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                {products?.map(product =>
                    <ProductCard key={product.id} product={product} />
                )}
            </div>
        </div>
    );
};

export default AllProducts;