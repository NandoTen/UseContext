//Hooks
import React, { useContext } from 'react'
//Context
import { CharactersContext } from '../context/charactersContext'

const Pagination = () => {

    const {totalResults, pages, actualPage, gotoPage, nextPage, prevPage} = useContext(CharactersContext)

  return (
    <div className='d-flex align-items-center mb-3'>
    <div className='col-3'>
    <b>Total results: {totalResults}</b> 
    </div>
    <div className='col-3'>
    <b>Page:</b> {actualPage} of {pages} 
    </div>
    <div className='col-3'>
    <b>Go to page:</b>
    <select className="form-select" aria-label="Default select example" value={actualPage} data-type='goto'
    onChange={e=>{gotoPage(e.target.value,e)}}>
    
        {Array.from(Array(pages).keys()).map(page=>{
            return <option value={page+1} key={page+1} >{page+1}</option>

        })
        }

    </select>
            </div>
    <div className='col-3 text-end'>
       {prevPage && <button data-type='prev' className='btn btn-success me-2' onClick={(e)=>{
        gotoPage(prevPage,e)
        }}>Prev</button>}
       {nextPage && <button data-type='next' className='btn btn-success' onClick={(e)=>{
        gotoPage(nextPage,e)}}>Next</button>
        }
    </div>
    </div>
  )
}

export default Pagination
