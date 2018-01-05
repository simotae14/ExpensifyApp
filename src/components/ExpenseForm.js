import React from 'react';
import moment from 'moment';
// importo il Date-Picker
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// creo una nuova data
const adesso = moment();
console.log(adesso.format('MMM Do, YYYY '));

export default class ExpenseForm extends React.Component {
  // setto lo State iniziale
  state = {
    descrizione: '',
    note: '',
    importo: '',
    creataAlle: moment(),
    calendarioFocused: false
  };
  // funzione che modifica la descrizione
  onDescriptionChange = (e) => {
    const descrizione = e.target.value;
    this.setState(() => ({
      descrizione
    }));
  };
  // funzione che modifica le note
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  };
  // funzione che modifica la funzione
  onAmountChange = (e) => {
    const importo = e.target.value;
    if(importo.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({
        importo
      }));  
    }
  };
  // funzione che gestisce il cambio data
  onDateChange = (creataAlle) => {
    this.setState(() => ({
      creataAlle
    }));
  };
  // se lo stato del DatePicker cambia
  onFocusChange = ( {focused} ) => {
    this.setState(() => ({
      calendarioFocused: focused
    }));
  };
  render() {
    return (
      <div>
        <form>
          <input 
            type="text" 
            placeholder="Descrizione"
            autoFocus
            value={this.state.descrizione}
            onChange={this.onDescriptionChange}
          />
          <input
            type="number"
            placeholder="Importo"
            value={this.state.importo}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker 
            date={this.state.creataAlle}
            onDateChange={this.onDateChange}
            focused={this.state.calendarioFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Aggiungi una nota della tua spesa (opzionale)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Aggiungi Spesa</button>
        </form>
      </div>
    )
  }
}