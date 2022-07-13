import React, { useState } from "react";
import AddCard from "./AddCard";
import EditCard from "./EditCard";
import styled from "styled-components";
import { VscEdit } from "react-icons/vsc";

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

const Card = styled.div`
  height: 140px;
  width: 200px;
  padding: 16px 32px;
  margin: 4px;
  border-radius: 4px;
  background: #4c00c2;
  color: white;
  font-size: 16px;
`;

const Edit = styled.div`
  cursor: pointer;
  float: right;
`;

const YourCards = () => {
  const [showAddCard, setShowAddCard] = useState(false);
  const [showEditCard, setShowEditCard] = useState(false);

  const cards = [
    {
      id: "1",
      name: "Eyup Kureli",
      number: "1234 5698 4525 2545",
      expiry: "03/03",
      cvc: "528",
    },
    {
      id: "2",
      name: "John Smith",
      number: "1248 5688 4125 2745",
      expiry: "03/02",
      cvc: "828",
    },
  ];
  const renderCard = () =>
    cards.map((card) => (
      <Card>
        <div>
          <h6>
            {card.cvc}
            <span>{card.expiry}</span>
          </h6>
          <h5>{card.name}</h5>
          <h6>
            {card.number}{" "}
            <Edit onClick={openEditCard}>
              <VscEdit />
            </Edit>
          </h6>
        </div>
      </Card>
    ));

  const openAddCard = () => {
    setShowAddCard((prev) => !prev);
  };

  const openEditCard = () => {
    setShowEditCard((prev) => !prev);
  };
  return (
    <>
      <Container>
        {cards.length ? renderCard() : <p>There is no cards.</p>}
        <Button onClick={openAddCard}>Add a new card</Button>
        <AddCard showAddCard={showAddCard} setShowAddCard={setShowAddCard} />
        <EditCard
          showEditCard={showEditCard}
          setShowEditCard={setShowEditCard}
        />
      </Container>
    </>
  );
};

export default YourCards;
