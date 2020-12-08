import React from 'react';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            list:[],
            }
        }
        handleSubmit=(event)=>{
            event.preventDefault();
            console.log("button clicked");
            const userInput={
                id:Math.random(),
                value:this.state.value
            };
            console.log("list added");
            const list=[...this.state.list];
            list.push(userInput);
            
            this.setState({
                list:list,
                userInput:""
            });
            console.log("push Operation");
        }
        updateText=(event)=>{
            this.setState({
                value:event.target.value
            })
        console.log(event.target.value);
       
        }
        render(){
            return(
                    <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} onChange={this.updateText}/>
                        <button type="submit" value="Submit">Submit</button>
                    </form>
                    <ul>
                        <li>Hello</li>
                        {this.state.list.forEach(item=>{return <li>HELLo</li>})}
                    </ul>
                    </div>
                    
                
               
                
            )
        }
    }

export default Todo;