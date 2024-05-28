import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SingleProduct = ({ product, onDelete }) => {
    const handleDelete = async (id) => {
        await fetch(`http://localhost:3000/shoes/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.error(`${product.title} shoe has been deleted.`);
                onDelete(id)
            })
    }
    return (
        <div className="card max-w-96 bg-base-100 shadow-xl">
            <figure className="h-64 overflow-hidden">
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
                    <div className="flex items-center gap-1">
                        <Link className="btn text-sm text-white bg-indigo-500 hover:bg-indigo-700" to={`/products/${product.id}`}>Detail</Link>
                        <button className="btn text-sm text-white bg-green-500 hover:bg-green-700">Edit</button>
                        <button onClick={() => handleDelete(product.id)} className="btn text-sm text-white bg-red-500 hover:bg-red-700">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;