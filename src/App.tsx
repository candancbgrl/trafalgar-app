import './App.css';
import {Navbar} from './components/Navbar'
import {Introduction} from './components/Introduction'
import {Cards} from './components/Cards'
import {Subtitles} from './components/Subtitles'
import {GradyanCard} from './components/GradyanCard'
import {Arrows} from './components/Arrows'
import {Article} from './components/Article'
import {Bottom} from './components/Bottom'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Introduction/>
      <Cards/>
      <Subtitles index='0'/>
      <Subtitles index='1'/>
      <GradyanCard/>
      <Arrows/>
      <Article/>
      <Bottom/>

    </div>
  );
}

export default App;
