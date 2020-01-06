import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewBooking from '../viewBooking/viewBooking';
import HomePage from '../homepage/homepage'

class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    handleChange = (event) => {    
        console.log("START");
        console.log(this.state.name);
        // console.log(this.state.password);
      this.setState({[event.target.name] : event.target.value});
      console.log("END");
      console.log(this.state.name);
        // console.log(this.state.password);    
  }  

  createTerminal = () => {    
    let terminal = {name: this.state.name}; 
    // const username = this.state.username.value;
    // const password = this.state.password.value;
    // const data = {username, password};

    console.log("NOW INSIDE create terminal METHOD");
    console.log(this.state.name);
        // console.log(this.state.password);
        // console.log(username);
        // console.log(password); 
        const jwtToken = sessionStorage.getItem("jwt");
        console.log(jwtToken)
    fetch("http://localhost:1111/" + 'createTerminal', {    
        method: 'POST',    
        // body: JSON.stringify(user),
        body: JSON.stringify({
            name: this.state.name
            // password: this.state.password
        }),
        // body: JSON.stringify({
        //     username: this.state.username,
        //     password: "adssads"
        // }),
        // body: JSON.stringify(this.state.username),
        // body: JSON.stringify(this.state.password),
        headers:{    
            "Authorization": jwtToken,    
            "Content-Type": "application/json"
            // "Content-Type": "text"    
}
// body: JSON.stringify({
// //     // wstoken: 'any_token',
// //     // wsfunction: 'any_function',
// //     // moodlewsrestformat: 'json',
//     username: this.state.username,
//     password: this.state.password
//  })
// body: JSON.stringify({
//     "username": this.state.username,
//     "password": this.state.password
//   })
// body: {
//     "username": this.state.username,
//     "password": this.state.password
//   }
// body: "username=" + this.state.username + "&param2=" + this.state.password // <-- Post parameters

}).then((response) => response.json())
// .then((findresponse)=>{
//   console.log(findresponse.title)
// })
  }

    render() {   
          return (    
              <div id="terminal">    
                  <h3 className="text-center text-white pt-5">Creating new Terminal</h3>    
                  <div className="container">    
                      <div id="login-row" className="row justify-content-center align-items-center">    
                      <div id="login-column" className="col-md-6">    
                       <div id="login-box" className="col-md-12">    
                      <div className="form-group">    
                          <input type="text" name="name" onChange={this.handleChange}  className="form-control" placeholder="terminal name" />    
                      </div>    
                      {/* <div className="form-group">    
                          <input type="password" name="password" onChange={this.handleChange}  className="form-control" placeholder="password" />    
                      </div>     */}
                           <input type="submit" name="submit" onClick={this.createTerminal}  className="btn btn-info btn-md" value="Create"/>    
                       </div>    
                      </div>    
                      </div>    
              </div>    
              </div>    
      
   );} }  


export default Terminal;  