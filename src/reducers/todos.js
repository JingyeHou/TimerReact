import * as R from 'ramda';
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                    started: false,
                    time: 0,
                    visibleEdit: false,
                    active:false,
                    intervalId: ' ',
                }
            ]
        case 'START_TODO':
            return state.map(todo => 
              (todo.id === action.id)
                ? {...todo, started: !todo.started} : todo
            )
        case 'INCREMENT_TIMER':
            return state.map(todo =>
                (todo.started) ? {...todo, time : todo.time + 1} : todo
            )
        case 'DELETE_TODO':
            return R.filter(todo =>
                todo.id !== action.id,
                state
            )
        case 'EDIT_TODO':
            return state.map(todo => 
                (todo.id === action.id) ? {...todo, text : action.text} : todo
            )
        case 'VISIBLE_EDIT':
            return state.map(todo =>
                (todo.id === action.id) ? {...todo, visibleEdit : !todo.visibleEdit} : todo
            )
        case 'ACTIVE_TODO':
            return state.map(todo =>
                (todo.id === action.id) ? {...todo, active : !todo.active} : todo
            )
        case 'RESET_TODO':
            return []
        case 'INTERVAL_ID':
            return state.map(todo =>
                (todo.id === action.id) ? {...todo, intervalId : action.intervalId} : todo
            )
        default:
            return state
    } 
}

export default todos
