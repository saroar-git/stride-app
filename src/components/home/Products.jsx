import ProductCard from "../ProductCard";

const Products = ({ data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-3 mb-5">
            {data?.slice(0,3).map(product => {
                return (
                    <ProductCard key={product.id} product={product} />
                )
            })}
        </div>
    );
};

export default Products;