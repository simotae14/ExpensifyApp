const persona = {
  nome: 'Simone',
  eta: 27,
  luogo: {
    citta: 'Philadelphia',
    temp: 88
  }
};

const { nome: nomeProprio = 'Anonimo', eta } = persona;

console.log(`${nomeProprio} ha ${eta} anni.`);

const { citta, temp: temperature } = persona.luogo;

if(citta && temperature) {
  console.log(`Ci sono ${temperature} gradi in ${citta}.`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher


console.log(publisherName); // Penguin , Self-Published