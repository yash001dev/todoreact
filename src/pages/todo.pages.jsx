import React from 'react';
import './todo.style.css';
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: [],
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("button clicked");
        if (this.state.value === '') {
            return;
        }
        else {
            const userInput = {
                id: Math.random(),
                value: this.state.value,
                status: false,
                isChecked: false,

            };
            console.log("list added");
            const list = [...this.state.list];
            list.push(userInput);

            this.setState({
                list: list,
                value: ""
            });
            console.log("push Operation");
        }
    }
    updateText = (event) => {
        this.setState({
            value: event.target.value
        })
        console.log(event.target.value);
    }

    deletedItem(key) {
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id !== key);
        this.setState({
            list: updatedList
        })
    }

    toogleTask(key) {
        const list = [...this.state.list];
        const updatedList = list.map((item, index) => {
            if (item.id === key) {
                return { ...item, status: !item.status };
            }
            else {
                return { ...item };
            }
        })
        this.setState({
            list: updatedList
        })

        console.log(updatedList);
    }

    toggleCheckBoxChange(key) {
        console.log("Toogle Clicked...");
        const list = [...this.state.list];
        const updatedList = list.map((item, index) => {
            if (item.id === key) {
                return { ...item, isChecked: !item.isChecked };
            }
            else {
                return { ...item };
            }
        })
        this.setState({
            list: updatedList
        })

        console.log(updatedList);
    }
    render() {
        return (
            <div className="container">
                <div className="header">
                    <form onSubmit={this.handleSubmit} className="todo">
                        <input className="todo__input" type="text" value={this.state.value} onChange={this.updateText} />
                        <button className="todo__input-button" type="submit" value="Submit">Submit</button>
                    </form>
                </div>
                <div className="list">
                    <ul className="list-main">
                        {this.state.list.length === 0 ? <div>No any Todoes</div> : this.state.list.map((item, index) => {
                            return <li className="list-item">
                                <input className="checkbox" type="checkbox" checked={item.isChecked} onChange={() => this.toggleCheckBoxChange(item.id)}></input>
                                <p className={item.isChecked?'checked':'uncheck'}>{item.value}</p>
                                <div className="icon-button">
                                    <button className="list-item-deleteButton" disabled={item.isChecked} onClick={() => this.deletedItem(item.id)}>❌</button>
                                    <button className="list-item-completeButton" disabled={item.isChecked} onClick={() =>
                                        this.toogleTask(item.id)}>
                                        {item.status ? '😌' : '🤘'}
                                    </button>
                                </div>
                            </li>
                            
                        })}
                    </ul>
                </div>
            </div>

            // {this.state.list.map((item,index)=>{return <li>{item.value}</li>})} 


        )
    }
}

export default Todo;
