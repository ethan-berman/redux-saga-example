import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {FETCH_DRINKS} from "./app/actionTypes";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.data);
  useEffect(()=>{
    dispatch({"type":FETCH_DRINKS});
    console.log(data);
  },[dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
          <ul>
        {data.map((item, index)=>
          <li key={index}> {item.name}</li>
        )}
          </ul>
      </div>
    </div>
  );
}

export default App;
