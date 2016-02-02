import fetch from 'isomorphic-fetch';

const initialState = {
    isFetching: false,
    selected: {},
    items: []
};

const GET_BLOG_POSTS_REQUEST = 'GET_BLOG_POSTS_REQUEST';
const GET_BLOG_POSTS_SUCCESS = 'GET_BLOG_POSTS_SUCCESS';
const GET_BLOG_POSTS_FAIL = 'GET_BLOG_POSTS_FAIL';

const GET_BLOG_POST_REQUEST = 'GET_BLOG_POST_REQUEST';
const GET_BLOG_POST_SUCCESS = 'GET_BLOG_POST_SUCCESS';
const GET_BLOG_POST_FAIL = 'GET_BLOG_POST_FAIL';

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_BLOG_POST_REQUEST:
        case GET_BLOG_POSTS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case GET_BLOG_POSTS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.response.items
            });
        case GET_BLOG_POSTS_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                items: initialState.items
            });

        case GET_BLOG_POST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                selected: action.response
            });
        case GET_BLOG_POST_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                selected: initialState.selected
            });
        default:
            return state;
    }
}

function requestPosts() {
    return {
        type: GET_BLOG_POSTS_REQUEST
    };
}

function receivePosts(json) {
    return {
        type: GET_BLOG_POSTS_SUCCESS,
        response: json,
        receivedAt: Date.now()
    };
}

function fetchPosts() {
    return (dispatch) => {
        dispatch(requestPosts());
        return fetch(`/api/blog`)
            .then((req) => req.json())
            .then((json) => dispatch(receivePosts(json)));
    };
}

function shouldFetchPosts(state) {
    const posts = state.blog;
    return !posts.items.length && !posts.isFetching;
}

export function fetchPostsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState())) {
            return dispatch(fetchPosts())
        }
    };
}

// ------------------------------------------------------------
// Single Post functions
// ------------------------------------------------------------
function requestPost(id) {
    return {
        type: GET_BLOG_POST_REQUEST,
        id
    }
}

function receivePost(json) {
    return {
        type: GET_BLOG_POST_SUCCESS,
        response: json,
        receivedAt: Date.now()
    };
}

function fetchPost(id) {
    return (dispatch) => {
        dispatch(requestPost(id));
        return fetch(`/api/blog/id/${id}`)
            .then((req) => req.json())
            .then((json) => dispatch(receivePost(json.item)));
    };
}

function shouldFetchPost(id, state, dispatch) {
    const posts = state.blog;

    let index = posts.items.findIndex( (post) => {
        return post.id == id
    });

    let postFound = index > -1;

    // post found
    if (postFound) {
        dispatch(receivePost(posts.items[index]));
    }

    return !postFound;
}

export function fetchPostIfNeeded(id) {
    return (dispatch, getState) => {
        if (shouldFetchPost(id, getState(), dispatch)) {
            return dispatch(fetchPost(id))
        }
    };
}