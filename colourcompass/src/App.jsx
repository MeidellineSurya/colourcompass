import './App.css';
import {useState, useEffect} from 'react';

//import 
import {getTest} from "./functions/test";

function App() {
  const [data, setData] = useState("Hello World!");

  useEffect(() => {
    getTest()
      .then((res) => {
          setData(res.message);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div className="App">
      {/* Where front end code will be located to be presented*/}
      <h1>have mercy ;)</h1>
    </div>
  );
}

export default App;
