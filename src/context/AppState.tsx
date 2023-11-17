import React, { FC, ReactNode, createContext, useMemo, useState } from "react";

export interface IAppStateProvider {
  children: ReactNode;
}

export interface blockStartPointType {
  firstBlock: number;
  aboutBlock: number;
  videoBlock: number;
  contactsBlock: number;
}
export type VariansOfBlocks = keyof blockStartPointType;

export type AppStateContextType = {
  blockStartPoint?: blockStartPointType;
  setBlockStartPoint?: React.Dispatch<
    React.SetStateAction<blockStartPointType>
  >;
  menuIsActive?: boolean;
  setMenuIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppStateContext = createContext<AppStateContextType>({});

export const AppStateProvider: FC<IAppStateProvider> = ({ children }) => {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);

  const [blockStartPoint, setBlockStartPoint] = useState({
    firstBlock: 0,
    aboutBlock: 0,
    videoBlock: 0,
    contactsBlock: 0,
  });

  const value = useMemo(
    () => ({
      blockStartPoint,
      setBlockStartPoint,
      menuIsActive,
      setMenuIsActive,
    }),
    [blockStartPoint, setBlockStartPoint, menuIsActive, setMenuIsActive]
  );

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};
