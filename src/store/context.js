import { createContext, useReducer, useContext } from 'react';
import { reducer, initialState } from './reducer';

export const dataContext = createContext({ state: initialState, dispatch: () => null });

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <dataContext.Provider children={children} value={{ state, dispatch }} />;
}

export function useStore() {
  const context = useContext(dataContext)
  if (context === undefined) {
    throw new Error('useStore must be used within a Provider')
  }
  return context
}