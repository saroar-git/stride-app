import toast from "react-hot-toast";

const AddProduct = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = parseFloat(form.price.value);
        const description = form.description.value;
        const image_url = form.image_url.value;

        const data = { id, title, brand, price, description, image_url };
        console.log(data);

        await fetch('http://localhost:3000/shoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(() => {
                toast.success(`${title} shoe has been added successfully.`)
                form.reset()
            });

    };

    return (
        <div>
            <h2 className="text-center text-4xl font-bold uppercase mb-12">Add a Product</h2>

            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input className="bg-gray-100 p-4 w-full border border-black rounded-lg mb-2" type="text" name="id" placeholder="ID" />
                    </div>
                    <div>
                        <input className="bg-gray-100 p-4 w-full border border-black rounded-lg mb-2" type="text" name="title" placeholder="Title" />
                    </div>
                    <div>
                        <input className="bg-gray-100 p-4 w-full border border-black rounded-lg mb-2" type="text" name="brand" placeholder="Brand" />
                    </div>
                    <div>
                        <input className="bg-gray-100 p-4 w-full border border-black rounded-lg mb-2" type="text" name="price" placeholder="Price" />
                    </div>
                    <div>
                        <input className="bg-gray-100 p-4 w-full border border-black rounded-lg mb-2" type="text" name="description" placeholder="Description" />
                    </div>
                    <div>
                        <input className="bg-gray-100 p-4 w-full border border-black rounded-lg mb-4" type="text" name="image_url" placeholder="Image URL" />
                    </div>
                    <div className="text-center">
                        <input className="btn w-6/12 bg-secondary text-white font-semibold hover:bg-[#8c1771]" type="submit" value='Add Product' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;