import React from "react";
import styled from "styled-components";

const Header = styled.div`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 100px;
  border: none;
  color: #4c00c2;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  min-width: 100px;
  color: #798291;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Navbar() {
  return (
    <>
      <Header>Your cards</Header>
      <Info>Add, edit or delete your cards any time</Info>
    </>
  );
}
