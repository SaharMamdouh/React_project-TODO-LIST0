import React, { Component } from 'react'
import ListItems from './ListItems'
import AddItem from './AddItem'
class TODO extends Component {
    id_inc=4
    constructor(props) {
        super(props)
    
        this.state = {
             Items:[ {
                       id:1,
                       task:"study React",
                       done:false
             },
             {
                id:2,
                task:"Revising JS",
                done:false
      },{
        id:3,
        task:"preparing next python lecture",
        done:false
}
                 
             ]
        }
    }

    DeleteItem=(id)=>{ 
        let item_index=this.state.Items.findIndex((item)=>item.id==id)
        this.state.Items.splice(item_index,1)
        this.setState({Items: this.state.Items})
    
    }

    MarkDone=(id)=>{
        console.log(id)
        let current_item=this.state.Items.find((item)=>item.id==id)
        current_item.done=!current_item.done
        this.setState({Items:this.state.Items})
    }
    AddItem=(item)=>{
        item.id=this.id_inc++
        this.state.Items.push(item)
        this.setState({Items:this.state.Items})

    }
    render() {
        return (
            <div>
                <ListItems Items={this.state.Items} DeleteItem1={this.DeleteItem} MarkDone1={this.MarkDone} />
                <AddItem  AddItem={this.AddItem}/>
                
            </div>
        )
    }
}

export default TODO
