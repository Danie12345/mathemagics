import calculate from '../components/calculator/logic/calculate.js';

test('that it sum two numbers', () => {
  let state = {total: '1', operation: '+', next: '1'};
  expect(calculate(state, '=').total).toEqual('2');
});

test('that it subtracts numbers', () => {
  let state = {total: '3', operation: '-', next: '5'};
  expect(calculate(state, '=').total).toEqual('-2');
});

test('that it multiplies two numbers', () => {
  let state = {total: '5', operation: '\u00d7', next: '6'};
  expect(calculate(state, '=').total).toEqual('30');
});

test('that it divides two numbers', () => {
  let state = {total: '14', operation: '÷', next: '7'};
  expect(calculate(state, '=').total).toEqual('2');
});

test('that decimals work', () => {
  let state = {total: '3.3'};
  expect(calculate(state, '').total).toEqual('3.3');
});

test('that modulo works', () => {
  let state = {total: '14', operation: '%', next: '7'};
  expect(calculate(state, '=').total).toEqual('0');
});

test('that negation works', () => {
  let state = {total: '14'};
  expect(calculate(state, '+/-').total).toEqual('-14');
});

test('that AC cleans the state', () => {
  let state = {total: '14', operation: '÷', next: '7'};
  expect(calculate(state, 'AC')).toEqual({total: null, operation: null, next: null});
});