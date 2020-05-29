import React, { Component } from 'react';
import CardList from './Components/CardList/CardList';
import SearchBox from './Components/SearchBox/SearchBox';
import Heading from './Components/Heading/Heading';
import logo from './logo.svg';
import './App.css';





class App extends Component{
  constructor(props){
    super(props);
    this.state={
      robots: [],
      searchParam: ""
    }
  }
  getSearchParam=(event)=>{
    this.setState({searchParam: event.target.value});
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>{this.setState({robots:data})})

  }

  render(){
    let {robots, searchParam}= this.state;
    return (
      <div className="background">
        <Heading />
        <SearchBox getSearchParam={this.getSearchParam}/>
        <CardList robots={robots} searchParam={searchParam}/>
      </div>
      );
    }

}


export default App;
