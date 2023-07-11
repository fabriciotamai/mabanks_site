import { ReactNode } from 'react';

import { ContextProvider } from './Context';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return <ContextProvider>{children}</ContextProvider>;
}

export { AppProvider };
