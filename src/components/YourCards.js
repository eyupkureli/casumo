import React, {useContext, useState } from "react";
import Card from "./Card";
import AddCard from "./AddCard";
import { CardContext } from "../context/CardContext";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 100px;
  border: none;
  background: #4c00c2;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const YourCards = () => {
  const [showAddCard, setShowAddCard] = useState(false);

  const {cards} = useContext(CardContext);

  const openAddCard = () => {
    setShowAddCard((prev) => !prev);
  };
  return (
    <>
      <Container>
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}

        <Button Button onClick={openAddCard}>Add a new card</Button>
        <AddCard showAddCard={showAddCard} setShowAddCard={setShowAddCard} />
      </Container>
    </>
  );
};

export default YourCards;
