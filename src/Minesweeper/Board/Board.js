import React, { useState, useEffect } from "react"
import Cell from "../Cell/Cell"

const Board = ({ rows, columns, bombs }) => {
  const [grid, setGrid] = useState([])
  useEffect(() => {
    genGrid()
    genBombs()
  }, [rows, columns, bombs])

  const genGrid = () => {
    const newGrid = grid
    for (let x = 0; x < rows; x++) {
      newGrid.push([])
      for (let y = 0; y < columns; y++) {
        newGrid[x].push({
          x,
          y,
          isBomb: false,
          isClicked: false
        })
      }
    }
    setGrid(newGrid)
  }
  const genBombs = () => {
    const newGrid = grid
    for (let i = 0; i < bombs; i++) {
      let x = Math.floor(Math.random() * rows)
      let y = Math.floor(Math.random() * columns)
      newGrid[x][y].isBomb = true
    }
    setGrid(newGrid)
  }
  console.log(grid)
  return (
    <div
      style={{
        border: '1px solid black',
        // backgroundColor: "green",
        height: "70vh",
        width: "70vw"
        // display: "grid",
        // gridTemplateColumns: `repeat(autoFill, ${rows})`
      }}
    >
      {rows}
      {columns}
      {/* {grid} */}
      {grid.map(row => {
        return (
          // <div style={{ width: 10, height: 10, backgroundColor: 'red' }}>
          //   {cell.x}, {cell.y}
          // </div>
          <div>
            {row.map(cell => {
              return (
                <div>
                  <h1>Hello</h1>
                  <Cell cell={cell} />
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Board
