import type { Comment } from './types';

// simple versioning integer to force "last in" policy.
let VERSION = 0;
let NAME = 'Grant';
let TEXT = '';

export const resolvers = {
    Query: {
        loadComment: async (): Promise<Comment> => {
            // little bit of a buffer.
            await new Promise(resolve => setTimeout(resolve, 3000));

            return {
                name: NAME,
                text: TEXT,
                version: VERSION
            };
        }
    },
    Mutation: {
        saveComment: async (
            _,
            { input }: { input: Comment }
        ): Promise<Comment> => {
            if (input.version !== VERSION) {
                throw Error('Out of sync');
            }

            // little bit of a buffer.
            await new Promise(resolve => setTimeout(resolve, 3000));

            VERSION = VERSION + 1;
            NAME = input.name;
            TEXT = input.text;

            return {
                name: input.name,
                text: input.text,
                version: VERSION
            };
        }
    }
};
