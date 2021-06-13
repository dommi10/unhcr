import react, { createContext, useReducer } from 'react';
import { CHOOSE_MENU, OPEN_OR_CLOSE_MENU } from '../actions';

export const Context = createContext();

const initialState = {
  isMenuOpen: false,
  activeMenu: 'home',
};

function reducer(state, action) {
  switch (action.type) {
    case OPEN_OR_CLOSE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case CHOOSE_MENU:
      return { ...state, activeMenu: action.menu };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
