import React, { createContext, useState } from "react";

interface IProvider {
  children: React.ReactNode;
}

type IRegistrationType = {
  gender: string;
  name: string;
  height: string;
  weight: string;
  goal: string;
};

interface IRegistrationContext {
  user: {
    gender: string;
    name: string;
    height: string;
    weight: string;
    goal: string;
  };
  setUser: React.Dispatch<React.SetStateAction<IRegistrationType>>;
}

export const RegistrationContext = createContext<IRegistrationContext>({
  user: { gender: "", name: "", height: "", weight: "", goal: "" },
  setUser: () => {},
});

export const RegistrationContextProvider = (props: IProvider) => {
  const { children } = props;
  const [user, setUser] = useState<IRegistrationType>({
    gender: "",
    name: "",
    height: "",
    weight: "",
    goal: "",
  });

  const value = { user, setUser };
  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
};
