import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


const TodoList = ({todos, startTodo, startCount, deleteTodo, editTodo, visibleTodo, activeTodo, setIntervalId}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => 
            {
                startTodo(todo.id) 
                clearInterval(todo.intervalId);
                console.log(todo.intervalId);
                setIntervalId(todo.id, setInterval( function() {
                    startCount(todo.started)
                }, 1000)
                );
                activeTodo(todo.id)
            }
        }

        handleEdit = {editTodo}
        handleVisible= {visibleTodo}
        handleDelete = {() => 
        deleteTodo(todo.id)
        }
        />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired 
}

export default TodoList
