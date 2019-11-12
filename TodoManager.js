import React, { memo } from 'react';
import './TodoManager.css';
import NavigationBar from "./NavigationBar";
import TodoItemList from "./TodoItemList";

class TodoManager extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taskList: [],
      currentInputValue: "",
      completeTaskStatus: "",
      updateTaskStatus: ""
    }

    this.setState = this.setState.bind(this);
  }
  createNewTask = () => {
    const { taskList } = this.state;
    console.log(taskList);
    console.log(typeof (taskList));
  }

  onInputSubmit = () => {
    const { taskList, currentInputValue } = this.state; // destructure
    if (currentInputValue !== "") {
      const newTask = {
        id: Date.now(),
        discription: currentInputValue,
        completeTaskStatus: false,
        updateTaskStatus: false,
      };
      this.setState({
        currentInputValue: '',
        taskList: [...taskList, newTask],
      }, this.createNewTask)
      console.log(this.state.currentInputValue);
    }
  }

  keyPressHandle = (event) => {
    if (event.which === 13) {
      this.setState({
        currentInputValue: event.currentTarget.value,
      })
      this.onInputSubmit();
    }
  }

  handleInputChange = (ev) => {
    console.log(ev.target.value);
    this.setState({
      currentInputValue: ev.target.value,
    })
  }

  // this is to update the state after deleting a id
  handleDeltedItem = (itemToBeDeleted) => {
    var updatedList = this.state.taskList.filter(function (taskList) {
      return taskList.id !== itemToBeDeleted;
    })
    this.setState({ taskList: updatedList })

  }

  handleCompletedItem = (itemToBeCompleted) => {
    var updatedList = this.state.taskList.map((task) => {
      if (task.id === itemToBeCompleted) {
        task.completeTaskStatus = !task.completeTaskStatus;
        return task
      }
      else return task
    })
    this.setState({ taskList: updatedList })
  }

  handleEditedItem = (itemToBeEdited) => {
    var updatedList = this.state.taskList.map((task) => {
      if (task.id === itemToBeEdited) {
        task.updateTaskStatus = !task.updateTaskStatus;
        return task
      }
      else return task
    })
    this.setState({ taskList: updatedList })

  }

  markAllCompelte = () => {
    var updatedList = this.state.taskList.map((task) => {
      task.completeTaskStatus = true;
      return task;
    })
    this.setState({ taskList: updatedList })
  }

  deleteAll = () => {
    var updatedList = [];
    this.setState({ taskList: updatedList })
  }


  render() {
    const { currentInputValue, taskList } = this.state;
    return (
      <div className="container">
        <NavigationBar markAllCompelte={this.markAllCompelte} deleteAll={this.deleteAll} />
        <h2>TODO LIST</h2>
        <div className="input-container">
          <input
            className="inputfield" type="text"
            value={currentInputValue}
            placeholder="Type here.."
            onKeyPress={this.keyPressHandle}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="wrapper">
          <button onClick={this.onInputSubmit} className="addTaskButton">
            <strong>ADD </strong>
          </button>
        </div>
        <ul className="taskList_wrapper">
          <TodoItemList entries={taskList} handleDeltedItem={this.handleDeltedItem} handleCompletedItem={this.handleCompletedItem}
            handleEditedItem={this.handleEditedItem} />
        </ul>
      </div>
    );
  }
}

export default TodoManager;


