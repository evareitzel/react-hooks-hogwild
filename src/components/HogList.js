import {useState} from "react"
import HogCard from "./HogCard"
import HogsFilter from "./HogsFilter"
import HogSort from "./HogSort"

function HogList({hogs}){
  const [filterHogs, setFilterHogs] = useState(false)
  const [sortCategory, setSortCategory] = useState("")

  const filtered = 
    filterHogs === true
    ? hogs
    : hogs.filter(hog => hog.greased === true)

  const filteredAndSorted = 
    sortCategory === 'All'
    ? filtered
    : filtered.sort((hog1, hog2) => {
      if(sortCategory === 'Name'){
        const name1 = hog1.name.toLowerCase()
        const name2 = hog2.name.toLowerCase()
        if(name1 > name2){
          return 1
        }
        if(name1 < name2){
          return -1
        }
        return 0
      }else if(sortCategory === 'Weight'){
        return hog1.weight - hog2.weight
      }
    })

  console.log(filteredAndSorted)

  const hogList = filteredAndSorted.map(hog => (
    <HogCard
      name={hog.name}
      image={hog.image}
      specialty={hog.specialty}
      weight={hog.weight}
      greased={hog.greased}
      medal={hog['highest medal achieved']}
      key={hog.name}
    />
  ))

  return(
    <>
      <HogsFilter setFilterHogs={setFilterHogs}/>
      <HogSort sortCategory={sortCategory} setSortCategory={setSortCategory}/>
      <div style={{'marginTop' :  '50px' }} className="ui grid container">
        {hogList}
      </div>    
    </>
  )
}

export default HogList