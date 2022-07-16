import React from "react";
import styled from "styled-components";
import { VscEdit } from "react-icons/vsc";

const CardInfo = styled.div`
  height: 200px;
  width: 300px;
  padding: 16px 32px;
  margin: 10px;
  border-radius: 10px;
  background: #4c00c2;
  color: white;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Edit = styled.div`
  cursor: pointer;
  float: right;
`;

const Card = ({ card }) => {
  return (
    <CardInfo>
      <div>
        <h5>
          {card.expiry} <span>{card.cvc}</span>
        </h5>
        <h5>{card.name}</h5>
        <h6>
          {card.number}{" "}
          <span>
            <Edit>
              <VscEdit />
            </Edit>
          </span>{" "}
        </h6>
      </div>
    </CardInfo>
  );
};

export default Card;
