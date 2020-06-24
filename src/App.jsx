import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
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
      data: '',
      subtotal: 0

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
      <div className="booking">
        <div>
        <h3>${this.state.data.price}</h3>
        <div className="pernight">per night</div>
        </div>
        <div className="grid-container">
        <div className="checkin"onClick={() => this.checkOutToggle()}>Check in
        <DatePicker selected={this.state.startDate} onChange={this.handleChange.bind(this)} dateFormat="yyyy MMMM dd"/>
       </div>
        {/* <CalendarComponent id="calendar" /> */}
        <div className="checkout"onClick={() => this.checkOutToggle()}>Check out
        <DatePicker selected={this.state.startDate} onChange={this.handleChange.bind(this)} dateFormat="yyyy MMMM dd"/>
        </div>
        <div className="guest">
        Guests<input id="guest" type="number" min="1" max="5" step="1" placeholder="1"></input>
        </div>
        </div>
        <div className="subtotal">Subtotal: ${this.state.data.subtotal}</div>
        <div className="book">
        <p><Button>Book</Button></p>
        </div>
        
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));