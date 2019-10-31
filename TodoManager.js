import React from 'react';
import logo from './todo_logo.png';
import './TodoManager.css';
import TodoItemList from "./TodoItemList";



class TodoManager extends React.Component {
  constructor(props) {
    super(props)
    this.addItem = this.addItem.bind(this);

    this.state = {
      items: []
    }
  }

  addItem(e) {
    let itemArray = this.state.items;

    if (this._inputElement.value !== "") {
      itemArray.unshift(
        {
          text: this._inputElement.value,
          key: Date.now()
        }
      );

      this.setState({
        items: itemArray
      });
      console.log(this._inputElement.value);
      console.log(this._inputElement.formTarget.value);
      this._inputElement.value = "";
    }
    console.log(itemArray);

    e.preventDefault();
  }

  // deleteItem(key) {
  //   var filteredItems = this.state.items.filter(function (item) {
  //     return (item.key !== key);
  //   });

  //   this.setState({
  //     items: filteredItems
  //   });
  // }


  render() {
    return (
      <div>
        <div className="container">
          <div className="header">
            <img className="logo" src={logo} style={{ width: "50px", height: "50px", radius: "2px" }} />
            <div className="nav">
              <ul>
                <li className="navText"><div className="markAllComplete"> Mark All Complete </div></li>
                <li className="navText"><div className="deleteAll"> Delete All</div></li>
              </ul>
            </div>
          </div>
          {/* <form onSubmit="return false"> */}
          <form onSubmit={this.addItem}>
            <h2>TODO LIST</h2>
            <div className="input-container">
              <input ref={(a) => {
              this._inputElement = a;
                console.log(a);
              }} // a is event object
                className="inputfield" type="text" placeholder="Type here.." />
            </div>
            <div className="wrapper">
              <button className="addTaskButton"><strong>ADD </strong></button>
            </div>
          </form>
          <ul className="taskList_wrapper">
            <TodoItemList entries={this.state.items} />

          </ul>
        </div>
      </div>
    );
  }
}

export default TodoManager;
