import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <label for="New Item">New Item</label>
      <input type="text" id="New Item" name="New Item" value=""></input>
      <button>Add</button>
      <h1>Todo List</h1>
      <ul>
        <li></li>
        <label for="Item 1">Item 1</label>
        <input type="checkbox" id="Item 1" name="Item 1" value=""></input>
        <button>Delete</button>
        <li></li>
        <label for="Item 2">Item 2</label>
        <input type="checkbox" id="Item 2" name="Item 2" value=""></input>
        <button>Delete</button>
      </ul>
      
    </div>
  );
}

export default App;
