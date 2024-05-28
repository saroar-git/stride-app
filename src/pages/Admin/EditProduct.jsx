import toast from "react-hot-toast";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const EditProduct = () => {
    const shoe = useLoaderData();

    const [title, setTitle] = useState(shoe.title)
    const [brand, setBrand] = useState(shoe.brand)
    const [price, setPrice] = useState(shoe.price)
    const [desc, setDesc] = useState(shoe.description)
    const [image, setImage] = useState(shoe.image_url)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = parseFloat(form.price.value);
        const description = form.description.value;
        const image_url = form.image_url.value;

        const data = { id: shoe.id, title, brand, price, description, image_url };
        console.log(data);

        await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(() => {
                toast.success(`${shoe.title} shoe has been updated.`)
            });
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-6 mb-8">
                <h2 className="text-center text-4xl font-bold uppercase">Update <span className="text-secondary">{shoe.title}</span></h2>
                <img src={shoe.image_url} alt="" className="max-w-80 rounded shadow-xl" />
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center justify-center gap-4">
                        <input className="bg-gray-100 p-4 w-full border border-black rounded-lg mb-2" type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                        <input className="bg-gray-100 p-4 w-full border border-black rounded-lg mb-2" type="text" name="brand" value={brand} onChange={e => setBrand(e.target.value)} />
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <input className="bg-gray-100 p-4 w-full border border-black rounded-lg mb-2" type="text" name="price" value={price} onChange={e => setPrice(e.target.value)} />
                        <input className="bg-gray-100 p-4 w-full border border-black rounded-lg mb-4" type="text" name="image_url" value={image} onChange={e => setImage(e.target.value)} />
                    </div>
                    <div>
                        <textarea className="bg-gray-100 p-4 w-full border border-black rounded-lg mb-2" type="text" name="description" value={desc} onChange={e => setDesc(e.target.value)} />
                    </div>
                    <div className="text-center">
                        <input className="btn w-6/12 bg-secondary text-white font-semibold hover:bg-[#8c1771]" type="submit" value='Update Product' />
                    </div>
                </form>
            </div>
        </div>
    );
};
export default EditProduct;