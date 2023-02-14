

    Settings


useContext

The goal is to call an API (https://rickandmortyapi.com/ ) and display the results per page, using the useContext hook.
Components
CharacterContext.jsx:

Create Context, the component receives {childen}, use six useState: characters, pages, totalResults, actualPage, nextPage, prevPage.

Use a useEffect: with axios, API call and update to useState, and a gotoPage function that updates, actualPage, prevPage and nextPage and makes the API call with the new page

We return the contextProvider and pass through value={...} the states and the gotoPage function

export const CharactersContext = createContext()

        <CharactersContext.Provider 
            value={{
                characters,
                totalResults,
                pages,
                actualPage,
                prevPage,
                nextPage,
                gotoPage
                }}>
            {children}
        </CharactersContext.Provider>
    )

App.js:

Import the context component, wrap Characters into context like children, and Characters is able to access to context.

     import { CharactersProvider } from './context/charactersContext'; 

      <CharactersProvider>
        <Characters/>
      </CharactersProvider>   

Characters.jsx:

Get the context with useContext, import the component Pagination.jsx, map the data received from the context, return it to render.

       const {characters} = useContext(CharactersContext)    

Pagination.jsx:

Get the context with usecontext, render a navbar with totalResults, actualPage, a select with all the available pages, and two buttons prev and next, which update the content through function gotoPage passed in context

       const {totalResults, pages, actualPage, gotoPage, nextPage, prevPage} = useContext(CharactersContext)    

Footer
© 2023 GitHub, Inc.
Footer navigation

UseContext/README.md at master · NandoTen/UseContext
