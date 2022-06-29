import { gql } from '@apollo/client';


const CREATE_ARTICLE = gql`
mutation Mutation($createArticleInput: CreateArticleInput!) {
    createArticle(createArticleInput: $createArticleInput) {
    _id
    image
    title
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
}
`;




export default CREATE_ARTICLE;
