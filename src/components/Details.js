function Details({specialty, weight, greased, medal}){
  return(
    // <p>'Details!'</p>
    <ul>
      <li>⭐ {specialty}</li>
      <li>🏆 {medal}</li>
      <li>{weight} lb / {greased===true ? 'Greased' : 'Not greased'}</li>
    </ul>
  )
}

export default Details