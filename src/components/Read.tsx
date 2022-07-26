import React from 'react';
import {useQuery, gql } from '@apollo/client';


const GET_ARTICLES = gql`
query Article {
                Article  {
                    _id
                    title
                    image
                    description
                    subtitle
                    contentA
                    contentB
                    contentC
                    contentD
                    contentE
                    contentF
                    url
                    createdAt
                    author
                }
                }`;

export type Article = {
    _id: string;
    title: string;
    image: string;
    description: string;
    subtitle: string;
    contentA: string;
    contentB: string;
    contentC: string;
    contentD: string;
    contentE: string;
    contentF: string;
    url: string;
    createdAt: string;
    author: string;
}


export default function Read() {
    const { loading, error, data } = useQuery(GET_ARTICLES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        data.Article.map((article:Article ) => (
            <ul key={article._id} className="flex flex-col p-2 m-5 border-2">
                <li><h1>{article.title}</h1></li>
                <li><img src={article.image} alt={article.title} className="w-40 h-40" /></li>
                <li><p>{article.description}</p></li>
                <li><p>{article.subtitle}</p></li>
                <li><p>{article.url}</p></li>
                <li><p>{article.createdAt}</p></li>
                <li> <p>{article.author}</p></li></ul>
        ))
    );
}







