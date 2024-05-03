import React, { createContext, useState } from "react";
import { Seat } from "../utils/interface";

interface MyContextType {
  seatData: Seat[];
  setSeatData: React.Dispatch<React.SetStateAction<Seat[]>>;
}

// Create your context
export const MyContext = createContext<MyContextType | undefined>(undefined);

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [seatData, setSeatData] = useState<Seat[]>([]);

  return (
    <MyContext.Provider value={{ seatData, setSeatData }}>
      {children}
    </MyContext.Provider>
  );
};

export default GlobalProvider;
