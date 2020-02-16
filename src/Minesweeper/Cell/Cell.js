import React, { useState, useEffect } from "react"

const Cell = ({ cell, checkNeighbors, clickCell }) => {
  const { x, y, isBomb } = cell
  // const [x] = useState(cell.x)
  // const [y] = useState(cell.y)
  // const [isBomb] = useState(cell.isBomb)
  const [count, setCount] = useState(0)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    setCount(cell.count)
    setIsClicked(cell.isClicked)
  }, [cell.count, cell.isClicked])

  // const clickCell = () => {
  //   if(isClicked){
  //     return
  //   }
  //   setIsClicked(true)
  //   if(isBomb){
  //     alert('You died!')
  //   }
  //   const newCount = checkNeighbors(x, y)
  //   setCount(newCount)
  //   if(newCount === 0){

  //   }
  // }

  return (
    <div
      style={{
        height: 50,
        width: 50,
        backgroundColor: isClicked ? "green" : "black",
        border: "1px solid white"
      }}
      onClick={() => clickCell(x, y)}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: isClicked && isBomb && "red",
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center'
        }}
      >
        {isBomb && isClicked ? "X" : count}
      </div>
    </div>
  )
}

export default Cell
