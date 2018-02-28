import React, { Component } from 'react';

export default class Dashboard extends Component {
  constructor() {
    super();
   
    this.state = {
      mytext: '', 
      totalTodoList:[]
    };

    this.handleChange = this.handleChange.bind(this);
    this.click = this.click.bind(this);
  }

  handleChange(e) {
    
    this.setState({
      [e.target.name]: e.target.value
    });
    
}
click(e) {    
  e.preventDefault();
 this.state.totalTodoList.push(this.state.mytext);
 this.props.emplist(this.state)
  console.log(this.state);
}

  render() {
    return (
      <div className="dashboard">
        { this.props.children }
        <div className="row">
        <div className="col-6 form-group">
        <input type="text" className="form-control" placeholder="enter any Emp Name"
        name="mytext" ref="mytext" value={ this.state.mytext } 
        onChange={ this.handleChange} />
        </div>

        <div className="col-1">
        <button type="submit" className="btn btn-primary"  onClick={this.click}>submit</button>
        </div>
        </div>
      </div>
    )
  }
}
