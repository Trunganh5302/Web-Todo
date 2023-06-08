import React, {useState} from "react";
import Header from "../../Component/header/header";
import Sidebar from "../../Component/sidebar/sidebar";
import Body from "../Body/body";
import "../Home/Homepage.css";
import axios from 'axios'

function HomePage() {

  const [jsonData, setJsonData] = useState(null);

  const handleAPI = () =>{
    axios.get('http://localhost:8080/api/data')
    .then(response => {
      console.log(response.data.mess)
      setJsonData(response.data.mess)
    })
    .catch(error =>{
      console.log(error)
    })
  }

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <Body />
        <button id="myButton" onClick={handleAPI}>Click</button>
        {jsonData && (
          <div>
            <h2>Data from JSON:</h2>
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
