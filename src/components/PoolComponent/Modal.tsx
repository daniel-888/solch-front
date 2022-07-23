import * as React from "react";
import styled, { css } from "styled-components";
import { Button } from "@mui/material";

// import { MyButton, Spanskeleton } from "./StyledComponents";
export const Spanskeleton = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 46px;
  line-height: 56px;
  color: black;
`;
export const MyButton = styled(Button)`
  background: linear-gradient(261.78deg, #14f195 -1.89%, #9945ff 99.57%);
  border-radius: 10px !important;
  text-transform: capitalize !important;
  margin: 0 auto !important;
  font-size: 17px;
  color: white !important;

  @media (max-width: 768px) {
    margin-bottom: 20px !important;
  }
`;
const Board = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  ${(props: { mode: any }) => {
    switch (props.mode) {
      case "day":
        return css`
          background: white;
          opacity: 0.95;
          ${Spanskeleton} {
            color: black;
          }
          ${Input} {
            background: white;
            color: black;
          }
          ${MyButton1} {
            background: white;
            color: black !important;
            border: 1px solid rgba(0, 0, 0, 0.7);
          }
          ${Box} {
            border: 1px solid rgba(0, 0, 0, 0.3);
          }
        `;
      case "night":
        return css`
          background: #1e1e1e;
          opacity: 0.9;
          ${Spanskeleton} {
            color: white;
          }
          ${Input} {
            background: #1e1e1e;
            color: white;
          }
          ${MyButton1} {
            background: #1e1e1e;
            color: white !important;
            border: 1px solid rgba(255, 255, 255, 0.7);
          }
          ${Box} {
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
        `;
    }
  }}
`;

const InnerBoard = styled.div`
  max-width: 555px;
  width: 100%;
  margin: 0 auto;
  text-align: left;
  padding: 38px 180px 77px;
`;

const Title = styled(Spanskeleton)`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
`;

const Box = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 13px 30px 20px;
`;

const Lable = styled(Spanskeleton)`
  font-weight: 400;
  font-size: 14px;
  line-height: 33px;
`;

const Lable0 = styled(Spanskeleton)`
  font-weight: 400;
  font-size: 16px;
  line-height: 33px;
`;

const Bold = styled(Spanskeleton)`
  font-weight: 600;
  font-size: 25px;
  line-height: 33px;
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Input = styled.input`
  border: none;
  font-weight: 600;
  font-size: 25px;
  line-height: 33px;
`;
const ButtonGroup = styled(Group)`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
`;
const MyButton0 = styled(Button)`
  width: 170px;
  height: 50px;
  background: linear-gradient(261.78deg, #14f195 -1.89%, #9945ff 99.57%);
  border-radius: 10px !important;
  color: white !important;
  text-transform: capitalize !important;
`;
const MyButton1 = styled(Button)`
  width: 170px;
  height: 50px;
  border-radius: 10px !important;
  text-transform: capitalize !important;
`;

const Modal = (props: any) => {
  return (
    <Board mode={props.mode}>
      <InnerBoard>
        <div style={{ textAlign: "center" }}>
          <Title>Stake</Title>
        </div>
        <div style={{ padding: "37px 0px 0px" }}></div>
        <Box>
          <Lable>Enter Amount</Lable>
          <Group>
            <Input type="text" placeholder="0.0 ... "></Input>
            <Bold>SOLCH</Bold>
          </Group>
        </Box>
        <div style={{ padding: "29px 0px 0px" }}></div>
        <Lable0>Moon Cash Lock Duration: 365D</Lable0>
        <div style={{ padding: "60px 0px 0px" }}></div>
        <ButtonGroup>
          <MyButton0>Confirm</MyButton0>
          <MyButton1>Cancel</MyButton1>
        </ButtonGroup>
      </InnerBoard>
    </Board>
  );
};

export default Modal;
