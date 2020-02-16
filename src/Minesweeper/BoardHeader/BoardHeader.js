import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  header: {
    backgroundColor: "green",
    width: 500,
    height: 100,
    display: "flex",
    flexFlow: 'column',
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  }
})

const BoardHeader = ({ bombs, reset }) => {
  const {header} = useStyles()
  return (
    <div className={header}>
      <h1>BOMBS: {bombs}</h1>
      <button
      onClick = {() => reset()}
      >Reset</button>
    </div>
  )
}

export default BoardHeader
