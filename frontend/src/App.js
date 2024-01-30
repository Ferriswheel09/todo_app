import './App.css';
import {List} from './Components/List'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div>
      <NavBar/>
      <h1>Todo List</h1>
      <List/>
    </div>
  );
}

export default App;
