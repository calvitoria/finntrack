export const ADD_EMAIL = 'ADD_EMAIL';
export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const ADD_NAME = 'ADD_NAME';
export const addName = (name) => ({
  type: ADD_NAME,
  payload: name,
});

export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: currencies,
});

export const fetchCurrenciesThunk = () => async (dispatch) => {
  const apiData = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await apiData.json();
  const currencies = [...Object.keys(response)];
  currencies.splice(1, 1);
  dispatch(addCurrencies(currencies));
};

export const ADD_EXCHANGE_RATE = 'ADD_EXCHANGE_RATE';
export const addExchangeRate = (rates) => ({
  type: ADD_EXCHANGE_RATE,
  payload: rates,
});

export const fetchExchangeRatesTunk = (obj) => async (dispatch) => {
  const apiData = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await apiData.json();
  const exchangeRates = { ...obj, exchangeRates: response };
  dispatch(addExchangeRate(exchangeRates));
  return exchangeRates;
};

// ao clicar no botão de delete: dispara uma action que  'refaz' o array expenses
export const DELETE_ITEM_EXPENSE = 'DELETE_ITEM_EXPENSE';
export const deleteExpense = (newExpenses) => ({
  type: DELETE_ITEM_EXPENSE,
  payload: newExpenses,
});

export const deleteExpenseThunk = (expenses, id) => (dispatch) => {
  const newExpenses = expenses.filter((expense) => expense.id !== id);
  dispatch(deleteExpense(newExpenses)); // manda o novo array
  return newExpenses;
};
