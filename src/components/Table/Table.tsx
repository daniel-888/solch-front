import * as React from "react";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";

export const Spanskeleton = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 46px;
  line-height: 56px;
  color: black;
`;

const Board = styled.div`
  max-width: 1255px;
  width: 100%;
  border-radius: 20px;
  margin: 0 auto;
  ${(props: { mode: any }) => {
    switch (props.mode) {
      case "day":
        return css`
          background: #eff2f9;
          border: 1px solid rgba(0, 0, 0, 0.1);
          ${Spanskeleton} {
            color: black;
          }
        `;
      case "night":
        return css`
          background: rgba(13, 13, 13);
          border: 1px solid rgba(255, 255, 255, 0.2);
          ${Spanskeleton} {
            color: white;
          }
        `;
    }
  }}
`;

const InnerBoard = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 49px 0px 50px;
  margin: 0 auto;
`;
const Title = styled(Spanskeleton)`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
`;
const Spacer50 = styled.div`
  padding: 50px 0px 0px;
`;
const Table = styled.div`
  overflow-x: auto;
  width: 100%;
  @media (max-width: 568px) {
    width: 100vw;
  }
`;
const TableHead = styled.div``;
const TableBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
`;
const TableRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border-radius: 10px;
  max-width: 1175px;
  width: 100%;
  ${(props: { hover: any; mode: any; index: any }) => {
    switch (props.mode) {
      case "day":
        if (props.hover && props.index > 0 && props.index < 4)
          return css`
            background: white;
            border-left: 10px solid rgba(202, 177, 88);
          `;
        else if (!props.hover && props.index > 0 && props.index < 4)
          return css`
            background: white;
            border-left: 10px solid rgba(204, 204, 204);
          `;
        else if (props.hover)
          return css`
            background: white;
            border-left: 10px solid rgba(204, 204, 204, 0);
          `;
        else
          return css`
            background: #eff2f9;
            border-left: 10px solid rgba(204, 204, 204, 0);
          `;
      case "night":
        if (props.hover) {
          if (props.index > 0 && props.index < 4)
            return css`
              background: linear-gradient(
                  90deg,
                  rgba(252, 220, 105, 0.25) 0.68%,
                  rgba(255, 255, 255, 0) 41.55%
                ),
                #1e1e1e;
              border-left: 10px solid rgba(202, 177, 88);
            `;
          else
            return css`
              background: #1e1e1e;
              border-left: 10px solid rgba(204, 204, 204, 0);
            `;
        } else {
          if (props.index > 0 && props.index < 4)
            return css`
              background: linear-gradient(
                  90deg,
                  rgba(255, 255, 255, 0.25) 0.68%,
                  rgba(255, 255, 255, 0) 41.55%
                ),
                #1e1e1e;
              border-left: 10px solid rgba(204, 204, 204);
            `;
          else
            return css`
              background: rgba(255, 255, 255, 0);
              border-left: 10px solid rgba(204, 204, 204, 0);
            `;
        }
    }
  }}
`;
const TableCell = styled.div`
  ${(props: { w: any }) => {
    return css`
      width: ${props.w}%;
    `;
  }}
  padding: 18px 0px 19px;
  text-align: left;
`;
const HeadSpan = styled(Spanskeleton)`
  font-weight: 400;
  font-size: 14px;
  line-height: 33px;
`;
const CellSpan = styled(Spanskeleton)`
  font-weight: 500;
  font-size: 15px;
  line-height: 33px;
`;

const Logo = styled.div`
  background-repeat: no-repeat;
  background-position: 44px -3px;
  ${(props: { isEnable: any; mode: any }) => {
    if (props.isEnable) {
      if (props.mode === "day")
        return css`
          background-image: url("Frame(1).png");
        `;
      else
        return css`
          background-image: url("Frame(2).png");
        `;
    }
  }}
`;

function createData(username: string, duration: string, reward: string) {
  return { username, duration, reward };
}

// const rows = [
//   createData("Adam", "90 Days", "300 SOLCH"),
//   createData("Adam", "90 Days", "300 SOLCH"),
//   createData("Adam", "90 Days", "300 SOLCH"),
//   createData("Adam", "90 Days", "300 SOLCH"),
//   createData("Adam", "90 Days", "300 SOLCH"),
//   createData("Adam", "90 Days", "300 SOLCH"),
//   createData("Adam", "90 Days", "300 SOLCH"),
// ];

const StakeTable = (props: any) => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows(props.data);
    console.log(props.data);
  }, [props.data]);
  return (
    <Board mode={props.mode}>
      <InnerBoard>
        <Title>Staking Leaderboard</Title>
        <Spacer50 />
        <Table>
          <TableHead>
            <TableRow hover={false} mode={props.mode} index={0}>
              <TableCell w={15}>
                <HeadSpan>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#
                </HeadSpan>
              </TableCell>
              <TableCell w={45}>
                <HeadSpan>Username</HeadSpan>
              </TableCell>
              <TableCell w={20}>
                <HeadSpan>Staking Duration</HeadSpan>
              </TableCell>
              <TableCell w={20}>
                <HeadSpan>Earned Rewards</HeadSpan>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any, index) => (
              <TableRow
                hover={index % 2 === 0}
                mode={props.mode}
                index={index + 1}
                key={index}
              >
                <TableCell w={15}>
                  <CellSpan>
                    <Logo isEnable={index >= 0 && index < 3} mode={props.mode}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{index + 1}
                    </Logo>
                  </CellSpan>
                </TableCell>
                <TableCell w={45}>
                  <CellSpan>{row.username}</CellSpan>
                </TableCell>
                <TableCell w={20}>
                  <CellSpan>{row.duration}</CellSpan>
                </TableCell>
                <TableCell w={20}>
                  <CellSpan>{row.amount}</CellSpan>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </InnerBoard>
    </Board>
  );
};
export default StakeTable;
