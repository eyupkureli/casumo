import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const CardContext = createContext();

const CardContextProvider = (props) => {

   const [cards, setCards] = useState([
      { id: uuidv4(), name: "John Smith", number: '1584 1587 1287 5208', expiry: "03/03", cvc: "585" },
      { id: uuidv4(), name: "Jack Smith", number: '9851 9847 9802 7874', expiry: "05/05", cvc: "810" },
    ]);

    const addCard = (name, number, expiry, cvc) => {
      setCards([...cards, {id:uuidv4(), name, number, expiry, cvc}])

    }
  
   return(
      <CardContext.Provider value = {{cards, addCard}}>
         {props.children}
      </CardContext.Provider>
   )
}

export default CardContextProvider;