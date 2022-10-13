function HogSort({setSortCategory}){

    function handleChange(e){
      setSortCategory(e.target.value)
    }

  return (
    <select onChange={handleChange}>
      <option value="All">Sort hogs</option>
      <option value="Name">Name</option>
      <option value="Weight">Weight</option>
    </select>
  )
}

export default HogSort