let nextTodoId = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const startTodo = id => ({
    type: 'START_TODO',
    id
})

export const startCount = started => ({
    type: 'INCREMENT_TIMER',
    started
})

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
})

export const editTodo = (id, text) => ({
    type: 'EDIT_TODO',
    id: id,
    text: text
})


export const visibleTodo = id => ({
    type: 'VISIBLE_EDIT',
    id
})

export const activeTodo = id => ({
    type: 'ACTIVE_TODO',
    id
})

export const addButtonVisible = () => ({
    type: 'BUTTON_VISIBLE',
})

export const resetTodo = () => ({
    type: 'RESET_TODO',
})

export const setIntervalId = (id, intervalId) => ({
    type: 'INTERVAL_ID',
    id,
    intervalId
})