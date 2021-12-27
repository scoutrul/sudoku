import styled from 'styled-components';

const Component = ({item, x, y, toggleCell}) => {
    const CellCSS = styled.div`
      display: flex;
      background-color: ${item ? '#FFF' : '#e9e9e9'};
      width: 40px;
      height: 40px;
      border: 3px double #3d3939;
      box-sizing: border-box;
      justify-content: center;
      align-content: center;
      user-select: none;
    `;
    const NumberCSS = styled.span`
      font-size: 12px;
      line-height: 30px;
      font-weight: 800;
      color: #4a394b;
      cursor: pointer;
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
    `;

    return <CellCSS>
        <NumberCSS onClick={item ? null : toggleCell}>{item ? item : ''}</NumberCSS>
    </CellCSS>
}

export default Component
