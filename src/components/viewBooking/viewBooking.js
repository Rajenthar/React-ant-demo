
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './../../index.css';
import TableRow from "./TableRow.js";

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
  event.target.checked = true

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
      this.state = {name: '', vehicleNo: '', bookedSlots: [], isAuthenticated: false, open: false, col: 0, terminals: [],  checkedd: '', date: '', data: [], time: '', terminal_no: ''};
      // this.onChangeTick = this.onChangeTick.bind(this);

      // this.render = this.render.bind(this);
      // this.handleInputChange = this.handleInputChange.bind(this);
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
  if (this.state.date != null && this.state.date != "") {
    console.log("inside if condition");
    document.getElementById("timeSlot").style.visibility = 'hidden';
    // return <UserGreeting />;
  }else {
    console.log("inside else condition");
    document.getElementById("timeSlot").style.visibility = 'visible';

    const jwtToken = sessionStorage.getItem("jwt");

    fetch("http://localhost:1111/" + 'getBookedSlots', {    
      method: 'POST',    
      // body: JSON.stringify(book),
      body: JSON.stringify({
        // name: this.state.name,
        name: document.getElementById("name").value,
        // numberPlate: this.state.numberPlate,
        numberPlate: document.getElementById("vehicleNo").value,
        localDate: this.state.date,
        localTime: details[1],
        terminalNo: details[0]
    }),
      headers: new Headers({    
          "Authorization": jwtToken,    
          "Content-Type": "application/json"    
})    
  }).then(res => console.log(res))    
      .catch(err => console.error(err));  
  }


// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );
  console.log("Checking for timeslot variation");    
}

handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}

handleChecked = (event) =>{
  this.setState({isChecked: !this.state.isChecked});
  console.log("check functionality is working")
  console.log(event.target.name)
  console.log("check functionality is working correctly")
  console.log(event.target.test)
  if (this.state.checkedd != null && this.state.checkedd != "" && this.state.checkedd == event.target.name){
    document.getElementById(event.target.name).checked = false;
    this.setState({checkedd: ""})
    return
  } else if(this.state.checkedd != null && this.state.checkedd != ""){
    document.getElementById(this.state.checkedd).checked = false;
  }
  this.setState({checkedd: event.target.name});

  document.getElementById(event.target.name).checked = true;
  // document.getElementById(event.target.name).style.visibility = "hidden";
  // document.getElementById(event.target.name).
  
}

onChanger = (event) => {
  console.log('checked = ', event.target.checked);
  this.setState({
    checked: event.target.checked,
  });
};

book = () => {  
  if(this.state.checkedd != null && this.state.checkedd != ""){
    var details = this.state.checkedd.split("space");
    this.setState({time: "details[1]".value});
    this.setState({terminal_no: "details[0]".value});
    console.log("Split variable are")
    console.log(details[0])
    console.log(details[1])
    console.log(this.state.time)
    console.log(this.state.terminal_no)
    this.setState({time: details[1]}, function () {
      console.log(this.state.time);
  });
  this.setState({terminal_no: details[0]}, function () {
    console.log(this.state.terminal_no);
});
    console.log("Split checked")
    // document.getElementById(this.state.checkedd).checked = false;
  }  
  const book = {name: this.state.name, numberPlate: this.state.vehicleNo, localDate: this.state.date, localTime: this.state.time, terminal_no: this.state.terminal_no};    

  console.log("verify that the local variables have been properly passed");
  console.log(this.state.name);
  console.log(this.state.numberPlate);
  console.log(this.state.date);
  console.log(this.state.time);
  console.log(this.state.terminal_no);
  console.log("verify that the local variables have been properly passed done done done");
  const jwtToken = sessionStorage.getItem("jwt");

  var details = this.state.checkedd.split("space");


  fetch("http://localhost:1111/" + 'bookTime', {    
            method: 'POST',    
            // body: JSON.stringify(book),
            body: JSON.stringify({
              // name: this.state.name,
              name: document.getElementById("name").value,
              // numberPlate: this.state.numberPlate,
              numberPlate: document.getElementById("vehicleNo").value,
              localDate: this.state.date,
              localTime: details[1],
              terminalNo: details[0]
          }),
            headers: new Headers({    
                "Authorization": jwtToken,    
                "Content-Type": "application/json"    
})    
        }).then(res => console.log(res))    
            .catch(err => console.error(err));    
    } 

changeHandler = id => {
  // this.setState({
  //   selectedId: id
  // });
};

render(){
  // function handleChecked () {
  //   this.setState({isChecked: !this.state.isChecked});
  //   console.log("check functionality is working")
  // };
  const { checkedd } = this.state;
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
  // function onChangeTick = this.onChangeTick;
  // this.setState({checked: ''})

  
return (
  <div>
    <div className="form-group">    
                          <input type="text" id="name" name="name" onChange={this.handleChange}  className="form-control" placeholder="Vehicle owner name" />    
                      </div>
                      <div className="form-group">    
                          <input type="text" id="vehicleNo" name="vehicleNo" onChange={this.handleChange}  className="form-control" placeholder="Vehicle number" />    
                      </div>
<div>
    {/* type="date" name="date" */}
    <ul>{this.state.listItems}</ul>,
          <DatePicker type="text" name="date" onChange={this.onChange} placeholder="Select date" />
          <br />
      </div>

{/* if(this.state.date != ''){ */}
{/* if (this.state.date != null && this.state.date != "") {
    document.getElementById("timeSlot").props.h
    return <UserGreeting />;
  } */}

<div id="timeSlot" visibility="hidden" className="form-group">

  <List
    grid={{ gutter: 16, column: this.state.col }}
    dataSource={this.state.terminals}
    renderItem={item => (
      <List.Item onClick={this.handleChecked} type="checkbox">
        {/* <Card title={item.title}>Card content</Card> */}
        <Card title={item.name}>Card content
        {/* <li key={data.title}>{data.title}</li> */}
        {/* <ul>
          {['a', 'b', 'c'].map(function(item) {
            return <li key={item}>{item}</li>;
          })}
        </ul> */}
        <ul>
          {data.map(function(item1) {
            return <li key={item1.name + item1.time}>{item.name}
            <option value={item1.title}>{item1.time}</option>
        <input type="checkbox" name={item.name +"space"+ item1.time} id={item.name +"space"+ item1.time} test={"testing purpose"}/>
        {/* <Checkbox name={item.name + item1.time} id={item.name + item1.time + 1} checked={checkedd === item1.time + item1.name}/> */}
        {/* {item1.time}</input> */}
        {/* onClick={this.handleChecked} */}
            </li>;
          })}
        </ul>
        {/* {data.map(rowData => (
            <TableRow
              key={rowData.id}
              selectedId={this.state.checkedd}
              rowData={rowData}
              onSelect={this.changeHandler}
            />
          ))} */}
        </Card>
      </List.Item>
    )}

    
  />
  </div>
{/* } */}
   <div>    
   <input type="submit" name="submit" onClick={this.book}  className="btn btn-info btn-md" value="Book"/>    
 </div>
  </div>
 
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