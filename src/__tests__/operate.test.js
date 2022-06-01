import operate from '../components/calculator/logic/operate';

test('that it sum two numbers', () => {
  const state = { total: 1, operation: '+', next: 1 };
  expect(operate(state.total, state.next, state.operation)).toEqual('2');
});

test('that it subtracts numbers', () => {
  const state = { total: '3', operation: '-', next: '5' };
  expect(operate(state.total, state.next, state.operation)).toEqual('-2');
});

test('that it multiplies two numbers', () => {
  const state = { total: '5', operation: '\u00d7', next: '6' };
  expect(operate(state.total, state.next, state.operation)).toEqual('30');
});

test('that it divides two numbers', () => {
  const state = { total: '14', operation: '÷', next: '7' };
  expect(operate(state.total, state.next, state.operation)).toEqual('2');
});

test('that modulo works', () => {
  const state = { total: '14', operation: '%', next: '7' };
  expect(operate(state.total, state.next, state.operation)).toEqual('0');
});
