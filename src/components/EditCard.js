import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Background = styled.div`
width: 100%;
height: 100%
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`;

const EditCardContainer = styled.div`
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

const CloseEditCard = styled(MdClose)`
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

const EditCard = ({ showEditCard, setShowEditCard }) => {
  return (
    <>
      {showEditCard ? (
        <Background>
          <EditCardContainer showEditCard={showEditCard}>
            <CloseEditCard
              aria-label="Close Edit Card"
              onClick={() => setShowEditCard((prev) => !prev)}
            />
            <Header>Edit you card</Header>
            <FormGroup>
              <Label htmlFor="label">Name in card</Label>
              <Input id="label" />
            </FormGroup>
            <FormGroup>
              <Label>Card number</Label>
              <Input />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="label">Expiry date</Label>
              <Input id="label" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="label">CVC (Security Code)</Label>
              <Input id="label" />
            </FormGroup>
            <Button>Confirm</Button>
          </EditCardContainer>
        </Background>
      ) : null}
    </>
  );
};

export default EditCard;
