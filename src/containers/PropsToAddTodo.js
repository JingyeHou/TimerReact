import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import { addButtonVisible } from '../actions'
import { addTodo } from '../actions'
import { resetTodo } from '../actions'


const mapStateToProps = state => ({
    buttonVisibility: state.buttonVisibility,
})

const mapDispatchToProps = dispatch => ({
    addButtonVisible: () => dispatch(addButtonVisible()),
    addTodo: (text) => dispatch(addTodo(text)),
    resetTodo: () => dispatch(resetTodo())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)