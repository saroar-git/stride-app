import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="card max-w-96 bg-base-100 shadow-xl">
            <figure className="h-full overflow-hidden">
                <img
                    src={product.image_url}
                    alt="Shoes"
                    className="w-full h-full object-fill"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.title}
                    <div className="badge badge-outline text-secondary">{product.brand}</div>
                </h2>
                <div className="badge badge-outline my-2 font-bold">${product.price}</div>
                <p className="text.sm text-justify">{product.description.length > 100 ? product.description.slice(0, 100) : product.description}..</p>
                <div className="card-actions justify-end mt-4">
                    <div className="btn btn-secondary">
                        <Link to={`/products/${product.id}`}>See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;