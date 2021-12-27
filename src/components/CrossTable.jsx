import {useState} from 'react'
import styled from 'styled-components';
import CrossCell from './CrossCell'

const Component = () => {
    let cols = '1fr 1fr 1fr'
    let rows = '1fr 1fr 1fr'
    let playerCross = 'X'
    let playerZeros = '0'
    let currentPlayer = playerCross

    const [cellState, setCell] = useState({});

    let printTable = (xCols, yRows) => {
        let x = ''
        let y = ''
        for (let step = 0; step < xCols; step++) {
            x = x + '1fr '
            // setCell(state => {
            //     return {...state, [playerCross + step]: currentPlayer}
            // })
        }
        for (let step = 0; step < yRows; step++) {
            y = y + '1fr '
        }
        cols = x
        rows = y
    }
    let makeMove = () => {
        let oppPlayer = currentPlayer === playerCross ? currentPlayer : playerCross
        //find cell
    }

    let toggleCell = (y, x, player) => {
        const key = `y${y}${playerCross}${x}`
        setCell(state => {
            return {...state, [key]: player}
        })

        makeMove()

    }


    printTable(3, 3)

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
                return <CrossCell item={cellState[`y${colIndex}x${rowIndex}`]}
                                  toggleCell={() => toggleCell(colIndex, rowIndex, currentPlayer)}
                                  key={`y${colIndex}x${rowIndex}`}/>
            })
        })}


    </TableCSS>
}

export default Component
