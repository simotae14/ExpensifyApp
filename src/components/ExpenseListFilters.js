import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTestoFiltro, ordinatoPerData, ordinatoPerImporto, setDataInizio, setDataFine } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setDataInizio(startDate));
    this.props.dispatch(setDataFine(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.props.filtri.testo} 
          onChange={(e) => {
            this.props.dispatch(setTestoFiltro(e.target.value));
          }}
        />
        <select
          value={this.props.filtri.ordinatoPer}
          onChange={(e) => {
            if (e.target.value === 'data') {
              this.props.dispatch(ordinatoPerData());
            } else if (e.target.value === 'importo') {
              this.props.dispatch(ordinatoPerImporto());
            }
          }}
        >
          <option value="data">Data</option>
          <option value="importo">Importo</option>
        </select>
        <DateRangePicker
          startDate={this.props.filtri.dataInizio}
          endDate={this.props.filtri.dataFine}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => { false }}
        />
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    filtri: state.filtri
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);