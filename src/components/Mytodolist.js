import React, { Component } from 'react';

export default class Mytodolist extends Component {
  constructor(props) {
    super(props);

    this.state={
      tododata: []
    }
  }
  componentWillReceiveProps(item){
    this.setState({
      tododata : item.empList
    })
    console.log(item)
  }

  delete(i){
    console.log(i)
   this.state.tododata.splice(i,1);
   this.setState({
    tododata: this.state.tododata
  })
  }
  render() {

    return (
      <div className="mytodolist">
    
        <table className="table">
   <tbody>
      <tr>
        <th>S.No</th>
        <th>Emp Name </th>
        <th>Edit</th>
        <th>Delete</th>
        
      </tr>
      { this.state.tododata.map((item,i)=>
      <tr key={i}> 
        <td>{i+1}</td>
        <td>{item}</td>
        <td><button type="button" className="btn btn-link" onClick={this.edit}>Edit</button></td>
        <td> <button type="button" className="btn btn-link" onClick={this.delete.bind(this,i)}>Delete</button></td>
        
        
      </tr>)}
 </tbody>
    </table>
      </div>
    )
  }
}
