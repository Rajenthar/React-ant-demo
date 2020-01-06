
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './../../index.css';
import { List, Card, Checkbox, DatePicker } from 'antd';

var chkd = '';

const data = [
  {
    title: 'Title 1',
    time: '08.00-08.20 am'
  },
  {
    title: 'Title 2',
    time: '08.20-08.40 am'
  },
  {
    title: 'Title 3',
    time: '08.40-09.00 am'
  },
  {
    title: 'Title 4',
    time: '09.00-09.20 am'
  },
  {
    title: 'Title 1',
    time: '09.20-09.40 am'
  },
  {
    title: 'Title 2',
    time: '09.40-10.00 am'
  },
  {
    title: 'Title 3',
    time: '10.00-10.20 am'
  },
  {
    title: 'Title 4',
    time: '10.20-10.40 am'
  },
  {
    title: 'Title 2',
    time: '10.40-11.00 am'
  },
  {
    title: 'Title 3',
    time: '11.00-11.20 am'
  },
  {
    title: 'Title 4',
    time: '11.20-11.40 am'
  },
  {
    title: 'Title 2',
    time: '11.40-12.00 am'
  },
  {
    title: 'Title 3',
    time: '01.00-01.20 pm'
  },
  {
    title: 'Title 4',
    time: '01.20-01.40 pm'
  },
  {
    title: 'Title 4',
    time: '01.40-02.00 pm'
  },
  {
    title: 'Title 3',
    time: '02.00-02.20 pm'
  },
  {
    title: 'Title 4',
    time: '02.20-02.40 pm'
  },
  {
    title: 'Title 4',
    time: '02.40-03.00 pm'
  },
  {
    title: 'Title 3',
    time: '03.00-03.20 pm'
  },
  {
    title: 'Title 4',
    time: '03.20-03.40 pm'
  },
  {
    title: 'Title 4',
    time: '03.40-04.00 pm'
  },
  {
    title: 'Title 3',
    time: '04.00-04.20 pm'
  },
  {
    title: 'Title 4',
    time: '04.20-04.40 pm'
  },
  {
    title: 'Title 4',
    time: '04.40-05.00 pm'
  },
  {
    title: 'Title 3',
    time: '05.00-05.20 pm'
  },
  {
    title: 'Title 4',
    time: '05.20-05.40 pm'
  },
  {
    title: 'Title 4',
    time: '05.40-06.00 pm'
  },
  {
    title: 'Title 3',
    time: '06.00-06.20 pm'
  },
  {
    title: 'Title 4',
    time: '06.20-06.40 pm'
  },
  {
    title: 'Title 4',
    time: '06.40-07.00 pm'
  },
];

function handleChange (event) {
  console.log("great work")
  document.getElementsByName(chkd).checked = false

  // this.setState({chkd: event.target.name})
  chkd= event.target.name
  console.log(chkd)
  document.getElementsByName(chkd).checked = true

  // document.getElementsByName(chkd).checked = false
}



function fetchBookingDetails(name, date){
  // console.log(this.state.terminals)
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
    // console.log(this.state.terminals);
    // this.setState({ terminals: json });
    // this.setState({ col: json.length });
    // console.log(this.state.terminals);
    // this.setState({ terminals: this.state.terminals.concat(json) });
    // console.log(this.state.terminals);
    console.log("Thi is first end in search for booking details")

      });
    }
  })
  .then(jsonData => {
        return JSON.stringify(jsonData);
  })
.catch(err => console.error(err)) 
  // console.log(this.state.terminals)
}

// function onChange(e) {
//   console.log(`checked = ${e.target.checked}`);
//   console.log(`checked = ${e.target.name}`);
//   const chk = e.target.name;
//   console.log(chk)
//   // console.log(this.state.checkedd)
//   // this.setState({checkedd: e.target.name})
// }

class ViewBooking extends Component {
  constructor(props) {
      super(props);
      this.state = {name: '', vehicleNo: '', isAuthenticated: false, open: false, col: 0, terminals: [],  checkedd: '', date: ''};
      this.onChangeTick = this.onChangeTick.bind(this);

      this.render = this.render.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);

  }


//   fetchBookingDetails = (name, date) => {
//     console.log(this.state.terminals)
//     // this.setState({ isLoading: true });
//           const jwtToken = sessionStorage.getItem("jwt");
// fetch("http://localhost:1111/" + 'getBookedDetails', {
//       method: "GET",
//       headers:{    
//         "Authorization": jwtToken,    
//         "Content-Type": "application/json"
//       },
//       body: {
//           "name" : name,
//           "date": date
//       }
//     })
//     .then(response => {
//       if (response.ok) {
//         response.json().then(json => {
//           console.log(json);
//           console.log("Thi is first start in search for booking details")
//       console.log(this.state.terminals);
//       // this.setState({ terminals: json });
//       // this.setState({ col: json.length });
//       console.log(this.state.terminals);
//       // this.setState({ terminals: this.state.terminals.concat(json) });
//       console.log(this.state.terminals);
//       console.log("Thi is first end in search for booking details")

//         });
//       }
//     })
//     .then(jsonData => {
//           return JSON.stringify(jsonData);
//     })
//   .catch(err => console.error(err)) 
//     console.log(this.state.terminals)
// }

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
      this.setState({ col: json.length });
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

handleChange = (event) => {    
  console.log("START");
//   console.log(this.state.name);
//   // console.log(this.state.password);
// this.setState({[event.target.name] : event.target.value});
// console.log("END");
// console.log(this.state.name);
  // console.log(this.state.password);    
} 

onChangeTick = (event) => {
  // console.log(`checked = ${event.target.checked}`);
  console.log(`checked = ${event.target.name}`);
  const chk = event.target.name;
  console.log(chk);
  console.log(this.state.checkedd);
  // this.setState({checkedd: event.target.name})
}

componentDidMount() {
  this.fetchCurrencies();
}

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

handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}


render(){
  const { checkedd } = this.state;
  // function onChangeTick = this.onChangeTick;
  // this.setState({checked: ''})

  
return (
  <div>
    <div className="form-group">    
                          <input type="text" name="name" onChange={this.handleChange}  className="form-control" placeholder="Vehicle owner name" />    
                      </div>
                      <div className="form-group">    
                          <input type="text" name="vehicleNo" onChange={this.handleChange}  className="form-control" placeholder="Vehicle number" />    
                      </div>
<div>
    {/* type="date" name="date" */}
          <DatePicker type="text" name="date" onChange={this.onChange} placeholder="Select date" />
          <br />
      </div>

{/* if(this.state.date != ''){ */}

<div className="form-group">

  <List
    grid={{ gutter: 16, column: this.state.col }}
    dataSource={this.state.terminals}
    renderItem={item => (
      <List.Item>
        {/* <Card title={item.title}>Card content</Card> */}
        <Card title={item.name}>Card content
        {/* <li>>
        <option key={item.name} value={item.name}>{item.name}</option>
        <Checkbox name={item.name} onChange={onChange}>{item.name}</Checkbox>
        </li>
        <li>
        <option key={item.name} value={item.name}>{item.name}</option>
        <Checkbox name={item.name} onChange={onChange}>{item.name}</Checkbox> */}
        {/* </li>
        <li key={data.title}>{data.title}</li>
        <ul>
          {['a', 'b', 'c'].map(function(item) {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <ul>
          {this.state.terminals.map(function(item) {
            return <li key={item.name}>{item.name}
            <option value={item.name}>{item.name}</option>
        <Checkbox name={item.name} onChange={onChange}>{item.name}</Checkbox>
            </li>;
          })}
        </ul> */}
        <ul>
        {/* {fetchBookingDetails(item.name, this.state.date).map(function(child) { */}
           {data.map(function(child) {
            return <Checkbox onChange={handleChange} checked={chkd === child.time + item.name} key={item.name + child.time} name={child.time + item.name} >{child.time}</Checkbox>
            // checked={checkedd === item.name + child.time}
            // onChange={this.onChangeTick}   checked={this.state.checkedd === (item.name + child.time)}
            // <li key={item.name + child.time}>
            {/* <option value={item.title}>{item.title}</option> */}
        // <Checkbox name={child.time} checked={checkedd === item.name + child.time} onChange={onChange}>{child.time}</Checkbox>
            // </li>;
          })}
        </ul>
        </Card>
      </List.Item>
    )}

    
  />
  </div>
{/* } */}
  </div>
  // , document.getElementById('container')

  );    }
    }


export default ViewBooking;  
          

























































































// import React from 'react';
// import { Table, Button, Form } from 'antd';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//   },
// ];

// const data = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }

// class NormalViewBookingForm extends React.Component {
//   state = {
//     selectedRowKeys: [], // Check here to configure the default column
//     loading: false,
//   };

//   start = () => {
//     this.setState({ loading: true });
//     // ajax request after empty completing
//     setTimeout(() => {
//       this.setState({
//         selectedRowKeys: [],
//         loading: false,
//       });
//     }, 1000);
//   };

//   onSelectChange = selectedRowKeys => {
//     console.log('selectedRowKeys changed: ', selectedRowKeys);
//     this.setState({ selectedRowKeys });
//   };

//   render() {
//     const { loading, selectedRowKeys } = this.state;
//     const rowSelection = {
//       selectedRowKeys,
//       onChange: this.onSelectChange,
//     };
//     const hasSelected = selectedRowKeys.length > 0;
//     return (
//       <div>
//         <div style={{ marginBottom: 16 }}>
//           <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
//             Reload
//           </Button>
//           <span style={{ marginLeft: 8 }}>
//             {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
//           </span>
//         </div>
//         <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
//       </div>
//     );
//   }
// }

// // ReactDOM.render(<App />, mountNode);

// const ViewBooking = Form.create({ name: 'view_booking' })(NormalViewBookingForm);

// // ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
// export default ViewBooking;