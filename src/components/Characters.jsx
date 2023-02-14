//Hooks
import React, { useContext } from 'react'
//Context
import { CharactersContext } from '../context/charactersContext'
//Components
import Pagination from './Pagination'

const Characters = () => {

    const {characters} = useContext(CharactersContext)

  return (
    <div>
      <div className='row'>
      <Pagination/>
      {characters.map((item,index)=>{
        return(
        <div className='col-3' key={index}>
          <div className="card" >
              <img src={item.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text"><b>Status: {item.status}</b><br></br>
                  <b>Species: {item.species}</b></p>
                  
              </div>
            </div>
        </div>
        )
      })}     
      </div>
    </div>
  )
}

export default Characters
