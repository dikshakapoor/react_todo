import React from "react";

import completeButtonImg from "./_ionicons_svg_md-checkmark-circle.svg";
import removeButtonImg from "./_ionicons_svg_md-trash.svg";
import editButtonImg from "./_ionicons_svg_md-create.svg";

class TodoItemList extends React.PureComponent {
    // constructor(props) {
    //     super(props)
    // }
    // class TodoItemList extends React.PureComponent {
    //     constructor(props) {
    //         super(props);
    //         this.state =  
    //     }
    //     render() {
    //         console.log(props);
    //         console.log(this.props.state);
    //         return null;
    //     }


    // }

    handleMarkComplete = (event) => {
        console.log(event);
        const { managerSetState } = this.props;
        debugger
        managerSetState({
            arr: [1, 4]
        })
    }
    handleAddStatus = (event) => {
        console.log(event);
        //status = event.currentTarget.__reactEventHandlers$6bb48irirc3.className;
        const { addStatus } = this.props;

        // props.addStatus("removed", task.id)
        // this.props.addStatus("edited", task.id)

    };

    // const setStatus = (id) => {

    //     props.entries.taskList.map((task) => {
    //         switch (task.status) {
    //             case "edited": this.editTask(task.id);
    //                 break;
    //             case "completed": this.compelteTask(task.id);// <div className += "checked"/>;
    //                 break;
    //             case "removed": this.removeTask(task.id);
    //                 break;
    //         }

    //     }

    //     )
    // };

    // console.log(props.entries.taskList);
    // console.log("this is todolist");
    // console.log(props.taskList);
    render() {
        if (this.props.entries.taskList) {


            return (
                <div>

                    {this.props.entries.taskList.map((task) => {

                        return (<div className="card">
                            <div className="task" key={task.key} ><b>{task.value}</b></div>
                            <div className="icon" >

                                <button className="completed" onClick={this.handleMarkComplete}>
                                    <img src={completeButtonImg} alt="complete" style={{ width: "20px", heigth: "20px" }} /></button>
                                <button className="removed" onClick={this.handleDeleteItem} >
                                    <img src={removeButtonImg} alt="delete" style={{ width: "20px", height: "20px" }} /></button>
                                <button className="edited" onClick={this.handleEditItem}>
                                    <img src={editButtonImg} alt="edit" style={{ width: "20px", heigth: "20px" }} /></button>
                            </div>
                        </div>
                        )


                    })
                    }
                </div>
            );
        }
    }
}


// class TodoItemList extends React.PureComponent {
//     createTasks(items) {
//         return <li key={items.key}> {items.text} </li>
//     }
//     // state = {
//     //     todos: [
//     //         {
//     //             text: null,
//     //             id: Date.now(),
//     //             status: "",
//     //         }
//     //     ]
//     // }
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         text = null,
//     //         id = Date.now(),
//     //         status = ""

//     //     }
//     //     this.setState({

//     //     })

//     // }
//     render() {
//         let todoEntries = this.props.entries;
//         let listItems = todoEntries.map(this.createTasks);
//         return (<div className="card">
//             <div className="task"><b>{listItems}</b></div>
//             <div className="icon">
//                 <button className="completed">
//                     <img src={completeButtonImg} alt="complete" style={{ width: "20px", heigth: "20px" }} /></button>
//                 <button className="removed">
//                     <img src={removeButtonImg} alt="delete" style={{ width: "20px", height: "20px" }} /></button>
//                 <button className="edited">
//                     <img src={editButtonImg} alt="edit" style={{ width: "20px", heigth: "20px" }} /></button>
//             </div>
//         </div>

//         );

//         // const todoList = todos.length ? (todos.map(todo => {
//         //     return (

//         //     )
//         // })) : (null);

//         // const { todos } = this.state;
//         // debugger;
//         // return (

//         // )
//  }

// }

export default TodoItemList;