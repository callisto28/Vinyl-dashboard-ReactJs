import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import CREATE_ARTICLE from '../graphQl/Mutation';


const AddArticle = () => {
    const [formState, setFormState] = useState({
        image: "",
        title: "",
        description: "",
        subtitle: "",
        contentA: "",
        contentB: "",
        contentC: "",
        contentD: "",
        contentE: "",
        contentF: "",
        url: "",
        author: "",
    });

    const [createArticleInput] = useMutation(CREATE_ARTICLE, {

        variables: {
            createArticleInput: {
                image: formState.image,
                title: formState.title,
                description: formState.description,
                subtitle: formState.subtitle,
                contentA: formState.contentA,
                contentB: formState.contentB,
                contentC: formState.contentC,
                contentD: formState.contentD,
                contentE: formState.contentE,
                contentF: formState.contentF,
                url: formState.url,
                author: formState.author,
            }
        }
    });

    return (
        <>
            <div>
                <h1>Ajout d'un article</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    createArticleInput();
                }
                }>
                    <div>
                        <label>Image</label>
                        <input type="text" name="image" value={formState.image} onChange={(e) => setFormState({ ...formState, image: e.target.value })} />
                    </div>
                    <div>
                        <label>Titre</label>
                        <input type="text" name="title" value={formState.title} onChange={(e) => setFormState({ ...formState, title: e.target.value })} />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" name="description" value={formState.description} onChange={(e) => setFormState({ ...formState, description: e.target.value })} />
                    </div>
                    <div>
                        <label>Sous-titre</label>
                        <input type="text" name="subtitle" value={formState.subtitle} onChange={(e) => setFormState({ ...formState, subtitle: e.target.value })} />
                    </div>
                </form>
            </div>
        </>
    );


}


export default AddArticle;