//Hooks
import { createContext, useState, useEffect } from "react";
//axios
import axios from 'axios'
// context
export const CharactersContext = createContext()

export const CharactersProvider = ({children})=>{
    const [characters, setCharacters] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [pages, setPages] = useState(0)
    const [actualPage, setActualPage] = useState(1)
    const [prevPage, setPrevPage] = useState(null)
    const [nextPage, setNextPage] = useState(null)

    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/character')
        .then(response =>{
            if(response.status === 200){
                const {info, results} = response.data
            console.log('response.data.info.count', info.next)
        setCharacters(results)
        setTotalResults(info.count)
        setPages(info.pages)
        setPrevPage(info.prev)
        setNextPage(info.next)
    }
        })
        .catch((error)=>{alert(error)})

    },[])

    const gotoPage = (page,e)=>{
        const type = e.target.dataset.type
        
        switch (type){
            case 'prev':
                setActualPage(actualPage-1)
            break
            case 'next':
                setActualPage(actualPage+1)
            break
            case 'goto':
                const numberPage = Number(e.target.value)
                
                page = `https://rickandmortyapi.com/api/character?page=${numberPage}`
                setActualPage(numberPage)
            break
            default:
                break
        }

        axios.get(page)
        .then(response =>{
            if(response.status === 200){
                const {info, results} = response.data
                setCharacters(results)
                setPrevPage(info.prev)
                setNextPage(info.next)
        }
        })
        .catch((error)=>{alert(error)})
    }

    return (
        <CharactersContext.Provider value={{characters, totalResults, pages, actualPage, prevPage, nextPage, gotoPage}}>
            {children}
        </CharactersContext.Provider>
    )
}