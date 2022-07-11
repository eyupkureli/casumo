import React from "react";
import styled from "styled-components";

const Background = styled.div`
width: 100%;
height: 100%
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`;

const AddCardContainer = styled.div`
  width: 400px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #000;
  background: #fff;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const Header = styled.div`
  color: 1A212C;
  min-width: 100px;
  padding: 16px 32px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  min-width: 80%;
  padding: 16px 32px;
  margin: auto;
  border-radius: 100px;
  border: none;
  background: #4c00c2;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddCard = ({ showAddCard, setShowAddCard }) => {
  return (
    <>
      {showAddCard ? (
        <Background>
          <AddCardContainer showAddCard={showAddCard}>
            <Header>Add you card details</Header>
     

            <Button>Confirm</Button>
          </AddCardContainer>
        </Background>
      ) : null}
    </>
  );
};

export default AddCard;
