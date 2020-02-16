import React, { useState, useEffect } from "react"
import BoardHeader from "../BoardHeader/BoardHeader"
import BoardClass from "../Board/BoardClass"

const Game = () => {
  const [rows, setRows] = useState(10)
  const [columns, setColumns] = useState(10)
  const [bombs, setBombs] = useState(25)
  //Need to figure out making this immutable again with useRef or external library
  let [grid, setGrid] = useState([])

  useEffect(() => {
    genBoard(10, 10, 25)

  }, [])

  const genBoard = async (numRows, numColumns, numBombs) => {
    setRows(numRows)
    setColumns(numColumns)
    setBombs(numBombs)
    await genGrid()
    await genBombs()
  }

  const genGrid = () => {
    grid = []
    for (let x = 0; x < rows; x++) {
      grid.push([])
      for (let y = 0; y < columns; y++) {
        grid[x].push({
          x,
          y,
          isBomb: false,
          isClicked: false,
          isFlagged: false
        })
      }
    }
    setGrid(grid)
  }
  const genBombs = () => {
    const newGrid = [...grid]
    for (let i = 0; i < bombs; i++) {
      let x = Math.floor(Math.random() * rows)
      let y = Math.floor(Math.random() * columns)
      newGrid[x][y].isBomb = true
    }
    setGrid(newGrid)
  }

  const reset = () => {
    genBoard(10, 10, 25)
  }

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        margin: 10
      }}
    >
      <BoardHeader bombs={bombs} reset={reset} />
      <BoardClass rows={rows} columns={columns} bombs={bombs} grid={grid} setGrid={setGrid} />
    </div>
  )
}

export default Game
