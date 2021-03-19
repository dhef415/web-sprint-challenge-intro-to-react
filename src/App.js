import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [char,setChar] = useState([])
  const [charId,setCharId] = useState(null)

  const openDetails = id => {
    setCharId(id)
  }

  const closeDetails = () =>{
    setCharId(null)
  }

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        console.log(res)
        setChar(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  },[])

  const StarWars = props => (
    <div className='details'>
      {props.info.name}
      <button onClick={() => openDetails(props.info.id)}>
        Check It Out
        </button>
    </div>
  )


  

  return (
    <div className="App">
      <h1 className="Header">duh duh duh DUN DA DUN, DUN DA DUN</h1>
      <div className='container'>
        {char.map(ch => {
          return <StarWars key={ch.id} info={ch} />
        })
        }
        {
          charId && <Character char={charId} close={closeDetails} />
        }
      </div>
    </div>
  );
}

export default App;
