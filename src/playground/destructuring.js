// ES6 Object Destructuring

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

// ES6 Array Destructuring
const indirizzo = [
  '1299 S Juniper Street',
  'Philadelphia',
  'Pennsylvania',
  '19147'
];

const [, cittaInd, stato] = indirizzo;

console.log(`Tu sei in ${cittaInd} ${stato}.`);

const item = [
  'Coffee (iced)',
  '$3.00',
  '$3.50',
  '$3.75'
];

const [ product, , price ] = item;
console.log(`A medium ${product} costs ${price}`);