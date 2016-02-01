const initialState = {
    isFetching: false,
    items: []
};

const GET_BLOG_POSTS_REQUEST = 'GET_BLOG_POSTS_REQUEST';
const GET_BLOG_POSTS_SUCCESS = 'GET_BLOG_POSTS_SUCCESS';
const GET_BLOG_POSTS_FAIL = 'GET_BLOG_POSTS_FAIL';

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_BLOG_POSTS_REQUEST:
            return Object.assign(state, {
                isFetching: true
            });
        case GET_BLOG_POSTS_SUCCESS:
            return Object.assign(state, {
                isFetching: false,
                items: action.response.items
            });
        case GET_BLOG_POSTS_FAIL:
            return Object.assign(state, {
                isFetching: false,
                items: initialState.items
            });
        default:
            return state;
    }
}


export function getBlogPosts() {
    return {
        type: GET_BLOG_POSTS_REQUEST
    };
}