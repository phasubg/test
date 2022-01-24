import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
  const [number,setNumber] = useState(0)
  const [fn,setFn] = useState("isPrime")
  const [results,setResults] = useState("-")
  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
  }
  function isPerfectSquare(x){
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
  }
  function isFibonacci(n){
    return isPerfectSquare(5 * n * n + 4) ||
           isPerfectSquare(5 * n * n - 4);
  }
  useEffect(()=>{
    if (number) {
      if (fn == "isPrime") {
        setResults(isPrime(number).toString())
      }else if(fn == "isFibonacci"){
        setResults(isFibonacci(number,{}).toString())
      }
    }else{
      setResults("")
    }
  },[fn,number]);
  return (
    <div className="App">
      <div style={{display: 'block',minWidth:"600px",overflow:"auto"}}>
        <div style={{display: 'inline-block', width: '300px' ,float: 'left'}}>
          <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} onKeyDown={(e)=>{
            if (e.key === 'Enter') {
              if (number<0) {
                setNumber(1)
              }else if (!Number.isInteger(number)) {
                setNumber(Math.round(number))
              }
            }
          }}/>
        </div>
        <div style={{display: 'inline-block', width: "calc(100% - 500px)" ,minWidth:"100px"}}>
        <select id="fn" onChange={(e)=>{setFn(e.target.value)}}>
          <option value="isPrime">isPrime</option>
          <option value="isFibonacci">isFibonacci</option>
        </select>
        </div>
        <div style={{display: 'inline-block', width: '200px',float: 'right'}}>
            {results}
        </div>
      </div>
    </div>
  );
}

export default App;
