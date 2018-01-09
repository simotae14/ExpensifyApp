const add = (a, b) => a + b;
const creaSaluto = (nome = 'Anonimo') => `Ciao ${nome}!`;

// creo il primo test
test('dovrebbe sommare due numeri', () => {
  const risultato = add(3, 4);

  // prima assertion
  expect(risultato).toBe(7);
});

// creo il test sul saluto
test('dovrebbe creare una stringa di saluto', () => {
  const saluto = creaSaluto('Simone');

  expect(saluto).toBe('Ciao Simone!');
});

test('dovrebbe creare una stringa di saluto per anonimo', () => {
  const saluto = creaSaluto();

  expect(saluto).toBe('Ciao Anonimo!');
});