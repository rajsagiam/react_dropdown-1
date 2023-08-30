import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown';

function App() {
  const dropdownItems = ['Yes', 'Probably not'];

  return (
    <div className="app-container">
      <h1>Should you use a dropdown</h1>
      <Dropdown items={dropdownItems} />
    </div>
  );
}

export default App;
