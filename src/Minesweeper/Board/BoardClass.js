import React, { Component } from "react"
import Cell from "../Cell/Cell"

class BoardClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      neighbors: [
        [1, 0],
        [1, 1],
        [1, -1],
        [0, 1],
        [0, -1],
        [-1, 0],
        [-1, 1],
        [-1, -1]
      ]
    }
  }
  // componentDidMount() {
  //   this.genGrid()
  //   this.genBombs()
  // }
  
  // componentDidUpdate(prevProps){
  //   if(prevProps !== this.props){
  //     this.genGrid()
  //     this.genBombs()
  //   }
  // }
  
  // genGrid = () => {
  //   const newGrid = this.state.grid
  //   const { rows, columns, bombs } = this.props
  //   for (let x = 0; x < rows; x++) {
  //     newGrid.push([])
  //     for (let y = 0; y < columns; y++) {
  //       newGrid[x].push({
  //         x,
  //         y,
  //         isBomb: false,
  //         isClicked: false,
  //         isFlagged: false
  //       })
  //     }
  //   }
  //   this.setState({ grid: newGrid })
  // }
  // genBombs = () => {
  //   const newGrid = this.state.grid
  //   const { rows, columns, bombs } = this.props
  //   for (let i = 0; i < bombs; i++) {
  //     let x = Math.floor(Math.random() * rows)
  //     let y = Math.floor(Math.random() * columns)
  //     newGrid[x][y].isBomb = true
  //   }
  //   this.setState({ grid: newGrid })
  // }
  
  checkNeighbors = (x, y) => {
    // const { grid, neighbors } = this.state
    const { neighbors } = this.state
    const { rows, columns, grid } = this.props
    let count = 0
    neighbors.forEach(([newX,newY]) => {
      if(x+newX >= 0 && x+newX < rows && y+newY >= 0 && y + newY < columns){
        if(grid[x+newX][y+newY].isBomb){
          count ++
        }
      }
    })
    return count
  }
  
  clickCell = (x, y) => {
    // const {grid, neighbors} = this.state
    const {neighbors} = this.state
    const {grid, rows, columns} = this.props
    const newGrid = [...grid]
    if(newGrid[x][y].isClicked){
      return
    }
    if(newGrid[x][y].isBomb){
      alert('you died!')
    }
    const newCount = this.checkNeighbors(x, y)
    newGrid[x][y].count=newCount
    newGrid[x][y].isClicked = true
    this.setState({grid: newGrid}, () => {
      if(!newGrid[x][y].isBomb && newCount===0){
        neighbors.forEach(([newX, newY]) => {
          if(x+newX >= 0 && x+newX < rows && y+newY >= 0 && y + newY < columns){
            this.clickCell(x+newX, y+newY)
          }
        })
      }
    })
  }
  
  render() {
    const { grid, rows, columns } = this.props
    return (
      <div
      style={{
        height: 550,
        width: 550,
          display: "grid",
          margin: 0,
          padding: 0,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridColumnGap: 0,
          gridRowGap: 0
        }}
      >
        {grid.map(row => {
          return (
            <>
              {row.map(cell => {
                return <Cell cell={cell} checkNeighbors={this.checkNeighbors} clickCell={this.clickCell} />
              })}
            </>
          )
        })}
      </div>
    )
  }
}

export default BoardClass
