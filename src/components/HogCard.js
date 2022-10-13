import {useState} from "react"
import Details from "./Details"

function HogCard({name, image, specialty, weight, greased, medal}){
  const [showDetails, setShowDetails] = useState(false)
  
  function handleHogCardClick(){
    setShowDetails(!showDetails)
  }

  const toggleDetails = showDetails 
    ? <Details 
      specialty={specialty}
      weight={weight}
      greased={greased}
      medal={medal}
    /> 
    : null

  return(
    <div onClick={handleHogCardClick} className="ui eight wide column"       style={{'border' : '1px solid #999'}}
    >
      <h2>{name}</h2>
      <img src={image} alt={name} className="pigImage"/>
      {toggleDetails}
    </div>
  )
}

export default HogCard