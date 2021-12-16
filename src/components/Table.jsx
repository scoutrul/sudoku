import styled from 'styled-components';

const Table = styled.div`
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

const Component = ({children}) => {
    return <Table>{children.map((child, index) => {
            return <Sector1><child number={index}/></Sector1>

    })}</Table>
}

export default Component
