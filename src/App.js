//Context
import { CharactersProvider } from './context/charactersContext';

//Components
import Characters from './components/Characters';


function App() {
  return (
    <div className="container">    
      <h2 className='alert alert-success text-center' >Rick & Morty App</h2>
      
      <CharactersProvider>
        <Characters/>
      </CharactersProvider>
    </div>
  );
}

export default App;