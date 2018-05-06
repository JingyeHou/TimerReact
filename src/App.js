
import VisibleTodoList from './containers/VisibleTodoList'
import PropsToAddTodo from './containers/PropsToAddTodo'
import styles from './App.scss';
import logo from './logo.svg';


import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Timer!!! <span role="img" aria-label="emoji">😎</span></h2>
        </div>
        <div className={styles.todolist}>
           <VisibleTodoList />
           <PropsToAddTodo />
        </div>
      </div>
    );
  }
}

export default App;


