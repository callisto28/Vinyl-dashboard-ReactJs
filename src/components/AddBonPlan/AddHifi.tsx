import { useMutation } from "@apollo/client";
import { useState } from "react";
import CREATE_HIFI from "../../graphQl/MutationHifi";



const AddHifi = () => {

    const [formState, setFormState] = useState({
        title: "",
        description: "",
        image: "",
        referral_url: "",
        price: 0,
        seller: "",
        brand:"",
        author: "",
        featured: true,
        slug: "hifi"
    });

    const [createPlanInput] = useMutation(CREATE_HIFI, {
        variables: {
            input: {
                title: formState.title,
                description: formState.description,
                image: formState.image,
                referral_url: formState.referral_url,
                price: formState.price,
                seller: formState.seller,
                brand: formState.brand,
                author: formState.author,
                featured: formState.featured
            }

        }
    });

    return (
        <div>
            <h1 className="font-bold text-2xl text-purple-500" >Ajouter audio</h1>
            <form
                className="flex flex-col text-center justify-around items-center"
                onSubmit={(e => {
                    console.log(e, 'event');
                    e.preventDefault();
                    createPlanInput();
                })}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border border-purple-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        value={formState.title}
                        onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <input
                        className="shadow appearance-none border border-purple-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        type="textarea"
                        value={formState.description}
                        onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Image
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="url"
                        value={formState.image}
                        onChange={(e) => setFormState({ ...formState, image: e.target.value })}
                    />

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
                        Url vendeur
                    </label>
                    <input
                        className="shadow appearance-none border border-purple-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="url"
                        type="url"
                        value={formState.referral_url}
                        onChange={(e) => setFormState({ ...formState, referral_url: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="shadow appearance-none border hover:border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="priceEur"
                        type="number"
                        placeholder="0.00"
                        min="00"
                        max="6000000"
                        step=".01"
                        value={formState.price}
                        onChange={(e) => setFormState({ ...formState, price: parseFloat(e.target.value) })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seller">
                        Seller
                    </label>
                    <input
                        className="shadow appearance-none border border-purple-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="seller"
                        type="text"
                        value={formState.seller}
                        onChange={(e) => setFormState({ ...formState, seller: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
                        Marque
                    </label>
                    <input
                        className="shadow appearance-none border border-purple-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="brand"
                        type="text"
                        value={formState.brand}
                        onChange={(e) => setFormState({ ...formState, brand: e.target.value })}
                    />

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                        Author
                    </label>
                    <input
                        className="shadow appearance-none border border-purple-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="author"
                        type="text"
                        value={formState.author}
                        onChange={(e) => setFormState({ ...formState, author: e.target.value })}
                    />
                    <label htmlFor="accept"> Visible </label>
                    <input
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="visible"
                        type="checkbox"
                        checked={(formState.featured) ? true : false}
                        onChange={(e) => setFormState({ ...formState, featured: e.target.checked })}
                    />

                </div>
                <div className="mb-4">
                    <button
                        className="transition duration-500 ease transform hover:-translate-xy-1 hover:-translate-x-2 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-1 cursor-pointer text-center py-2"
                        type="submit"
                    >
                        Ajouter hifi/sono
                    </button>
                </div>
            </form>
        </div>
    );

}
export default AddHifi;