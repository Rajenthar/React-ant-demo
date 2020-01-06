import React, {ReactDOM} from 'react';
import { Button } from 'antd';
import { Helmet } from 'react-helmet';
import BookingForm from '../BookingForm';
import ViewBooking from '../viewBooking/viewBooking';
import Sign from '../signin/sign'
import Terminal from '../terminal/terminal';
import DeactivateTerminal from '../terminal/deactivateTerminal';


// ReactDOM.render(
  
//   document.getElementById('example')
//   );
const TITLE = 'HomePage'


class HomePage extends React.Component {
    // state = {
    //   selectedRowKeys: [], // Check here to configure the default column
    //   loading: false,
    // };

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', isAuthenticated: false, open: false, navigate:''};

    }
  
    // start = () => {
    //   this.setState({ loading: true });
    //   // ajax request after empty completing
    //   setTimeout(() => {
    //     this.setState({
    //       selectedRowKeys: [],
    //       loading: false,
    //     });
    //   }, 1000);
    // };
  
    // onSelectChange = selectedRowKeys => {
    //   console.log('selectedRowKeys changed: ', selectedRowKeys);
    //   this.setState({ selectedRowKeys });
    // };

    handleClick = (event) => {    
        let clickedd = event.target.name;
        // let ck = event.clicked.name;
        console.log(clickedd);
        // console.log(ck);
        console.log("THE ABOVE IS CLICKED")        
        if(clickedd === 'booking'){
            console.log('inside function')
            console.log(this.state.navigate);
            this.setState({navigate: clickedd})
            console.log(this.state.navigate);
            this.render(<BookingForm />)
        } else if(clickedd === 'create-user'){
            console.log('inside function')
            console.log(this.state.navigate);
            this.setState({navigate: clickedd})
            console.log(this.state.navigate);
            return (<Sign />)
        } else if(clickedd === 'view-booking'){
            console.log('inside function')
            console.log(this.state.navigate);
            this.setState({navigate: clickedd})
            console.log(this.state.navigate);
            return (<ViewBooking />)
        } else if(clickedd === 'create-terminal'){
          console.log('inside function')
          console.log(this.state.navigate);
          this.setState({navigate: clickedd})
          console.log(this.state.navigate);
          return (<Terminal />)
      } else if(clickedd === 'deactivate-terminal'){
        console.log('inside function')
        console.log(this.state.navigate);
        this.setState({navigate: clickedd})
        console.log(this.state.navigate);
        return (<DeactivateTerminal />)
    }
    } 
  
    render() {
    //   const { loading, selectedRowKeys } = this.state;
    //   const rowSelection = {
    //     selectedRowKeys,
    //     onChange: this.onSelectChange,
    //   };
    //   const hasSelected = selectedRowKeys.length > 0;
 
 
    if (this.state.navigate === 'booking') {    
        return (<BookingForm />)    
    } else if (this.state.navigate === 'create-user') {    
        return (<Sign />)    
    } else if (this.state.navigate === 'view-booking') {    
        return (<ViewBooking />)    
    } else if (this.state.navigate === 'create-terminal'){
      return (<Terminal />)    
    } else if (this.state.navigate === 'deactivate-terminal'){
      return (<DeactivateTerminal />)    
    }
    else {
    return (

        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>,
        <div>
        <Button onClick={this.handleClick} name='booking' type="primary" block>
          BOOKING
        </Button>
        <Button block>Default</Button>
        <Button onClick={this.handleClick} name='create-user' type="dashed" block>
          CREATE USER
        </Button>
        <Button onClick={this.handleClick} name='create-terminal' type="dashed" block>
          CREATE Terminal
        </Button>
        <Button onClick={this.handleClick} name='deactivate-terminal' type="dashed" block>
          DEACTIVATE Terminal
        </Button>
        <Button onClick={this.handleClick} name='view-booking' type="danger" block>
          VIEW BOOKING
        </Button>
        <Button type="link" block>
          Link
        </Button>
      </div>
      );
    }
    }
  }

  export default HomePage;