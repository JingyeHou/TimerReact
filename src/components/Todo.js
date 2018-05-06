import React from 'react'
import PropTypes from 'prop-types'
import styles from './Todo.scss'
import deleteicon from'../icons/icon_delete.png'
import editicon from '../icons/icon_edit.png'

const Todo = ({onClick, text, started, time, handleDelete, id, handleVisible, handleEdit, visibleEdit, active}) => {
    let totalMinutesPassed = Math.floor(time/60);
    let hours = Math.floor(totalMinutesPassed/60);
    let minutes = totalMinutesPassed % 60;
    let seconds = time % 60;
    let input

    let activeTimerClasses = [styles.todoframe];
    if (active) {
        activeTimerClasses.push(styles.timer_active);
    }
    let searchInputClasses = [styles.searchInput];
    if (visibleEdit) {
        searchInputClasses.push(styles.active);
    }
  

    return (
        <div>
            <div className={activeTimerClasses.join(' ')}> 
                <div className={styles.title}> 
                    {text}
                    <form onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }
                        handleEdit(id, input.value)
                        input.value = ''
                        }}
                    >
                     <input ref={node => input = node}  type="text"
                        className={searchInputClasses.join(' ')}
                        placeholder="Edit ..." />
                    </form>
                    <div className={styles.deletbutton} onClick={handleDelete}>
                        <img src= {deleteicon}  />
                    </div>
                    <div className={styles.editbutton}  onClick={() => {
                        handleVisible(id)
                        }}>
                        <img src= {editicon}  />
                    </div>
                </div>
                    <div className={styles.timer} onClick={onClick}>
                        <div className={styles.floatoneline}>
                                {hours}
                        </div>
                        <div className={[styles.floatoneline, styles.blink_me].join(' ')}>
                                :
                        </div>
                        <div className={styles.floatoneline}>
                                {minutes}
                        </div>
                        <div className={[styles.floatoneline, styles.blink_me].join(' ')}>
                                :
                        </div>
                        <div className={styles.floatoneline}>
                                {seconds}
                        </div>
                    </div>
                </div>
            </div>
    )
}

Todo.propTypes = {
  text: PropTypes.string.isRequired
}

export default Todo
