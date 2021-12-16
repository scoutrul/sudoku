import styled from 'styled-components';
import Cell from './Cell'

const TableCSS = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Sector1 = styled.div` {
  grid-area: 1 / 1 / 4 / 4;
}`
const Sector2 = styled.div` {
  grid-area: 1 / 4 / 4 / 7;
}`
const Sector3 = styled.div` {
  grid-area: 1 / 7 / 4 / 10;
}`
const Sector4 = styled.div` {
  grid-area: 4 / 1 / 7 / 4;
}`
const Sector5 = styled.div` {
  grid-area: 4 / 4 / 7 / 7;
}`
const Sector6 = styled.div` {
  grid-area: 4 / 7 / 7 / 10;
}`
const Sector7 = styled.div` {
  grid-area: 7 / 1 / 10 / 4;
}`
const Sector8 = styled.div` {
  grid-area: 7 / 4 / 10 / 7;
}`
const Sector9 = styled.div` {
  grid-area: 7 / 7 / 10 / 10;
}`
const Component = () => {
    return <TableCSS>
        {Array(9).fill(0).map((index) => {
            return <Sector1><Cell number={index}/></Sector1>
        })}
        {Array(9).fill(0).map((index) => {
            return <Sector2><Cell number={index}/></Sector2>
        })}
        {Array(9).fill(0).map((index) => {
            return <Sector3><Cell number={index}/></Sector3>
        })}
        {Array(9).fill(0).map((index) => {
            return <Sector4><Cell number={index}/></Sector4>
        })}
        {Array(9).fill(0).map((index) => {
            return <Sector5><Cell number={index}/></Sector5>
        })}
        {Array(9).fill(0).map((index) => {
            return <Sector6><Cell number={index}/></Sector6>
        })}
        {Array(9).fill(0).map((index) => {
            return <Sector7><Cell number={index}/></Sector7>
        })}
        {Array(9).fill(0).map((index) => {
            return <Sector8><Cell number={index}/></Sector8>
        })}
        {Array(9).fill(0).map((index) => {
            return <Sector9><Cell number={index}/></Sector9>
        })}
    </TableCSS>
}

export default Component
