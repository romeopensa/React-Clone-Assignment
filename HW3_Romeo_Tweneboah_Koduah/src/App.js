
import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar'
import Content from './Component/Content'



class App extends Component {
render() { 
  return ( 
    <div>
        <Navbar/>
        <Content/>
       

    </div>  
   );

}}


export default App;
