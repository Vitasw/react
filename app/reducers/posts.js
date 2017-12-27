const postReducer = function(state, action) {
    if (state === undefined) {
        state = [];
        for (let i=0; i<localStorage.length; i++) {
            state.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
    }
    if (action.type === 'ADD_POST') {
        let id = +new Date();
        let post = action.post;
        post.id = id;

        let newState = state.slice();
        newState.push(post);

        localStorage.setItem(id, JSON.stringify(post));

        return newState;
    }
    return state;
};

export default postReducer;