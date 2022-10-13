// import {useState} from "react"

function HogsFilter({filterHogs, setFilterHogs}){

  function handleClick(){
    setFilterHogs(!filterHogs)
  }

  return (
    <button onClick={handleClick}>{filterHogs === true ? 'Show greased hogs' : 'Show all hogs'}</button>
  )
}

export default HogsFilter