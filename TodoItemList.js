import React from "react";

import completeButtonImg from "./_ionicons_svg_md-checkmark-circle.svg";
import removeButtonImg from "./_ionicons_svg_md-trash.svg";
import editButtonImg from "./_ionicons_svg_md-create.svg";
class TodoItemList extends React.PureComponent {
    createTasks(items) {
        return <li key={items.key}> {items.text} </li>
    }
    // state = {
    //     todos: [
    //         {
    //             text: null,
    //             id: Date.now(),
    //             status: "",
    //         }
    //     ]
    // }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         text = null,
    //         id = Date.now(),
    //         status = ""

    //     }
    //     this.setState({

    //     })

    // }
    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);
        return (<div className="card">
            <div className="task"><b>{listItems}</b></div>
            <div className="icon">
                <button className="completed">
                    <img src={completeButtonImg} alt="complete" style={{ width: "20px", heigth: "20px" }} /></button>
                <button className="removed">
                    <img src={removeButtonImg} alt="delete" style={{ width: "20px", height: "20px" }} /></button>
                <button className="edited">
                    <img src={editButtonImg} alt="edit" style={{ width: "20px", heigth: "20px" }} /></button>
            </div>
        </div>

        );

        // const todoList = todos.length ? (todos.map(todo => {
        //     return (

        //     )
        // })) : (null);

        // const { todos } = this.state;
        // debugger;
        // return (

        // )
    }

}

export default TodoItemList;