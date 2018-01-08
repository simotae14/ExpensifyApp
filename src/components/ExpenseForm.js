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
    calendarioFocused: false,
    errore: ''
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
    if(!importo || importo.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        importo
      }));  
    }
  };
  // funzione che gestisce il cambio data
  onDateChange = (creataAlle) => {
    if(creataAlle) {
      this.setState(() => ({
        creataAlle
      }));
    }
  };
  // se lo stato del DatePicker cambia
  onFocusChange = ( {focused} ) => {
    this.setState(() => ({
      calendarioFocused: focused
    }));
  };
  // handler al Submit
  onSubmit = (e) => {
    // evito di farlo refreshare
    e.preventDefault();
    
    if(!this.state.descrizione || !this.state.importo) {
      // settare lo stato errore uguale a "Per favore, inserire Descrizione e Importo."
      this.setState(() => ({
        errore: "Per favore, inserire Descrizione e Importo."
      }));
    } else {
      this.setState(() => ({
        errore: ""
      }));
      // invoco il metodo padre per salvare i contenuti
      this.props.onSubmit({
        descrizione: this.state.descrizione,
        importo: parseFloat(this.state.importo, 10) * 100,
        creataAlle: this.state.creataAlle.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.errore && <p>{this.state.errore}</p>}
        <form onSubmit={this.onSubmit}>
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