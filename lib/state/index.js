import react, { createContext, useReducer } from 'react';
import { OPEN_OR_CLOSE_MENU } from '../actions';

export const Context = createContext();

const initialState = {
  isMenuOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case OPEN_OR_CLOSE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
