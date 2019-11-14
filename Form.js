import React from "react";


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskList: [],
            currentInputValue: '',
        }
    }


    keyPressHandle = (event) => {
        if (event.which === 13) {
            this.onInputSubmit();
        }

    }

    handleInputChange = (ev) => {
        let task = ev.target.value;
        this.setState({
            currentInputValue: task,
        })
    }
    onInputSubmit = () => {
        const { taskList, currentInputValue } = this.state; // destructure
        const textValue = currentInputValue.trim();
        if (!textValue) return;

        const newTask = {
            id: Date.now(),
            discription: textValue,
            completedTaskStatus: false,
            updatedTaskStatus: false,
        };
        this.setState({
            currentInputValue: '',
            taskList: [...taskList, newTask],
        });

        this.props.inputValue(taskList);
        { console.log(this.taskLsit) };
    }

    render() {
        const { currentInputValue, taskList } = this.state;
        return (
            < div >
                <div className="input-container">
                    <input
                        className="inputfield" type="text"
                        value={currentInputValue}
                        placeholder="Type here.."
                        onKeyPress={(event) => { this.keyPressHandle(event); }}
                        onChange={(event) => { this.handleInputChange(event); console.log(event) }}

                    />
                </div>
                <div className="wrapper">
                    <button onClick={() => { this.onInputSubmit() }} className="addTaskButton">
                        <strong>ADD </strong>
                    </button>
                </div>
            </div >
        )
    }
}


export default Form;