import { useEffect, useState } from 'react'
import './App.css'
import Items from './Items'
import Weather from './Weather'

function App() {

  // let [name, setName] = useState("Lakshya");
  // let [age, setAge] = useState(18);


  // useEffect(() => {
  //   console.log("First effect");
  // }, []);

  // useEffect(() => {
  //   console.log("Second effect");
  // }, [age]);

  // let [names, setName] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users", {
  //     method: "GET"
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setName(data);
  //     })
  //     .catch((err) => { console.log(err); })
  // }, [])

  return (
    <>
      {/* <h1>Welcome {name} {age}</h1>
      <button onClick={setName.bind(this, "King")}>Change Name</button>
      <button onClick={() => {
        setAge(25);
      }}>Change Age</button> */}
      {/* {
        names.map((user) => {
          return (<h1>{user.id} {user.name}</h1>);
        })
      } */}
      <Weather />
    </>
  )
}

export default App
