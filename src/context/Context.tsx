import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

// Define o tipo
interface ContextData {
  company: boolean;
  handleSetCompany: (type: boolean) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

// Cria a context
const myContext = createContext<ContextData>({} as ContextData);

// Cria ContextProvider
function ContextProvider({ children }: ContextProviderProps) {
  /* ----------- armazena tipo da tabela planos da home -----------*/
  const [company, setCompany] = useState(() => {
    const storedValue = localStorage.getItem('company');
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem('company', JSON.stringify(company));
  }, [company]);

  function handleSetCompany(type: boolean) {
    setCompany(type);
  }

  return (
    <myContext.Provider value={{ company, handleSetCompany }}>
      {children}
    </myContext.Provider>
  );
}

function useMyContext(): ContextData {
  const context = useContext(myContext);
  return context;
}

export { ContextProvider, useMyContext };
