import { gql } from "@apollo/client";

const CREATE_HIFI = gql`
mutation Mutation($input: CreateMaterialInput!) {
  createMaterial(input: $input) {
    _id
    createdAt
    updatedAt
    title
    description
    image
    referral_url
    price
    seller
    author
    featured
    slug
  }
}
`;
export default CREATE_HIFI;