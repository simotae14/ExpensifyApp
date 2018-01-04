import React from 'react';

export default class ExpenseForm extends React.Component {
  // setto lo State iniziale
  state = {
    descrizione: '',
    note: '',
    importo: ''
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