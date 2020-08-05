import * as constants from './constants';
import * as actions from './balance';

it('creates an action to set the balance', () => {
  const balance = 0;

  const expectedAction = { type: constants.SET_BALANCE, balance };

  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit into the balance', () => {
  const deposit = 10;

  const expectedAction ={ type: constants.DEPOSIT, deposit };

  expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('creates an action to withdraw from the deposit', () => {
  const withdrawal = 10;

  const expectedAction ={ type: constants.WITHDRAW, withdrawal };

  expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
});

it('withdraws from the balance', () => {
  const withdrawal = 10;
  const initial State = 20;

  expect(balanceReducer(initialState, { type: constants.WITHDRAW,})).toEqual(initialState - withdrawal)
})

