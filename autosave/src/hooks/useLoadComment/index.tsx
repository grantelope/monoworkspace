import {
    OperationVariables,
    QueryHookOptions,
    gql,
    useQuery
} from '@apollo/client';

const QUERY = gql`
    query Load {
        comment: loadComment {
            name
            text
            version
        }
    }
`;

export default function useLoadComment(
    args?: QueryHookOptions<any, OperationVariables>
) {
    return useQuery(QUERY, args);
}
