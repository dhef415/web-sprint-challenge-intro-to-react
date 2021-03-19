// Write your Character component here
import React, {useState, useEffect} from "react"
import axios from 'axios'


export default function Character(props) {
    const {charId, close} = props
    const [details, setDetails] = useState(null)


    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
          .then(res => {
            console.log(res)
            setDetails(res.data)
          })
          .catch(err => {
            console.log(err)
          })
    
      },[charId])



    return (
        <div className='container'>
            <h3>Name: {details.name}</h3>
            {
                details &&
                <>
                    <p>{details.birth_year}</p>
                    <p> {details.height} </p>
                    <p> {details.mass} </p>
                    <p> {details.homeworld} </p>
                </>
            }
            <button onClick={close}>Close</button>

        </div>
    )
}



