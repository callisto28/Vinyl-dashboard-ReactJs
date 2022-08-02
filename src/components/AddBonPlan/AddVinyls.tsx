import { useMutation } from "@apollo/client";
import { useState } from "react";
import CREATE_VINYL from "../../graphQl/MutationVinyl";



const AddVinyl = () => {

    const [formState, setFormState] = useState({
        title: "",
        artiste: "",
        subtitle: "",
        description: "",
        image: "",
        imageB: "",
        referral_url: "",
        spotify_url: "",
        priceEur: 0,
        priceUSD: 0,
        label: "",
        genre: "",
        promo:"",
        release: "",
        seller: "",
        author: "",
        featured: true,
        slug: "vinyl"
    });

    const [createPlanInput] = useMutation(CREATE_VINYL, {
        variables: {
            input: {
                title: formState.title,
                artiste: formState.artiste,
                subtitle: formState.subtitle,
                description: formState.description,
                image: formState.image,
                imageB: formState.imageB,
                referral_url: formState.referral_url,
                spotify_url: formState.spotify_url,
                priceEur: formState.priceEur,
                priceUSD: formState.priceUSD,
                label: formState.label,
                release: formState.release,
                genre: formState.genre,
                promo: formState.promo,
                seller: formState.seller,
                author: formState.author,
                featured: formState.featured

            }

        }
    });

    return (
        <div>
            <h1 className="font-bold text-2xl text-purple-500">Ajouter un vinyl</h1>
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
                        className="focus:border-2 focus:bg-slate-100 shadow appearance-none border border-purple-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="textaera"
                        value={formState.title}
                        onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">

                        Artist
                    </label>
                    <input
                        className="focus:border-2 focus:bg-slate-100 shadow appearance-none border border-purple-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="artist"
                        type="textaera"
                        value={formState.artiste}
                        onChange={(e) => setFormState({ ...formState, artiste: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subtitle">
                        Subtitle
                    </label>
                    <input
                        className="focus:border-2 focus:bg-slate-100 shadow appearance-none border border-purple-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="subtitle"
                        type="textaera"
                        value={formState.subtitle}
                        onChange={(e) => setFormState({ ...formState, subtitle: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="focus:border-2 focus:bg-slate-100 shadow appearance-none border border-purple-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"

                        value={formState.description}
                        onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Image
                    </label>
                    <input
                        className="focus:border-2 focus:bg-slate-100 shadow appearance-none border border-purple-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="url"
                        value={formState.image}
                        onChange={(e) => setFormState({ ...formState, image: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Image2
                    </label>
                    <input
                        className="focus:border-2 focus:bg-slate-100 shadow appearance-none border border-purple-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="url"
                        value={formState.imageB}
                        onChange={(e) => setFormState({ ...formState, imageB: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
                        Url spotify
                    </label>
                    <input
                        className="focus:border-2 focus:bg-slate-100 shadow appearance-none border border-purple-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="url"
                        type="url"
                        value={formState.spotify_url}
                        onChange={(e) => setFormState({ ...formState, spotify_url: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
                        Url Vendeur
                    </label>
                    <input
                        className="focus:border-2 focus:bg-slate-100 shadow appearance-none border border-purple-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="url"
                        type="url"
                        value={formState.referral_url}
                        onChange={(e) => setFormState({ ...formState, referral_url: e.target.value })}
                    />
                    <div className="flex flex-wrap">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            PriceEur €
                        </label>
                        <input
                            className="shadow appearance-none border hover:border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="priceEur"
                            type="number"
                            placeholder="0.00"
                            min="00"
                            max="6000000"
                            step=".01"
                            value={formState.priceEur}
                            onChange={(e) => setFormState({ ...formState, priceEur: parseFloat(e.target.value) })}
                        />
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            PriceUSD $
                        </label>
                        <input
                            className="shadow appearance-none border hover:border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="priceUSD"
                            type="number"
                            placeholder="0.00"
                            min="00"
                            max="6000000"
                            step=".01"

                            value={formState.priceUSD}
                            onChange={(e) => setFormState({ ...formState, priceUSD: parseFloat(e.target.value) })}
                        />
                    </div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="promo">
                       Promo
                    </label>
                    <input
                        className="focus:border-2 focus:bg-slate-100 shadow appearance-none border border-purple-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="promo"
                        type="text"
                        value={formState.promo}
                        onChange={(e) => setFormState({ ...formState, promo: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seller">
                        label
                    </label>
                    <input
                        className="focus:border-2 focus:bg-slate-100 shadow appearance-none border border-purple-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="label"
                        type="text"
                        value={formState.label}
                        onChange={(e) => setFormState({ ...formState, label: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seller">
                        Date de sortie
                    </label>
                    <input
                        className="focus:border-2 focus:bg-slate-100 shadow appearance-none border border-purple-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="label"
                        type="text"
                        value={formState.release}
                        onChange={(e) => setFormState({ ...formState, release: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seller">
                        Genre
                    </label>
                    <input
                        className="focus:border-2 focus:bg-slate-100 shadow appearance-none border border-purple-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="genre"
                        type="text"
                        value={formState.genre}
                        onChange={(e) => setFormState({ ...formState, genre: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seller">
                        Seller
                    </label>
                    <input
                        className="focus:border-2 focus:bg-slate-100 shadow appearance-none border border-purple-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="seller"
                        type="text"
                        value={formState.seller}
                        onChange={(e) => setFormState({ ...formState, seller: e.target.value })}
                    />

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                        Author
                    </label>
                    <input
                        className="focus:border-2 focus:bg-slate-100 shadow appearance-none border border-purple-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="author"
                        type="text"
                        value={formState.author}
                        onChange={(e) => setFormState({ ...formState, author: e.target.value })}
                    />
                    <label htmlFor="accept"> Visible </label>
                    <input
                        className="focus:border-2 focus:bg-slate-100 shadow border border-purple-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        Ajouter un vinyle
                    </button>
                </div>
            </form>
        </div>
    );

}
export default AddVinyl;