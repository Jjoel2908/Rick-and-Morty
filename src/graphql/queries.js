import { gql } from '@apollo/client';

/** GraphQL query to fetch characters with pagination */
export const GET_CHARACTERS = gql`
query GetCharacters($page: Int) {
    characters(page: $page) {
    info { count pages next prev }
    results { id name gender status image }
    }
}
`;