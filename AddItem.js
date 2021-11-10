import React, { Component } from 'react'

class AddItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Newtask:""
        }
    }

    AddText=(e)=>{
        this.setState({Newtask:e.target.value})
    }

    AddItem=()=>{
        let item={task:this.state.Newtask, done:false}
        this.props.AddItem(item)
        this.setState({Newtask:""})
    }

    
    render() {
        return (
            <div>
              Task:<input type="text" onChange={this.AddText} value={this.state.Newtask}/>  
              <button className="btn" onClick={this.AddItem}>Add</button>
            </div>
        )
    }
}

export default AddItem
