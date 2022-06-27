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
                    <div>
                        <label>Contenu A</label>
                        <input type="text" name="contentA" value={formState.contentA} onChange={(e) => setFormState({ ...formState, contentA: e.target.value })} />
                    </div>
                    <div>
                        <label>Contenu B</label>
                        <input type="text" name="contentB" value={formState.contentB} onChange={(e) => setFormState({ ...formState, contentB: e.target.value })} />
                    </div>
                    <div>
                        <label>Contenu C</label>
                        <input type="text" name="contentC" value={formState.contentC} onChange={(e) => setFormState({ ...formState, contentC: e.target.value })} />
                    </div>
                    <div>
                        <label>Contenu D</label>
                        <input type="text" name="contentD" value={formState.contentD} onChange={(e) => setFormState({ ...formState, contentD: e.target.value })} />
                    </div>
                    <div>
                        <label>Contenu E</label>
                        <input type="text" name="contentE" value={formState.contentE} onChange={(e) => setFormState({ ...formState, contentE: e.target.value })} />
                    </div>
                    <div>
                        <label>Contenu F</label>
                        <input type="textaera" name="contentF" value={formState.contentF} onChange={(e) => setFormState({ ...formState, contentF: e.target.value })} />
                    </div>
                    <div>
                        <label>Url</label>
                        <input type="text" name="url" value={formState.url} onChange={(e) => setFormState({ ...formState, url: e.target.value })} />
                    </div>
                    <div>
                        <label>Auteur</label>
                        <input type="text" name="author" value={formState.author} onChange={(e) => setFormState({ ...formState, author: e.target.value })} />
                    </div>
                    <button type="submit">Ajouter</button>

                </form>
            </div>
        </>
    );


}


export default AddArticle;