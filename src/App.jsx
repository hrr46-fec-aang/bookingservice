import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-calendar/dist/Calendar.css';
export default React.PureComponent;
export const pureComponentAvailable = true;
import { CalendarComponent, RenderDayCellEventArgs } from '@syncfusion/ej2-react-calendars';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      toggle: true,
      date: new Date(),
      startDate: null,
      endDate: null
    }
  }

  onChange() {date => this.setState({ date })}
  
  toggle() {
    this.setState({
      toggle:false
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle}>Checkin</button>
        <div id="lol">
        <Calendar 
        onChange={this.onChange}
        value={this.state.date}
        />
        </div>
        <div>

         <Calendar 
        onChange={this.onChange}
        value={this.state.date}
        />
        </div>
        <div>
        <CalendarComponent id="calendar" />
        </div>
        <div>

        <DateRangePicker
  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
/>
  </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));