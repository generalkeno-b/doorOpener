import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Button = styled.button`
  background-color: #006064;
  color: white;
  padding: 5px 15px;
  border-radius: 100px;
  outline: 0;
`;


function clickMe() {
  axios.get('http://192.168.1.69:1234/garagedoor/1');
}

export default function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#4db6ac"
       }}
>
        <Button onClick={clickMe}>OPEN DOOR</Button>
      </div>
    </>
  );
}
