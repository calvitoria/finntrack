// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EMAIL, ADD_CURRENCIES,
  ADD_EXCHANGE_RATE, DELETE_ITEM_EXPENSE } from '../actions';
// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL:
    return { ...state };
  // case ADD_NAME:
  //   return { ...state };
  case ADD_CURRENCIES:
    return { ...state,
      currencies: action.payload,
    };
  case ADD_EXCHANGE_RATE:
    return { ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELETE_ITEM_EXPENSE:
    return { ...state,
      expenses: action.payload, // novo array - filtrado sem o array removido
    };
  default:
    return state;
  }
};

export default wallet;
