import { gql, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation Save($input: CommentInput!) {
        comment: saveComment(input: $input) {
            name
            text
            version
        }
    }
`;

export default function useSaveComment() {
    return useMutation(MUTATION);
}
