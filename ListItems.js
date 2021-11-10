import React, { Component } from 'react'

class ListItems extends Component {
    
    render() {
        return (
            <div>
              {this.props.Items.map((item)=>{
                  return (<div style={{backgroundColor:item.done?"green" :"white"}} key={item.id}>
                      <span>{item.task}</span>
                      <button  onClick={()=>this.props.DeleteItem1(item.id)}> Delete </button>
                      <button  onClick={()=>this.props.MarkDone1(item.id)}> Done </button>
                      </div>
                    )
              })}  
            </div>
        )
    }
}

export default ListItems
