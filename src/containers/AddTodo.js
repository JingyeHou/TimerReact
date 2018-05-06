import React from 'react'
import { connect } from 'react-redux'
import { addButtonVisible } from '../actions'
import styles from './AddTodo.scss'
import addicon from'../icons/icon_add.png'
import reseticon from '../icons/icon_reset.png'
import checkicon from'../icons/icon_ok.png'

const AddTodo = ({ addTodo, buttonVisibility, addButtonVisible, resetTodo }) => {
  let input
  let addbuttonClasses = [styles.addbutton]
  let resetbuttonClasses = [styles.resetbutton]
  let showformClasses = [styles.showform]
  if (buttonVisibility) {
    addbuttonClasses.push(styles.naddbutton)
    showformClasses.push(styles.ashowform)
  }

  return (
    <div className={styles.subscribe}>
        <div className={addbuttonClasses.join(' ')} onClick={() => addButtonVisible()}>
            <img src={addicon} />
        </div>
        <div className={resetbuttonClasses.join(' ')} onClick={() => resetTodo()} >
            <img src={reseticon} />
        </div> 
        <div className={showformClasses.join(' ')}>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                addTodo(input.value)
                input.value = ''
                }}
            >
            <input ref={node => input = node} />
            <button type="submit" className={styles.checkbutton} onClick={() => addButtonVisible()}>
                <img src={checkicon} />
            </button>
            </form> 
        </div> 
    </div>
  )
}

export default connect()(AddTodo)