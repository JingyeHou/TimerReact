import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { startTodo } from '../actions'
import { startCount } from '../actions'
import { deleteTodo } from '../actions'
import { editTodo } from '../actions'
import { visibleTodo } from '../actions'
import { activeTodo } from '../actions'
import { setIntervalId } from '../actions'



const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    startTodo: id => dispatch(startTodo(id)),
    startCount: started => dispatch(startCount(started)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: (id, text) => dispatch(editTodo(id, text)),
    visibleTodo: id => dispatch(visibleTodo(id)),
    activeTodo: id => dispatch(activeTodo(id)),
    setIntervalId: (id, intervalId) => dispatch(setIntervalId(id, intervalId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)