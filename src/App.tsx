import './App.css';
import {Navbar} from './components/Navbar'
import {Introduction} from './components/Introduction'
import {Cards} from './components/Cards'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Introduction/>
      <Cards/>
    </div>
  );
}

export default App;
