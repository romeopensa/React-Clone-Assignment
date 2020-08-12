import React, {Component} from 'react'
import logo1 from '../img/pase.png'
import 'bootstrap/dist/css/bootstrap.min.css'

class Navbar extends Component {
    render(){

        return(    
            <nav className="navbar">
              <div className="container">
                <a href="#">Hulk</a>
                
                <a href="#" className="logo is-active">Mavel</a>
                <a href="#">Venom</a>
              </div>
            </nav>
            
        )
    }
    
}
export default Navbar