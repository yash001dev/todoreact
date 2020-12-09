import React from 'react';

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
                isChecked:false,

            };
            console.log("list added");
            const list = [...this.state.list];
            list.push(userInput);

            this.setState({
                list: list,
                userInput: ""
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

    toggleCheckBoxChange(key){
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.updateText} />
                    <button type="submit" value="Submit">Submit</button>
                </form>
                <ul>
                    {this.state.list.length === 0 ? 'No Information Currently In the List' : this.state.list.map((item, index) => {
                        return <li>{item.value}
                            
                            <button disabled={item.isChecked} onClick={() => this.deletedItem(item.id)}>Delete</button>
                            <button disabled={item.isChecked} onClick={() => 
                                this.toogleTask(item.id)}>
                                    {item.status ? 'Incomplete' : 'Complete'}
                            </button>
                            <input type="checkbox" checked={item.isChecked} onChange={()=>this.toggleCheckBoxChange(item.id)}></input>
                        </li>
                    })}

                </ul>
            </div>

            // {this.state.list.map((item,index)=>{return <li>{item.value}</li>})} 


        )
    }
}

export default Todo;