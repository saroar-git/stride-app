import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const shoeDetail = () => {
    const shoe = useLoaderData();
    
    return (
        <div className="min-h-[calc(100vh-140px)] place-content-center">
            <div className="hero bg-base-100 shadow-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <figure className="h-full max-w-[450px] overflow-hidden">
                        <img
                            src={shoe.image_url}
                            alt="Shoes"
                            className="w-full h-full object-fill"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">
                            {shoe.title}
                            <div className="badge badge-outline text-secondary">{shoe.brand}</div>
                        </h2>
                        <div className="badge badge-outline my-2 font-bold">${shoe.price}</div>
                        <p className="text.sm text-justify">{shoe.description}</p>
                        <div className="card-actions justify-end mt-4">
                            <div className="btn btn-secondary hover:bg-[#8c1771]">
                                <Link to={`/buy/${shoe.id}`}>Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default shoeDetail;