import React from 'react';
import './TodoManager.css';
import NavigationBar from "./NavigationBar";
// import InputForm from "./InputForm";
// import TodoItemList from "./TodoItemList";

class TodoManager extends React.Component {
  constructor(props) {
    super(props)
    // this.addItem = this.addItem.bind(this);
    // let taskMap = new Map
    this.state = {
      taskList: [],
      currentInputValue: ""
    }
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
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const { taskList, currentInputValue } = this.state; // destructure
    const newTask = {
      key: Date.now(),
      value: currentInputValue,
    };
    this.setState({
      currentInputValue: '',
      taskList: [...taskList, newTask],
    }, this.createNewTask)
    console.log(this.state.currentInputValue);
  }
  keyPressHandle = (event) => { // not working 

    if (event.which === 13) {
      this.handleInputChange();

      console.log("working");
    }
  }


  handleInputChange = (ev) => {
    console.log(ev.target.value);
    this.setState({

      currentInputValue: ev.target.value,
    })
  }

  render() {
    const { currentInputValue } = this.state;
    return (
      <div>
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
            <button onClick={this.onFormSubmit} className="addTaskButton"><strong>ADD </strong></button>
          </div>
          {/* </form> */}
          <ul className="taskList_wrapper">
            {/* <TodoItemList entries={this.state} /> */}

          </ul>
        </div>
      </div>
    );
  }
}

export default TodoManager;
