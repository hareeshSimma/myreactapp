import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Mytodolist from './components/Mytodolist';

class App extends Component {
  constructor(){
    super();
    this.state={
      list:null
    }; 


  }
 

emplist=(data)=>{
this.setState({
  list :data.totalTodoList
});
  }
  render() {
    return (
      <div className="container App">
        <Header></Header>
        <Dashboard emplist={this.emplist}></Dashboard>
        <Mytodolist empList={this.state.list}></Mytodolist>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
