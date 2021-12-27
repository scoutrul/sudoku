import styled from 'styled-components';
import CrossCell from './CrossCell'


const Component = () => {
    let cols = '1fr 1fr 1fr'
    let rows = '1fr 1fr 1fr'

    let printTable = (xCols, yRows) => {
        let x = ''
        let y = ''
        for (let step = 0; step < xCols; step++) {
            x = x + ' 1fr'
        }
        for (let step = 0; step < yRows; step++) {
            y = y + ' 1fr'
        }
        cols = x
        rows = y
    }
    printTable(9, 9)

    const TableCSS = styled.div`
      width: fit-content;
      display: grid;
      grid-template-columns: ${cols};
      grid-template-rows: ${rows};
      gap: 0;
    `;
    return <TableCSS>
        {rows.split('1fr').filter(e => e).map((row, rowIndex) => {
            return cols.split('1fr').filter(e => e).map((col, colIndex) => {
                return <CrossCell item={colIndex} y={colIndex} x={rowIndex}/>
            })
        })}


    </TableCSS>
}

export default Component
