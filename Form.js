import React from "react";

class Form extends React.Component {
    keyPressHandle = (event) => {
        if (event.which === 13) {
            const textValue = event.currentTarget.value.trim();
            event.currentTarget.value = " ";

            if (!textValue) return;
            return this.props.inputTask(textValue, this.props.currentInputValue);
        }
    }

    onInputSubmit = () => {
        const textValue = document.querySelector('[data-new-task = "newTask"]').value.trim();;
        if (!textValue) return;
        document.querySelector('[data-new-task = "newTask"]').value = "";
        return this.props.inputTask(textValue, this.props.currentInputValue);
    }

    render() {
        return (
            <div>
                <div className="input-container">
                    <input autoFocus
                        className="inputfield" data-new-task="newTask"
                        value={this.props.currentInputValue}
                        placeholder="Type here.."
                        onKeyPress={(event) => { this.keyPressHandle(event); }}
                    />
                </div>
                <div className="wrapper">
                    <button onClick={() => { this.onInputSubmit() }} className="addTaskButton">
                        <strong>ADD </strong>
                    </button>
                </div>
            </div>
        )
    }
}


export default Form;