import styled from 'styled-components';

const CellCSS = styled.div`
  display: flex;
  background-color: #e9e9e9;
  width: 40px;
  height: 40px;
  border: 3px double #3d3939;
  box-sizing: border-box;
  justify-content: center;
  align-content: center;
`;

const NumberCSS = styled.span`
  font-size: 12px;
  line-height: 30px;
  font-weight: 800;
  color: #4a394b;
`;

const Component = ({item, x, y}) => {
    return <CellCSS>
        <NumberCSS>x{x} y{y}</NumberCSS>
    </CellCSS>
}

export default Component
