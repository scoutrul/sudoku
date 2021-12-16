import styled from 'styled-components';

const Cell = styled.div`
  display: flex;
  background-color: #e9e9e9;
  width: 40px;
  height: 40px;
  border: 3px double #3d3939;
  box-sizing: border-box;
  justify-content: center;
  align-content: center;
`;

const Number = styled.span`
  font-size: 32px;
  line-height: 30px;
  font-weight: 800;
  color: #4a394b;
`;

const Component = ({number}) => {
    return <Cell>
        <Number>{number}</Number>
    </Cell>
}

export default Component
