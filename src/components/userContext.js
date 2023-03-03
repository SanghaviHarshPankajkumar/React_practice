import { createContext } from 'react';


const MyContext = createContext();
const UserProvider = MyContext.Provider;
const UserConsumer = MyContext.Consumer;

export {UserConsumer,UserProvider};