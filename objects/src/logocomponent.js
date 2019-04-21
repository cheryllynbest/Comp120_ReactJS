import React, { Component } from 'react';
import logo from './logo.svg';
import palatte from './palatte.svg';
import cloud from './cloud.svg';
import coffee from './coffee.svg';
import MathComp from './components/MathComp.js';

class LogoComponent extends Component {   
    constructor() {
        super()
        this.state = { showComponent: false };
        this.clicked = this.clicked.bind(this);
    }

    // clicked = () => {
    //     this.setState({ showComponent: !this.state.showComponent }); 
    // }

    clicked() {
        this.setState({ showComponent: !this.state.showComponent }); 
    }

    render () {
        return (
            <div className="App">
            
                <h1> Hello World </h1>
    
                <img src={palatte} className="App-otherlogos" alt="" onClick={this.clicked}/>
                <img src={cloud} className="App-otherlogos" alt="" onClick={() => alert("The icon was clicked")}/> 
                <img src={coffee} className="App-otherlogos" alt="" onClick={() => console.log("The icon was clicked")}/>
               
                <header className="App-header">
                
                <img src={logo} className="App-logo" alt="logo" />
    
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
    
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                </header>

                { this.state.showComponent ? < MathComp /> : null }

            </div>
        )    
    }
}

export default LogoComponent;


// function LogoComponent() {
//     return (
//         <div className="App">
        
//             <h1> Hello World </h1>

//               <img src={palatte} className="App-otherlogos" alt="" onClick={() => console.log("The icon was clicked")}/>
//             <img src={cloud} className="App-otherlogos" alt="" onClick={() => alert("The icon was clicked")}/> 
//             <img src={coffee} className="App-otherlogos" alt="" onClick={() => console.log("The icon was clicked")}/>
           
//             <header className="App-header">
            
//             <img src={logo} className="App-logo" alt="logo" />

//             <p>
//                 Edit <code>src/App.js</code> and save to reload.
//             </p>

//             <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 Learn React
//             </a>
//             </header>
//         </div>
//     )
// }