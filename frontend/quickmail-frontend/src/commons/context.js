import React, { createContext, useState } from 'react';

const DrawerContext = createContext({ open: false, setOpen: () => {} });

export const DrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

export { DrawerContext };

export default DrawerProvider;