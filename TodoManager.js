import React from 'react';
import './TodoManager.css';
import NavigationBar from "./NavigationBar";
// import InputForm from "./InputForm";
import TodoItemList from "./TodoItemList";

class TodoManager extends React.PureComponent {
  constructor(props) {
    super(props) // props in case we pass something from other class
    // this.addItem = this.addItem.bind(this);
    // let taskMap = new Map
    this.state = {
      taskList: [],
      currentInputValue: "",
      status: ""
    }

    this.setState = this.setState.bind(this);
  }

  // addItem(e) {
  //   let itemArray = this.state.items;

  //   if (this._inputElement.value !== "") {
  //     itemArray.unshift(
  //       {
  //         text: this._inputElement.value,
  //         key: Date.now()
  //       }
  //     );

  //     this.setState({
  //       items: itemArray
  //     });
  //     console.log(this._inputElement.value);
  //     console.log(this._inputElement.formTarget.value);
  //     this._inputElement.value = "";
  //   }
  //   console.log(itemArray);

  //   e.preventDefault();
  // }

  // deleteItem(key) {
  //   var filteredItems = this.state.items.filter(function (item) {
  //     return (item.key !== key);
  //   });

  //   this.setState({
  //     items: filteredItems
  //   });
  // }

  createNewTask = () => {
    const { taskList } = this.state;
    console.log(taskList);
    console.log(typeof (taskList));
  }

  onInputSubmit = (event) => {

    const { taskList, currentInputValue } = this.state; // destructure
    if (currentInputValue !== " ") {
      const newTask = {
        key: Date.now(),
        value: currentInputValue,
        status: ""

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
  addStatus = (taskStatus, id) => {
    this.state.taskList.map((task) => {
      if ((task.id) === id) {

        task.status = taskStatus;
      }
    })

  }

  handleInputChange = (ev) => {
    console.log(ev.target.value);

    this.setState({

      currentInputValue: ev.target.value,
    })
  }

  render() {
    const { currentInputValue, taskList } = this.state;
    return (
      <div className="container">
        <NavigationBar />
        {/* <form onSubmit="return false"> */}
        {/* <form onSubmit={this.onFormSubmit}> */}
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
        {/* </form> */}
        <ul className="taskList_wrapper">
          <TodoItemList entries={taskList} addStatus={this.addStatus} managerSetState={this.setState} />
          {/* <operationOnTask entries={this.state.status} /> */}
        </ul>
      </div>
    );
  }
}

export default TodoManager;


// trim the input 
// add the event handler for edit delete and compelte