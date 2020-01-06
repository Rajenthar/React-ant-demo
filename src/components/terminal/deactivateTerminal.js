import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import ViewBooking from '../viewBooking/viewBooking';
import HomePage from '../homepage/homepage'
import { DatePicker } from 'antd';

const dateFormat = 'YYYY/MM/DD';


class DeactivateTerminal extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', date: '', terminals: []};
        this.handleSelect = this.handleSelect.bind(this)

      //   this.state = {
      //     terminals: []
      // };
    }

    handleSelect(e) {
      this.setState({name: e.target.value})
    }

    fetchBookingDetails = (name, date) => {
      console.log(this.state.terminals)
      // this.setState({ isLoading: true });
            const jwtToken = sessionStorage.getItem("jwt");
  fetch("http://localhost:1111/" + 'getBookedDetails', {
        method: "GET",
        headers:{    
          "Authorization": jwtToken,    
          "Content-Type": "application/json"
        },
        body: {
            "name" : name,
            "date": date
        }
      })
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            console.log(json);
            console.log("Thi is first start in search for booking details")
        console.log(this.state.terminals);
        this.setState({ terminals: json });
        this.setState({ col: json.length });
        console.log(this.state.terminals);
        // this.setState({ terminals: this.state.terminals.concat(json) });
        console.log(this.state.terminals);
        console.log("Thi is first end in search for booking details")
  
          });
        }
      })
      .then(jsonData => {
            return JSON.stringify(jsonData);
      })
    .catch(err => console.error(err)) 
      console.log(this.state.terminals)
  }

    fetchCurrencies = () => {
      console.log(this.state.terminals)
      // this.setState({ isLoading: true });
            const jwtToken = sessionStorage.getItem("jwt");

      fetch("http://localhost:1111/" + 'getterminals', {
        method: "GET",
        headers:{    
          "Authorization": jwtToken,    
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            console.log(json);
            console.log(this.state.terminals)

            // this.setState({terminals: JSON.stringify(json)}) 
            console.log(this.state.terminals)
            console.log(this.state.terminals)
            console.log(this.state.terminals)
            console.log(this.state.terminals)

            console.log("Thi is first start")
        console.log(this.state.terminals);
        this.setState({ terminals: json });
        console.log(this.state.terminals);
        // this.setState({ terminals: this.state.terminals.concat(json) });
        console.log(this.state.terminals);
        console.log("Thi is first end")

          });
        }
      })
      .then(jsonData => {
            return JSON.stringify(jsonData);
      })
    .catch(err => console.error(err)) 
      console.log(this.state.terminals)
  }



    componentDidMount() {
      this.fetchCurrencies();
    }

    // componentDidMount() {
    //   const jwtToken = sessionStorage.getItem("jwt");

    //   fetch("http://localhost:1111/" + 'getterminals', {
    //     method: "GET",
    //     headers:{    
    //       "Authorization": jwtToken,    
    //       "Content-Type": "application/json"
    //     }
    //   })
    //     .then(res => {  
    //           this.setState({terminals: res.body}); 
    //           console.log(this.state.terminals)
    //           console.log(res.body)
    //          })    
    //   .catch(err => console.error(err))   
    // }



  onChange = (date, dateString) => {
    console.log("START");
    // console.log(this.state.name);
    console.log("This is the date")
    // console.log(this.state.date);
    console.log(date, dateString); 
    console.log(date); 
    console.log( dateString); 
    // console.log(date.type); 
    // console.log( event); 
    console.log( this.state.date); 
    this.setState({date : date, dateString});
    console.log( this.state.date); 
    this.setState({date : dateString.value});
    console.log( this.state.date); 
    // this.setState({date : date.value});
    console.log( this.state.date); 
    this.setState({date : dateString});
    // console.log("wowowowowowowwow")
    console.log( this.state.name); 
    // this.setState({[event.target.name] : event.target.value});
      console.log("END");

    console.log("END");
  console.log("YES IT WORKED");
    // console.log(this.state.date);    
  }


  onChangee1 = (event) => {
    console.log("START");
    // console.log(this.state.name);
    console.log("This is the date")
    // console.log(this.state.date);
    // console.log(date, dateString); 
    // console.log(date); 
    // console.log( dateString); 
    // console.log( this.state.date); 
    // this.setState({date : date, dateString});
    console.log( this.state.date); 
    this.setState({date : event.target.value});
    console.log( this.state.date); 
    // this.setState({date : date.value});
    // console.log( this.state.date); 

    console.log("END");
  console.log("YES IT WORKED");
    // console.log(this.state.date);    
  }

    handleChange = (event) => {    
        console.log("START");
        console.log(this.state.name);
        console.log(this.state.date);
      this.setState({[event.target.name] : event.target.value});
      console.log("END");
      console.log(this.state.name);
      console.log(this.state.name.type);
      console.log(this.state.date);    
  }  

  deactivateTerminal = () => {    
    if(this.state.name === "" && this.state.date === ""){
        alert("Please selct a terminal and date")
    } else if(this.state.name === ""){
      alert("Please selct a terminal")
    }  else if(this.state.date === ""){
      alert("Please selct date")
    }
     else {
      let terminal = {name: this.state.name, date: this.state.date};
      console.log(this.state.name);
    console.log("NOW INSIDE create terminal METHOD");
    console.log(this.state.name);
        console.log(this.state.date);
        const jwtToken = sessionStorage.getItem("jwt");
        console.log(jwtToken)
    fetch("http://localhost:1111/" + 'deactivateTerminal', {    
        method: 'POST',
        body: JSON.stringify({
          name: this.state.name,
          date: this.state.date
      }),
        headers:{    
            "Authorization": jwtToken,    
            "Content-Type": "application/json"
}

}).then((response) => response.json())
    }

  }

    render() {   
      console.log("IN RENDER METHOD"); 
      console.log( this.state.terminals); 


      // const {terminals};
      const { terminals } = this.state;
      // this.setState({terminals: this.state.terminals})
      console.log( this.state.terminals); 
      console.log(terminals); 

      console.log("AT END OF RENDER METHOD"); 



	// let terminalList = terminals.length > 0
	// 	&& terminals.map((item) => {
	// 	return (
	// 		<option key={item.id} value={item.id}>{item.name}</option>
	// 	)
  // }, this);
  


  let terminalList = Object.keys(terminals).map((k) => {
		return (
			<option key={k} value={k}>{terminals[k]}</option>
		)
	}, this);


      // let planets = this.state.terminals;
      //   let optionItems = planets.map((terminal) =>
      //           <option key={terminal.name}>{terminal.name}</option>
      //       );
          return (    
              <div id="terminal">    
                  <h3 className="text-center text-white pt-5">Deactivate Terminal</h3>    
                  <div className="container">    
                      <div id="login-row" className="row justify-content-center align-items-center">    
                      <div id="login-column" className="col-md-6">    
                       <div id="login-box" className="col-md-12">    
                      <div className="form-group">    
                          {/* <input type="text" name="name" onChange={this.handleChange}  className="form-control" placeholder="terminal name" />     */}
                              <select onChange={this.handleSelect} name="name">
                                <option value="">Select Terminal</option>
                                {this.state.terminals.map(user => <option key={user.id} value={user.name}>{user.name}</option>)}
                                {/* {this.fetchBookingDetails(user.name, this.state.date).map(user => <option key={user.id} value={user.name}>{user.name}</option>)} */}
                              {/* console.log("kabhdkjn"); */}
                              

                                    {/* {terminalList} */}
                              </select>
                              {/* <form>
                              <ul>
                              {terminals.map(terminal => (
                                 <li key={terminal.id}>{terminal.name}</li>
                                       ))}
                              </ul>
                              </form> */}
                              {/* <select name="terminal" value={this.state.terminals.name}>
                                    {this.terminals.map((e, key) => {
                                        return <option key={key} value={e.value}>{e.name}</option>;
                                    })}
                              </select> */}
                      </div>    
                      <div>
                      {/* type="date" name="date" */}
                            <DatePicker type="text" name="date" onChange={this.onChange} placeholder="Select date" />
                            <br />
                        </div>

                      {/* <div className="form-group">    
                          <input type="password" name="password" onChange={this.handleChange}  className="form-control" placeholder="password" />    
                      </div>     */}
                           <input type="submit" name="submit" onClick={this.deactivateTerminal}  className="btn btn-info btn-md" value="Deactivate"/>    
                       </div>    
                      </div>    
                      </div>    
              </div>    
              </div>    
      
   );} }  


export default DeactivateTerminal;  