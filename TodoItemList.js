import React from "react";
import Card from "./Card";

class TodoItemList extends React.Component {

  renderItem = task => {
    return (
      <Card key={task.id} task={task} handleDeltedItem={this.props.handleDeltedItem} handleCompletedItem={this.props.handleCompletedItem}
        handleEditedTask={this.props.handleEditedTask}
        updatedTaskList={this.props.updatedTaskList} />
    )
  }

  render() {
    const { entries } = this.props;
    const items = entries && entries.map((task) => this.renderItem(task));
    return (
      <div>
        {items}
      </div>
    )
  }
}

export default TodoItemList;