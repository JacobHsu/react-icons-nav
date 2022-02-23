// import './App.css';
import './App.scss'
import SideBar from './components/SideBar'
import {
  HashRouter as Router,
} from 'react-router-dom'

function AppInner() {
  return (
    <div className="App">
      <SideBar match={{ url: "/wallet" }} />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
        <AppInner/>
    </Router>
  )
}

export default App;
