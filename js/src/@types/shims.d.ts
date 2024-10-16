import Post from 'flarum/common/models/Post';

declare module 'flarum/common/models/Post' {
    export default interface Post {
        is_sticky(): boolean | null;
    }
}

declare module 'flarum/common/models/Discussion' {
    export default interface Discussion {
        canStickyPosts(): boolean;
    }
}