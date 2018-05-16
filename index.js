//The state Tree
function createStore(reducer){
    let state;
    let listeners = [];

    const getState = ()=>state;
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l !== listener);
        }
    };

    const dispatch = (action) => {
        state = reducer(state,action);
        listeners.forEach((listeners) => listeners());
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}

//The reducer function - Passed as an arugument while initializing the store
function todos(state = [], action){
    switch(action.type) {
        case 'ADD_TODO':
        return state.concat([action.todo]);
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id)
        case 'TOGGLE_TODO':
            return state.map((todo) => todo.id !== action.id ? todo : 
                Object.assign({},todo,  { complete: !todo.complete }))
        default:
            return state;
    }

}

const store = createStore(todos);
const unsubscribe = store.subscribe(()=>{
    console.log("State Changed!");
})

store.dispatch({
    type:'ADD_TODO',
    todo: {
        id: 0,
        name: 'Learn Stuff',
        complete: false
    }
})