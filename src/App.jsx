import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";
export default React.PureComponent;
export const pureComponentAvailable = true;
import { CalendarComponent, RenderDayCellEventArgs } from '@syncfusion/ej2-react-calendars';
import './App.css';
import axios from 'axios';
import Button from './App.style';

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      checkInToggle: false,
      checkOutToggle: false,
      date: new Date(),
      startDate: new Date(),
      endDate: null,
      data: ''

    }
  }
  componentDidMount() {
    var id = window.location.pathname;
    if (id === '/') {
      console.log('hi');
    } else {
      axios.get(`http://localhost:3030/booking${id}`)
      .then(data =>{
        this.setState({
          data: data.data[0]
        })
        console.log(this.state.data)
      })
    }
  }

  onChange() {date => this.setState({ date })}
  
  checkInToggle() {
    if (this.state.checkOutToggle === true) {
      this.setState({
        checkOutToggle:!this.state.checkOutToggle
      })
    }
    this.setState({
      checkInToggle:!this.state.checkInToggle
    })
  }
  checkOutToggle() {
    if (this.state.checkInToggle === true) {
      this.setState({
        checkInToggle:!this.state.checkInToggle
      })
    }
    this.setState({
      checkOutToggle:!this.state.checkOutToggle
    })
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  };

  
  render() {
    return (
      <div className='booking'>
        <div>
        <h4>${this.state.data.price} per night</h4>
        </div>
        <div class="grid-container">
        <div><button onClick={() => this.checkInToggle()}>Checkin</button>
        <p>
        {this.state.checkInToggle ? <DatePicker selected={this.state.startDate} onChange={this.handleChange.bind(this)}/> : null}
        </p></div>
        {/* <CalendarComponent id="calendar" /> */}
        <div><button onClick={() => this.checkOutToggle()}>Checkout</button>
        <p>{this.state.checkOutToggle ? <DatePicker selected={this.state.startDate} onChange={this.handleChange.bind(this)}/>  : null}
        </p></div>
        <div>
        <button>Guests</button><input id="guest" type="number" min="1" max="5" step="1" placeholder="1"></input>
        </div>
        </div>
        <p><Button>Book</Button></p>
        
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));