import React, { useState, useContext } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { CardContext } from "../context/CardContext";




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
  height: 800px;
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
  font-size: 24px;
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
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseAddCard = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const FormGroup = styled.div`
  color: palevioletred;
  display: block;
  width: 300px;
  margin: 50px auto;
`;

const Label = styled.label`
  margin-bottom: 0.5em;
  color: #1a212c;
  display: block;
`;

const Input = styled.input`
  padding: 0.5em;
  border-style: outset
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

const Message = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`;

const AddCard = ({ showAddCard, setShowAddCard }) => {
 
const { addCard } = useContext(CardContext);

const [newCard, setNewCard] = useState({
  name: " ", number: " ", expiry: " ", cvc:" " 
});

const onInputChange = (e) => {
  setNewCard({...newCard, [e.target.name]: e.target.value})

}

const {name, number, expiry, cvc} = newCard;


const handleSubmit = (e) => {
  e.preventDefault();
  addCard(name, number, expiry, cvc);
  setShowAddCard((prev) => !prev);
}

  return (
    <>
      {showAddCard ? (
        <Background>
          <AddCardContainer showAddCard={showAddCard}>
            <CloseAddCard
              aria-label="Close Add Card"
              onClick={() => setShowAddCard((prev) => !prev)}
            />
            <Header>Add you card details</Header>

            <FormGroup onSubmit={handleSubmit}>
              <Label htmlFor="label">Name in card</Label>
              <Input
                type="text"
                name="name"
                value = {name}
                onChange = {(e) => onInputChange(e)}
             
              />
              <Message>Please fill in your name</Message>

              <Label>Card number</Label>
              <Input
                type="text"
                name="number"
                value = {number}
                onChange = {(e) => onInputChange(e)}
             
              />
              <Message>Please enter a valid credit card number</Message>

              <Label htmlFor="label">Expiry date</Label>
              <Input
                type="text"
                name="expiry"
                value = {expiry}
                onChange = {(e) => onInputChange(e)}
             
              />
              <Message>Please enter a valid expiry date</Message>

              <Label htmlFor="label">CVC (Security Code)</Label>
              <Input
                type="text"
                name="cvc"
                value = {cvc}
                onChange = {(e) => onInputChange(e)}
             
              />
              <Message>Please enter a valid security code</Message>
            </FormGroup>
            <Button onClick={handleSubmit}>Confirm</Button>
          </AddCardContainer>
        </Background>
      ) : null}
    </>
  );
};

export default AddCard;
