import { gql } from '@apollo/client';


const CREATE_DESK = gql`
mutation Mutation($input: CreateDeskInput!) {
  createDesk(input: $input) {
    _id
    createdAt
    title
    description
    image
    referral_url
    price
    seller
    author
    featured
    updatedAt
    slug
  }
}
`;

export default CREATE_DESK;