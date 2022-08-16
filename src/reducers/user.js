import { ADD_EMAIL, ADD_NAME } from '../actions';
// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
  nome: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL:
    return { ...state,
      email: action.payload,
    };
  case ADD_NAME:
    return { ...state,
      name: action.payload,
    };
  default:
    return state;
  }
};

export default user;
