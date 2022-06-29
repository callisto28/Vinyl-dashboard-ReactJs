import { gql } from "@apollo/client";

const CREATE_VINYL = gql`
mutation Mutation($input: CreateVinylInput!) {
  createVinyl(input: $input) {
    _id
    createdAt
    updatedAt
    title
    subtitle
    description
    image
    imageB
    referral_url
    priceEur
    priceUSD
    label
    genre
    seller
    author
    featured
    slug
  }
}
`;

export default CREATE_VINYL;