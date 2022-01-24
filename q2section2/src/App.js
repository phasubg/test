import { tab } from '@testing-library/user-event/dist/tab';
import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
  const [categories,setCategories] = useState([])
  const [text,setText] = useState("")

  useEffect(()=>{
    if (categories.length === 0) {
      fetch('https://api.publicapis.org/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
    }
  },[categories])
  return (
    <div className="App" style={{padding : "50px"}}>
      <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
      <table>
      {
        categories.map(c=>{
          if (c.toUpperCase().includes(text.toUpperCase())) {
            return (
              <tr>
                <td>{c}</td>
              </tr>
            )
          }
        })
      }
        
      </table>
      
    </div>
  );
}

export default App;
